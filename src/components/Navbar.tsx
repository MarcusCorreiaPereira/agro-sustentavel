import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">AgroSustentável</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("problema")} className="text-foreground hover:text-primary transition-smooth">
              O Problema
            </button>
            <button onClick={() => scrollToSection("solucoes")} className="text-foreground hover:text-primary transition-smooth">
              Soluções
            </button>
            <button onClick={() => scrollToSection("engenheiro")} className="text-foreground hover:text-primary transition-smooth">
              Engenheiro Ambiental
            </button>
            <button onClick={() => scrollToSection("quiz")} className="text-foreground hover:text-primary transition-smooth">
              Quiz
            </button>
            <button onClick={() => scrollToSection("recursos")} className="text-foreground hover:text-primary transition-smooth">
              Recursos
            </button>
            <Button onClick={() => scrollToSection("contato")} className="gradient-hero">
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button onClick={() => scrollToSection("problema")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth">
              O Problema
            </button>
            <button onClick={() => scrollToSection("solucoes")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth">
              Soluções
            </button>
            <button onClick={() => scrollToSection("engenheiro")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth">
              Engenheiro Ambiental
            </button>
            <button onClick={() => scrollToSection("quiz")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth">
              Quiz
            </button>
            <button onClick={() => scrollToSection("recursos")} className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth">
              Recursos
            </button>
            <Button onClick={() => scrollToSection("contato")} className="w-full gradient-hero">
              Contato
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
