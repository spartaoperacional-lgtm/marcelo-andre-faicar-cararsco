"use client"

import { useState } from "react"
import { aiScheduleDraftGeneration, type AiScheduleDraftGenerationOutput } from "@/ai/flows/generate-schedule-draft"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Sparkles, Loader2, Calendar, Clock, UserCheck, Shield, FileText, Printer } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"

export default function RosterToolPage() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AiScheduleDraftGenerationOutput | null>(null)

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast({ title: "Erro", description: "Por favor, descreva as necessidades da escala.", variant: "destructive" })
      return
    }

    setIsLoading(true)
    try {
      const output = await aiScheduleDraftGeneration(input)
      setResult(output)
      toast({ title: "Sucesso", description: "Escala gerada com inteligência artificial." })
    } catch (error) {
      toast({ 
        title: "Erro", 
        description: "Ocorreu um erro ao processar a escala via IA.", 
        variant: "destructive" 
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="space-y-8">
      <div className="no-print">
        <h1 className="font-headline text-3xl font-bold tracking-tight mb-1 flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-primary" />
          Escalas Inteligentes
        </h1>
        <p className="text-muted-foreground">Utilize nossa IA para converter pedidos em escalas estruturadas instantaneamente.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5 items-start">
        <div className="lg:col-span-2 space-y-4 no-print">
          <Card className="border-primary/20 bg-card/50">
            <CardHeader>
              <CardTitle className="text-lg">Descrever Necessidades</CardTitle>
              <CardDescription>Explique o evento, data, horários e profissionais.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                placeholder="Ex: Preciso de 10 seguranças para o evento 'Festival da Primavera' no dia 2024-12-30, das 14:00 às 22:00..."
                className="min-h-[200px] bg-muted/30 border-border/50 focus:border-primary/50"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button 
                className="w-full h-12 text-md font-semibold gap-2 shadow-lg shadow-primary/20" 
                onClick={handleGenerate}
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Sparkles className="h-5 w-5" />}
                Gerar Escala Draft
              </Button>
            </CardContent>
            <CardFooter className="bg-muted/10 p-4 border-t border-border/50 text-[10px] uppercase tracking-wider text-muted-foreground text-center">
              Tecnologia Sparta Litoral Security
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          {result ? (
            <Card className="border-border/50 shadow-2xl relative overflow-hidden print:border-none print:shadow-none bg-card/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
              
              <CardHeader className="border-b border-border/50 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <span className="font-headline font-bold text-xl tracking-tight uppercase text-primary">Sparta Litoral Security</span>
                  </div>
                  <Button variant="outline" size="sm" className="no-print gap-2" onClick={handlePrint}>
                    <Printer className="h-4 w-4" /> Imprimir
                  </Button>
                </div>
                <CardTitle className="text-2xl font-headline mt-4">{result.eventName}</CardTitle>
                <div className="flex flex-wrap gap-4 mt-2">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" /> {result.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" /> {result.startTime} às {result.endTime}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <h3 className="font-headline font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">Composição do Efetivo</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {result.positions.map((pos, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-border/50 bg-muted/20 flex flex-col gap-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-bold text-md">{pos.role}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{pos.quantity} Profissionais</p>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <UserCheck className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {pos.requiredSkills?.map((skill, sIdx) => (
                          <Badge key={sIdx} variant="secondary" className="text-[9px] uppercase tracking-tighter h-5 px-1.5">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 no-print">
                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1 font-bold">Aprovar e Publicar</Button>
                    <Button variant="secondary" className="flex-1">Refinar com IA</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-12 text-center rounded-2xl border-2 border-dashed border-border/40 bg-muted/10 opacity-60">
              <FileText className="h-16 w-16 text-muted-foreground mb-4 opacity-20" />
              <h3 className="font-headline text-xl font-medium text-muted-foreground">Aguardando Parâmetros</h3>
              <p className="text-sm text-muted-foreground max-w-xs mt-2">
                Preencha o formulário ao lado para gerar o rascunho da escala.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
