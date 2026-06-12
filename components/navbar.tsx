"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Inicio", href: "/#hero", sectionId: "hero" },
  { name: "Funciones", href: "/#features", sectionId: "features" },
  { name: "Nuestra App", href: "/#app", sectionId: "app" },
  { name: "Aliados", href: "/#aliados", sectionId: "aliados" },
  { name: "Equipo", href: "/#team", sectionId: "team" },
]

function smoothScrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { href: string; sectionId: string }
  ) {
    e.preventDefault()
    setIsOpen(false)

    if (pathname === "/") {
      // Already on home — just smooth scroll
      smoothScrollTo(link.sectionId)
    } else {
      // Navigate to home, then scroll after page loads
      router.push("/")
      // Give Next.js time to render before scrolling
      setTimeout(() => smoothScrollTo(link.sectionId!), 400)
    }
  }

  function handleDownloadClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setIsOpen(false)
    if (pathname === "/") {
      smoothScrollTo("download")
    } else {
      router.push("/")
      setTimeout(() => smoothScrollTo("download"), 400)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group" aria-label="Ir al inicio de RodarLibre">
          <Image
            src="/logo-lettering.png"
            alt="RodarLibre"
            width={420}
            height={231}
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:opacity-85",
              scrolled ? "h-9" : "h-11"
            )}
            priority
            sizes="96px"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <Button asChild size="sm" className="font-semibold">
            <a href="/#download" onClick={handleDownloadClick}>
              Descargar App
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full font-semibold mt-2">
            <a href="/#download" onClick={handleDownloadClick}>
              Descargar App
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
