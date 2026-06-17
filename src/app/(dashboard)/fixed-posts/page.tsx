
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MapPin, ShieldCheck, AlertCircle, Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const posts = [
  { id: "FP-001", name: "Residencial Horizonte", type: "Condomínio", status: "Operacional", agents: 4, alert: false },
  { id: "FP-002", name: "Porto Litoral Sul", type: "Industrial", status: "Operacional", agents: 12, alert: true },
  { id: "FP-003", name: "Shopping Central", type: "Varejo", status: "Alerta", agents: 8, alert: false },
  { id: "FP-004", name: "Centro Médico Sparta", type: "Saúde", status: "Operacional", agents: 3, alert: false },
  { id: "FP-005", name: "Usina Delta", type: "Infraestrutura", status: "Manutenção", agents: 6, alert: false },
]

export default function FixedPostsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight mb-1">Postos Fixos</h1>
          <p className="text-muted-foreground">Gerenciamento de vigilância em locais permanentes.</p>
        </div>
        <Button className="gap-2 font-bold h-11 px-6 shadow-lg shadow-primary/20">
          <Plus className="h-5 w-5" /> Novo Posto
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="border-border/50 bg-card/50">
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle className="font-headline">Todos os Postos</CardTitle>
                <CardDescription>Monitore o status e o efetivo de cada local fixo.</CardDescription>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Filtrar por nome ou código..." className="pl-10 bg-muted/30 border-border/50" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border/50">
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Nome do Posto</TableHead>
                  <TableHead>Segmento</TableHead>
                  <TableHead>Efetivo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((post) => (
                  <TableRow key={post.id} className="border-border/40 hover:bg-muted/30 transition-colors">
                    <TableCell className="font-mono text-xs text-muted-foreground">{post.id}</TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary opacity-60" />
                        {post.name}
                        {post.alert && <AlertCircle className="h-4 w-4 text-accent animate-pulse" />}
                      </div>
                    </TableCell>
                    <TableCell>{post.type}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono">{post.agents} Agentes</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="secondary" 
                        className={
                          post.status === "Operacional" ? "bg-green-500/10 text-green-500 border-green-500/20" :
                          post.status === "Alerta" ? "bg-accent/10 text-accent border-accent/20" :
                          "bg-muted text-muted-foreground"
                        }
                      >
                        {post.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                        Gerenciar
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
