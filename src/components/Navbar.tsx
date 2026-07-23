import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Inicio", href: "/#hero" },
  { name: "Funciones", href: "/#features" },
  { name: "Nuestra App", href: "/#app" },
  { name: "Aliados", href: "/#aliados" },
  { name: "Equipo", href: "/#team" },
];

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfterNavigate?: () => void,
) {
  const [path, hash] = href.split("#");
  const isHome = window.location.pathname === "/" || window.location.pathname === "";
  const targetPath = path || "/";

  if ((targetPath === "/" || targetPath === "") && hash) {
    if (isHome) {
      e.preventDefault();
      smoothScrollTo(hash);
      onAfterNavigate?.();
    } else {
      e.preventDefault();
      window.location.href = href;
    }
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center group" aria-label="Ir al inicio de RodarLibre">
          <img
            src="/logo-lettering.png"
            alt="RodarLibre"
            width={420}
            height={231}
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:opacity-85",
              scrolled ? "h-9" : "h-11",
            )}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href, () => setIsOpen(false))}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <Button asChild size="sm" className="font-semibold">
            <a href="/#download" onClick={(e) => handleAnchorClick(e, "/#download", () => setIsOpen(false))}>
              Descarga la App
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href, () => setIsOpen(false))}
              className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors px-2 py-1 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full font-semibold mt-2">
            <a href="/#download" onClick={(e) => handleAnchorClick(e, "/#download", () => setIsOpen(false))}>
              Descarga la App
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
