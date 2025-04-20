import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-accent to-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Нестандартные методы решения 
              <span className="text-primary block mt-2">тригонометрических уравнений</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Осваивай сложные тригонометрические методы просто и увлекательно. 
              Наш сайт разработан для школьников, которые хотят глубже понять 
              и освоить решение тригонометрических уравнений.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Начать изучение <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Примеры решений
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center relative">
            <div className="w-full h-64 bg-accent/50 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary/20 rounded-full"></div>
              <div className="absolute left-8 top-8 w-40 h-40 bg-primary/10 rounded-full"></div>
              <div className="relative z-10 font-mono text-sm bg-card p-4 rounded-md shadow-lg">
                <p className="text-primary-foreground bg-primary px-2 py-1 rounded inline-block mb-2">
                  Метод замены переменной
                </p>
                <code className="block">
                  sin(x)² + cos(x) = 1<br />
                  Заменим t = cos(x)<br />
                  Тогда sin(x)² = 1 - cos(x)² = 1 - t²<br />
                  Получаем: 1 - t² + t = 1<br />
                  t² - t = 0<br />
                  t(t - 1) = 0<br />
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
