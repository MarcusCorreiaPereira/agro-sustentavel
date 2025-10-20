import { Recycle, Leaf, Droplet, Sun, TreePine, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  {
    icon: Leaf,
    title: "Agricultura Regenerativa",
    description: "Técnicas que restauram a saúde do solo, aumentam a biodiversidade e capturam carbono da atmosfera.",
    benefits: ["Solo mais fértil", "Maior retenção de água", "Redução de custos"]
  },
  {
    icon: Shield,
    title: "Manejo Integrado de Pragas",
    description: "Controle de pragas com métodos naturais e biológicos, reduzindo o uso de agrotóxicos.",
    benefits: ["Menor contaminação", "Produtos mais saudáveis", "Equilíbrio ecológico"]
  },
  {
    icon: Droplet,
    title: "Gestão Eficiente da Água",
    description: "Sistemas de irrigação inteligentes e captação de água da chuva para uso sustentável.",
    benefits: ["Economia de água", "Menor desperdício", "Proteção de nascentes"]
  },
  {
    icon: Sun,
    title: "Energia Renovável",
    description: "Adoção de painéis solares e biodigestores para produzir energia limpa na propriedade.",
    benefits: ["Redução de custos", "Independência energética", "Menos emissões"]
  },
  {
    icon: TreePine,
    title: "Reflorestamento",
    description: "Recuperação de áreas degradadas e criação de corredores ecológicos para fauna nativa.",
    benefits: ["Restauração do ecossistema", "Proteção do solo", "Sequestro de carbono"]
  },
  {
    icon: Recycle,
    title: "Economia Circular",
    description: "Aproveitamento de resíduos orgânicos para compostagem e produção de biofertilizantes.",
    benefits: ["Zero desperdício", "Solo enriquecido", "Redução de custos"]
  }
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Soluções <span className="text-primary">Sustentáveis</span> para Sua Propriedade
          </h2>
          <p className="text-xl text-muted-foreground">
            Práticas recomendadas por engenheiros ambientais que equilibram produtividade e preservação ambiental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="border-2 border-primary/20 hover:border-primary transition-smooth hover:shadow-medium group"
            >
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-smooth">
                    <solution.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">Benefícios:</p>
                  <ul className="space-y-1">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-earth rounded-lg shadow-medium">
            <p className="text-2xl font-bold text-foreground mb-2">
              "É possível equilibrar produtividade e sustentabilidade"
            </p>
            <p className="text-lg text-muted-foreground">
              Milhares de produtores já estão transformando suas propriedades com práticas sustentáveis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
