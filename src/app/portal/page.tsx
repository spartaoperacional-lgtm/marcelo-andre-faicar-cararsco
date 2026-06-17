import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Calendar, MapPin, Clock, ArrowLeft, User, LogOut } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function StaffPortalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-md space-y-8 mt-8">
        <div className="flex items-center justify-between no-print">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Voltar ao Admin</span>
          </Link>
          <div className="flex items-center gap-2 text-primary font-headline font-bold">
            <Shield className="h-5 w-5" /> Sparta Escala
          </div>
        </div>

        <div className="text-center">
          <div className="h-20 w-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
            <User className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-2xl font-headline font-bold tracking-tight">Bem-vindo, Agente Silva</h1>
          <p className="text-muted-foreground text-sm uppercase tracking-widest mt-1">Efetivo Sparta Litoral</p>
        </div>

        <div className="space-y-4">
          <h2 className="font-headline text-lg font-bold flex items-center gap-2 border-b border-border/50 pb-2">
            <Calendar className="h-5 w-5 text-primary" /> Minha Escala de Hoje
          </h2>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Confirmado</Badge>
                <span className="text-xs text-muted-foreground font-mono">ID-2234</span>
              </div>
              <CardTitle className="text-xl mt-2">Controle de Acesso Noturno</CardTitle>
              <CardDescription className="flex items-center gap-1.5 mt-1">
                <MapPin className="h-3.5 w-3.5 text-accent" /> Residencial Horizonte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-3 rounded-lg bg-background/50 border border-border/50 mt-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Horário de Turno</p>
                  <p className="font-headline font-bold">19:00 - 07:00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="font-headline text-lg font-bold flex items-center gap-2 border-b border-border/50 pb-2 pt-4">
             Próximos Turnos
          </h2>

          {[1, 2].map((i) => (
            <Card key={i} className="border-border/50 bg-card/50">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-muted flex flex-col items-center justify-center">
                    <span className="text-[10px] text-muted-foreground font-bold">DEZ</span>
                    <span className="text-md font-bold text-primary">{24 + i}</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Posto Porto Litoral</p>
                    <p className="text-xs text-muted-foreground">08:00 - 18:00</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px]">Padrão</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-8 no-print">
          <Button variant="ghost" className="w-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 gap-2">
            <LogOut className="h-4 w-4" /> Encerrar Sessão
          </Button>
        </div>
      </div>
      
      <footer className="mt-12 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium text-center opacity-50">
        Desenvolvido pela Sparta Litoral Security &copy; 2024
      </footer>
    </div>
  )
}
