import { CheckCircle, Users, FileText, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import engineerImage from "@/assets/engineer-at-work.jpg";

const roles = [
  {
    icon: FileText,
    title: "Diagnóstico Ambiental",
    description: "Avaliação detalhada dos impactos atuais e identificação de oportunidades de melhoria."
  },
  {
    icon: TrendingUp,
    title: "Planejamento Estratégico",
    description: "Criação de planos de ação personalizados para implementar práticas sustentáveis."
  },
  {
    icon: CheckCircle,
    title: "Recuperação de Áreas",
    description: "Projetos de restauração de solos degradados, nascentes e vegetação nativa."
  },
  {
    icon: Users,
    title: "Capacitação e Suporte",
    description: "Treinamento da equipe e acompanhamento contínuo para garantir resultados."
  }
];

const EngineerSection = () => {
  return (
    <section id="engenheiro" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            O Papel do <span className="text-primary">Engenheiro Ambiental</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            O profissional que conecta produtividade agrícola e preservação ambiental, 
            criando soluções práticas e eficientes para sua propriedade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={engineerImage} 
              alt="Engenheiro ambiental em campo" 
              className="rounded-lg shadow-medium w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Por que contratar um Engenheiro Ambiental?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                O engenheiro ambiental é seu parceiro estratégico na transição para uma agricultura sustentável. 
                Com conhecimento técnico e experiência prática, ele oferece:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <Card key={index} className="border-2 hover:shadow-soft transition-smooth">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <role.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{role.title}</h4>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card border-2 border-primary/20 rounded-lg p-8 shadow-medium">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Redução no uso de agrotóxicos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <p className="text-muted-foreground">Economia no consumo de água</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <p className="text-muted-foreground">Aumento na produtividade</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            *Dados baseados em estudos de propriedades que implementaram práticas sustentáveis com acompanhamento profissional
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineerSection;
