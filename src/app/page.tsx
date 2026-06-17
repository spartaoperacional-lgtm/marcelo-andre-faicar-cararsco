
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Shield } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(217, 179, 65, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="z-10 max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex justify-center mb-4">
          <div className="relative p-10 rounded-3xl bg-primary/5 border border-primary/20 shadow-2xl shadow-primary/10 backdrop-blur-sm overflow-hidden group flex items-center justify-center h-48 w-48 mx-auto">
            <Shield className="h-24 w-24 text-primary transition-transform group-hover:scale-110 duration-700" />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/80">Sparta Escala Operacional</span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary uppercase leading-tight">
            Sparta <span className="text-foreground">Litoral</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
            Plataforma inteligente de <span className="text-primary/90 font-medium">Controle de Acesso</span> e gestão de efetivo operacional.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button asChild className="h-16 px-10 text-xl font-bold shadow-xl shadow-primary/20 group rounded-xl">
            <Link href="/dashboard" className="flex items-center gap-3">
              Painel de Comando <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-16 px-10 text-xl font-medium border-border/50 bg-card/50 hover:bg-primary/5 rounded-xl">
            <Link href="/portal">Portal do Agente</Link>
          </Button>
        </div>
      </div>

      <footer className="absolute bottom-8 text-[10px] uppercase tracking-[0.5em] font-medium text-muted-foreground opacity-50">
        Sparta Litoral Security &bull; Controle de Acesso
      </footer>
    </div>
  )
}
