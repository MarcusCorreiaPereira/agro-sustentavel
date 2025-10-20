import { BookOpen, Video, FileText, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: BookOpen,
    title: "Guia de Agricultura Regenerativa",
    description: "Manual completo sobre práticas que restauram a saúde do solo e aumentam a produtividade.",
    type: "E-book",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Video,
    title: "Curso: Manejo Sustentável",
    description: "Série de vídeos ensinando técnicas de manejo integrado de pragas e conservação do solo.",
    type: "Vídeo-aulas",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: FileText,
    title: "Checklist de Sustentabilidade",
    description: "Lista prática para avaliar e implementar melhorias ambientais na sua propriedade.",
    type: "PDF",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Download,
    title: "Calculadora de Carbono",
    description: "Ferramenta para estimar as emissões e potencial de sequestro de carbono da sua propriedade.",
    type: "App Web",
    color: "bg-accent/10 text-accent"
  }
];

const ResourcesSection = () => {
  return (
    <section id="recursos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Recursos <span className="text-primary">Educativos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Materiais gratuitos para você começar a transformar sua propriedade hoje mesmo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="border-2 hover:shadow-medium transition-smooth group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-lg ${resource.color} flex items-center justify-center flex-shrink-0`}>
                    <resource.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{resource.title}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Download className="h-4 w-4 mr-2" />
                      Acessar Recurso
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-primary/20 bg-gradient-earth">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Newsletter: Agricultura Sustentável
                </h3>
                <p className="text-muted-foreground">
                  Receba mensalmente dicas, novidades e histórias de sucesso direto no seu e-mail
                </p>
              </div>
              <Button className="gradient-hero whitespace-nowrap">
                Inscrever-se Grátis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ResourcesSection;
