
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Search, Mail, Phone, Shield, Star, Plus, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const staff = [
  { name: "Carlos Silva", role: "Supervisor", status: "Em Turno", rating: 4.9, email: "carlos@spartasecurity.com" },
  { name: "Marta Oliveira", role: "Agente Elite", status: "Disponível", rating: 4.8, email: "marta@spartasecurity.com" },
  { name: "João Pereira", role: "Vigilante Armado", status: "Folga", rating: 4.5, email: "joao@spartasecurity.com" },
  { name: "Luciana Santos", role: "Primeiros Socorros", status: "Em Turno", rating: 5.0, email: "luciana@spartasecurity.com" },
  { name: "Roberto Costa", role: "Agente Tático", status: "Férias", rating: 4.7, email: "roberto@spartasecurity.com" },
]

export default function StaffPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight mb-1">Efetivo (Staff)</h1>
          <p className="text-muted-foreground">Base de dados central de agentes e histórico de escalas.</p>
        </div>
        <Button className="gap-2 font-bold h-11 px-6 shadow-lg shadow-primary/20">
          <Plus className="h-5 w-5" /> Cadastrar Agente
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
               <div>
                <CardTitle className="font-headline">Diretório de Profissionais</CardTitle>
                <CardDescription>Consulte disponibilidade e certificações da equipe.</CardDescription>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Pesquisar por nome ou cargo..." className="pl-10 bg-muted/30 border-border/50" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border/50">
                  <TableHead>Agente</TableHead>
                  <TableHead>Cargo Principal</TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staff.map((agent) => (
                  <TableRow key={agent.name} className="border-border/40 hover:bg-muted/30 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 border border-primary/20">
                          <AvatarFallback className="bg-primary/10 text-primary font-bold">{agent.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{agent.name}</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Sparta-ID: {Math.floor(Math.random() * 9000) + 1000}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Shield className="h-3 w-3 text-primary opacity-60" />
                        <span className="text-sm">{agent.role}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-3.5 w-3.5" />
                        <Phone className="h-3.5 w-3.5" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-primary fill-primary" />
                        <span className="text-xs font-bold">{agent.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary" 
                        className={
                          agent.status === "Disponível" ? "bg-green-500/10 text-green-500" :
                          agent.status === "Em Turno" ? "bg-primary/10 text-primary" :
                          "bg-muted text-muted-foreground"
                        }
                      >
                        {agent.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
