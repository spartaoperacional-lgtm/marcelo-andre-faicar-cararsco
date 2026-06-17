
"use client"

import * as React from "react"
import { 
  LayoutDashboard, 
  Calendar, 
  MapPin, 
  Users, 
  Sparkles, 
  LogOut,
  UserCircle,
  Shield
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

const mainNav = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Escalas Inteligentes", url: "/roster-tool", icon: Sparkles },
  { title: "Eventos", url: "/events", icon: Calendar },
  { title: "Postos Fixos", url: "/fixed-posts", icon: MapPin },
  { title: "Efetivo (Staff)", url: "/staff", icon: Users },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="py-6 px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-primary/40 overflow-hidden">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden">
            <span className="font-headline text-sm font-bold tracking-tight text-primary whitespace-nowrap">Sparta Escala</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Controle de Acesso</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-headline uppercase text-[10px] tracking-widest mb-2 px-4 group-data-[collapsible=icon]:hidden">Operacional</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className="h-11 transition-all duration-200"
                  >
                    <Link href={item.url} className="flex items-center gap-3 px-4">
                      <item.icon className={`h-5 w-5 ${pathname === item.url ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className="font-medium text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Staff Portal">
              <Link href="/portal" className="flex items-center gap-3 px-2 h-11">
                <UserCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">Portal do Agente</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="flex items-center gap-3 px-2 h-11 text-destructive hover:text-destructive/80">
              <Link href="/">
                <LogOut className="h-5 w-5" />
                <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">Sair</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
