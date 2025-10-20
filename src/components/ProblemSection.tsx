import { Flame, Droplets, Wind, Mountain, Sprout, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Flame,
    title: "Queimadas",
    description: "Destruição de vegetação nativa e emissão de gases poluentes que agravam as mudanças climáticas.",
    color: "text-destructive"
  },
  {
    icon: Droplets,
    title: "Poluição da Água",
    description: "Agrotóxicos e fertilizantes contaminam rios, lagos e lençóis freáticos, prejudicando a vida aquática.",
    color: "text-accent"
  },
  {
    icon: Mountain,
    title: "Erosão do Solo",
    description: "Perda da camada fértil do solo por práticas inadequadas, reduzindo a capacidade produtiva.",
    color: "text-muted-foreground"
  },
  {
    icon: Wind,
    title: "Emissão de Gases",
    description: "Liberação de CO₂ e metano contribui para o efeito estufa e aquecimento global.",
    color: "text-primary"
  },
  {
    icon: Sprout,
    title: "Perda de Biodiversidade",
    description: "Destruição de matas e habitats naturais ameaça espécies nativas e o equilíbrio ecológico.",
    color: "text-primary"
  },
  {
    icon: AlertTriangle,
    title: "Contaminação do Solo",
    description: "Uso excessivo de agrotóxicos degrada a qualidade do solo e compromete futuras safras.",
    color: "text-destructive"
  }
];

const ProblemSection = () => {
  return (
    <section id="problema" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            O Desafio Ambiental na Agroindústria
          </h2>
          <p className="text-xl text-muted-foreground">
            A agroindústria, quando mal manejada, causa sérios impactos ao meio ambiente. 
            Conheça os principais problemas que ameaçam o futuro da agricultura e o equilíbrio ecológico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-medium transition-smooth hover:scale-105"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <problem.icon className={`h-12 w-12 ${problem.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card border-2 border-destructive/20 rounded-lg shadow-medium">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <AlertTriangle className="h-16 w-16 text-destructive flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">A Urgência de Agir Agora</h3>
              <p className="text-lg text-muted-foreground">
                Esses problemas não afetam apenas o meio ambiente, mas também o sustento das famílias rurais 
                e a saúde de toda a população. É essencial adotar práticas sustentáveis para garantir um futuro 
                viável para a agricultura e preservar os recursos naturais para as próximas gerações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
