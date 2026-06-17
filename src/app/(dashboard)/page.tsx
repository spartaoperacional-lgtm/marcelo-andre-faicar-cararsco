
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, MapPin, Calendar, ArrowUpRight, Clock } from "lucide-react"
import Link from "next/link"

const stats = [
  { label: "Agentes Ativos", value: "42", icon: Users, color: "text-primary", bg: "bg-primary/10" },
  { label: "Postos Fixos", value: "18", icon: MapPin, color: "text-accent", bg: "bg-accent/10" },
  { label: "Próximos Eventos", value: "5", icon: Calendar, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Nível de Prontidão", value: "98%", icon: Shield, color: "text-green-500", bg: "bg-green-500/10" },
]

const recentActivity = [
  { title: "Escala Gerada", desc: "Escala para Evento 'Verão 2024' criada via AI", time: "2h atrás", status: "Novo" },
  { title: "Substituição", desc: "Agente Silva substituído por Agente Costa no Posto Porto", time: "4h atrás", status: "Aviso" },
  { title: "Relatório Mensal", desc: "Posto Residencial Horizonte fechado", time: "Ontem", status: "Info" },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight mb-1">Painel de Comando</h1>
        <p className="text-muted-foreground">Monitoramento em tempo real das operações Sparta Litoral.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border/50 bg-card/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
              <div className={`${stat.bg} p-2 rounded-md`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-4 border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle className="font-headline">Próximas Escalas</CardTitle>
            <CardDescription>Escalas críticas que necessitam atenção.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Show na Arena Verão</p>
                      <p className="text-xs text-muted-foreground">24 Dez 2024 • 18:00 - 02:00</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-primary/30 text-primary">12 Agentes</Badge>
                    <Link href="/roster-tool" className="text-muted-foreground hover:text-primary transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 border-border/50 bg-card/50">
          <CardHeader>
            <CardTitle className="font-headline">Atividade Recente</CardTitle>
            <CardDescription>Atualizações do sistema e log de escalas.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="relative pl-6 pb-6 last:pb-0">
                  <div className="absolute left-0 top-1 bottom-0 w-px bg-border">
                    <div className="absolute top-0 -left-[3px] w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{activity.title}</span>
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {activity.time}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.desc}</p>
                    <Badge variant="secondary" className="w-fit text-[9px] h-4 px-1 mt-1">{activity.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
