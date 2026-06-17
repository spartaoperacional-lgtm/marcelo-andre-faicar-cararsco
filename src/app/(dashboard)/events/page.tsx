
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin, Clock, Search, Filter, ChevronRight, Plus } from "lucide-react"

const upcomingEvents = [
  { 
    id: "EVT-88", 
    name: "Festival de Verão Guarujá", 
    date: "24 Dez, 2024", 
    location: "Arena Praia", 
    staff: 24, 
    roles: ["Supervisor", "Armed", "Vip"],
    status: "Escalando"
  },
  { 
    id: "EVT-89", 
    name: "Copa Litoral de Surf", 
    date: "28 Dez, 2024", 
    location: "Píer Norte", 
    staff: 15, 
    roles: ["Rescue", "Patrol"],
    status: "Confirmado"
  },
  { 
    id: "EVT-90", 
    name: "Réveillon Sparta", 
    date: "31 Dez, 2024", 
    location: "Hotel Litoral", 
    staff: 40, 
    roles: ["Access Control", "Elite Squad"],
    status: "Aguardando IA"
  },
]

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight mb-1">Eventos Especiais</h1>
          <p className="text-muted-foreground">Escalamento e logística para operações pontuais.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="gap-2 border-border/50 bg-card/50 no-print">
            <Filter className="h-4 w-4" /> Filtros
          </Button>
          <Button className="gap-2 font-bold h-11 px-6 shadow-lg shadow-primary/20">
            <Plus className="h-5 w-5" /> Criar Evento
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="border-border/50 bg-card/50 overflow-hidden hover:border-primary/30 transition-all group">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-64 bg-muted/30 p-6 flex flex-col justify-center border-r border-border/50">
                <Badge variant="outline" className="w-fit mb-3 font-mono text-xs">{event.id}</Badge>
                <h3 className="font-headline text-xl font-bold mb-1">{event.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {event.date}
                </div>
              </div>
              <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Localização</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Efetivo Necessário</p>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{event.staff} Agentes Sparta</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                   <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Perfis Demandados</p>
                   <div className="flex flex-wrap gap-1.5">
                     {event.roles.map((role, i) => (
                       <Badge key={i} variant="secondary" className="text-[10px] h-5">{role}</Badge>
                     ))}
                   </div>
                </div>

                <div className="flex flex-col justify-between items-end">
                  <Badge 
                    className={
                      event.status === "Confirmado" ? "bg-green-500/10 text-green-500 border-green-500/20" :
                      event.status === "Aguardando IA" ? "bg-primary/10 text-primary border-primary/20" :
                      "bg-accent/10 text-accent border-accent/20"
                    }
                  >
                    {event.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="gap-2 group-hover:text-primary group-hover:bg-primary/10">
                    Detalhes da Operação <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
