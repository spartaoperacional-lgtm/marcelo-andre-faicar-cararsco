'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating an initial draft of a work schedule
 * based on a natural language description of staffing needs.
 *
 * - aiScheduleDraftGeneration - A function that generates a draft work schedule.
 * - AiScheduleDraftGenerationInput - The input type for the aiScheduleDraftGeneration function.
 * - AiScheduleDraftGenerationOutput - The return type for the aiScheduleDraftGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiScheduleDraftGenerationInputSchema = z
  .string()
  .describe(
    "A natural language description of the staffing needs for an event or fixed post. E.g., 'Need 5 guards for 'Festival of Lights' event on 2024-12-24, from 18:00 to 00:00, requiring at least 2 with first-aid certification and 1 supervisor.'"
  );
export type AiScheduleDraftGenerationInput = z.infer<
  typeof AiScheduleDraftGenerationInputSchema
>;

const ShiftPositionSchema = z.object({
  role: z
    .string()
    .describe(
      'The specific role for this position (e.g., "Security Guard", "Supervisor", "First-Aid Responder").'
    ),
  quantity: z
    .number()
    .int()
    .positive()
    .describe('The number of staff required for this specific role.'),
  requiredSkills: z
    .array(z.string())
    .describe(
      'An array of specific skills or certifications required for staff in this role (e.g., "First-Aid Certification", "Supervisor Training").'
    )
    .optional(),
});

const AiScheduleDraftGenerationOutputSchema = z.object({
  eventName: z.string().describe('The name of the event or fixed post.'),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .describe('The date of the shift in YYYY-MM-DD format.'),
  startTime: z
    .string()
    .regex(/^\d{2}:\d{2}$/)
    .describe('The start time of the shift in HH:MM (24-hour) format.'),
  endTime: z
    .string()
    .regex(/^\d{2}:\d{2}$/)
    .describe(
      'The end time of the shift in HH:MM (24-hour) format. If the shift crosses midnight, this should be the end time of the work period.'
    ),
  positions: z
    .array(ShiftPositionSchema)
    .describe(
      'An array describing each distinct position and its requirements for the shift.'
    ),
});
export type AiScheduleDraftGenerationOutput = z.infer<
  typeof AiScheduleDraftGenerationOutputSchema
>;

export async function aiScheduleDraftGeneration(
  input: AiScheduleDraftGenerationInput
): Promise<AiScheduleDraftGenerationOutput> {
  return aiScheduleDraftGenerationFlow(input);
}

const aiScheduleDraftGenerationPrompt = ai.definePrompt({
  name: 'aiScheduleDraftGenerationPrompt',
  input: {schema: AiScheduleDraftGenerationInputSchema},
  output: {schema: AiScheduleDraftGenerationOutputSchema},
  prompt: `You are an expert shift scheduling assistant for a security company named Sparta Litoral Security.\nYour task is to parse a natural language description of a staffing need for an event or fixed post and extract the structured information required to generate a draft work schedule.\n\nCarefully identify the event or post name, the date, the start and end times, and all required positions, including their quantities and any specific skills or certifications needed.\nIf a total number of "guards" is mentioned, and specific roles with certifications are also mentioned, you must deduce the quantity for the general "Security Guard" role by subtracting the specialized roles from the total.\n\nExample input: 'Need 5 guards for 'Festival of Lights' event on 2024-12-24, from 18:00 to 00:00, requiring at least 2 with first-aid certification and 1 supervisor.'\nExample output (structured JSON):\n{\n  "eventName": "Festival of Lights",\n  "date": "2024-12-24",\n  "startTime": "18:00",\n  "endTime": "00:00",\n  "positions": [\n    {\n      "role": "First-Aid Security Guard",\n      "quantity": 2,\n      "requiredSkills": ["First-Aid Certification"]\n    },\n    {\n      "role": "Supervisor",\n      "quantity": 1,\n      "requiredSkills": ["Supervisor"]\n    },\n    {\n      "role": "Security Guard",\n      "quantity": 2,\n      "requiredSkills": []\n    }\n  ]\n}\n\nEnsure the output strictly adheres to the JSON schema provided.\n\nNatural language description: {{{input}}}`,
});

const aiScheduleDraftGenerationFlow = ai.defineFlow(
  {
    name: 'aiScheduleDraftGenerationFlow',
    inputSchema: AiScheduleDraftGenerationInputSchema,
    outputSchema: AiScheduleDraftGenerationOutputSchema,
  },
  async input => {
    const {output} = await aiScheduleDraftGenerationPrompt(input);
    return output!;
  }
);
