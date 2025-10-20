import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

const questions = [
  {
    question: "Você utiliza agrotóxicos na sua propriedade?",
    options: [
      { value: "a", label: "Sim, regularmente", points: 0 },
      { value: "b", label: "Sim, mas estou reduzindo", points: 5 },
      { value: "c", label: "Raramente", points: 8 },
      { value: "d", label: "Não utilizo", points: 10 }
    ]
  },
  {
    question: "Como você gerencia a água na sua propriedade?",
    options: [
      { value: "a", label: "Irrigação sem controle", points: 0 },
      { value: "b", label: "Irrigação com algum controle", points: 5 },
      { value: "c", label: "Sistema de irrigação eficiente", points: 8 },
      { value: "d", label: "Captação de chuva + irrigação eficiente", points: 10 }
    ]
  },
  {
    question: "Existe área de preservação ou vegetação nativa na propriedade?",
    options: [
      { value: "a", label: "Não", points: 0 },
      { value: "b", label: "Menos de 10% da área", points: 3 },
      { value: "c", label: "Entre 10% e 20%", points: 7 },
      { value: "d", label: "Mais de 20%", points: 10 }
    ]
  },
  {
    question: "Como você descarta resíduos orgânicos?",
    options: [
      { value: "a", label: "Queimo ou jogo fora", points: 0 },
      { value: "b", label: "Deixo decompor naturalmente", points: 5 },
      { value: "c", label: "Faço compostagem básica", points: 8 },
      { value: "d", label: "Compostagem + produção de biofertilizantes", points: 10 }
    ]
  },
  {
    question: "Você adota práticas de conservação do solo?",
    options: [
      { value: "a", label: "Não", points: 0 },
      { value: "b", label: "Poucas práticas", points: 4 },
      { value: "c", label: "Rotação de culturas", points: 7 },
      { value: "d", label: "Rotação + plantio direto + cobertura", points: 10 }
    ]
  }
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      const question = questions[index];
      const selectedOption = question.options.find(opt => opt.value === answer);
      if (selectedOption) {
        totalScore += selectedOption.points;
      }
    });
    setScore(totalScore);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setScore(0);
  };

  const getResultMessage = () => {
    const percentage = (score / 50) * 100;
    if (percentage >= 80) {
      return {
        icon: CheckCircle2,
        color: "text-primary",
        title: "Excelente! Você está no caminho certo!",
        message: "Sua propriedade já adota muitas práticas sustentáveis. Continue assim e considere aprimorar ainda mais com ajuda de um engenheiro ambiental."
      };
    } else if (percentage >= 50) {
      return {
        icon: Info,
        color: "text-accent",
        title: "Bom começo! Há espaço para melhorias.",
        message: "Você já implementou algumas práticas sustentáveis, mas ainda há muito potencial para reduzir impactos e aumentar a eficiência. Um engenheiro ambiental pode te ajudar nessa jornada."
      };
    } else {
      return {
        icon: AlertCircle,
        color: "text-destructive",
        title: "Atenção! É hora de agir.",
        message: "Sua propriedade pode estar causando impactos significativos ao meio ambiente. É fundamental buscar orientação profissional para implementar práticas sustentáveis urgentemente."
      };
    }
  };

  if (showResult) {
    const result = getResultMessage();
    const ResultIcon = result.icon;

    return (
      <section id="quiz" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-2 shadow-medium">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Resultado da Avaliação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <ResultIcon className={`h-20 w-20 mx-auto mb-4 ${result.color}`} />
                <div className="text-5xl font-bold text-primary mb-2">{score}/50</div>
                <div className="text-xl text-muted-foreground mb-6">pontos</div>
                <h3 className={`text-2xl font-bold mb-4 ${result.color}`}>{result.title}</h3>
                <p className="text-lg text-muted-foreground mb-8">{result.message}</p>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={resetQuiz} 
                  variant="outline" 
                  className="w-full"
                >
                  Fazer o Quiz Novamente
                </Button>
                <Button 
                  onClick={() => {
                    const element = document.getElementById("contato");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full gradient-hero"
                >
                  Falar com um Engenheiro Ambiental
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Avalie o Impacto Ambiental da Sua Propriedade
          </h2>
          <p className="text-xl text-muted-foreground">
            Responda às perguntas e descubra como suas práticas atuais afetam o meio ambiente
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-2 shadow-medium">
          <CardHeader>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <span className="text-sm text-primary font-semibold">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-smooth"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              {questions[currentQuestion].question}
            </h3>
            
            <RadioGroup value={answers[currentQuestion]} onValueChange={handleAnswer}>
              {questions[currentQuestion].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-primary transition-smooth cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="cursor-pointer flex-1">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex gap-4">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex-1"
              >
                Anterior
              </Button>
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className="flex-1 gradient-hero"
              >
                {currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;
