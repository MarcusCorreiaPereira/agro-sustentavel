import { Leaf, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="text-xl font-bold">AgroSustentável</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Conectando produtores rurais a soluções ambientais para uma agricultura sustentável e produtiva.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#problema" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">O Problema</a></li>
              <li><a href="#solucoes" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Soluções</a></li>
              <li><a href="#engenheiro" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Engenheiro Ambiental</a></li>
              <li><a href="#quiz" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Quiz</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#recursos" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Materiais Educativos</a></li>
              <li><a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Contato</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Newsletter</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} AgroSustentável. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com 💚 para um futuro sustentável</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
