import MethodCard from "./MethodCard";
import { 
  FunctionSquare, 
  RotateCcw, 
  Sigma, 
  SlidersHorizontal, 
  Divide, 
  CircleDot 
} from "lucide-react";

const MethodsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Основные методы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Изучите различные подходы к решению сложных тригонометрических уравнений,
            которые помогут вам справиться с задачами повышенной сложности.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MethodCard
            title="Метод замены"
            description="Сведение тригонометрического уравнения к алгебраическому с помощью подходящей замены переменной."
            difficulty="easy"
            icon={<SlidersHorizontal className="h-5 w-5 text-primary" />}
          />
          
          <MethodCard
            title="Метод разложения"
            description="Представление левой части уравнения в виде произведения множителей для нахождения корней."
            difficulty="medium"
            icon={<Divide className="h-5 w-5 text-primary" />}
          />
          
          <MethodCard
            title="Вспомогательный угол"
            description="Преобразование суммы тригонометрических функций в одну с помощью специального угла."
            difficulty="hard"
            icon={<CircleDot className="h-5 w-5 text-primary" />}
          />
          
          <MethodCard
            title="Универсальная подстановка"
            description="Замена t = tg(x/2) для преобразования всех тригонометрических функций в алгебраические."
            difficulty="medium"
            icon={<FunctionSquare className="h-5 w-5 text-primary" />}
          />
          
          <MethodCard
            title="Однородные уравнения"
            description="Решение уравнений вида asinⁿx + bcosmx = 0 с использованием свойств однородных функций."
            difficulty="hard"
            icon={<Sigma className="h-5 w-5 text-primary" />}
          />
          
          <MethodCard
            title="Метод понижения степени"
            description="Использование формул понижения степени для упрощения тригонометрических выражений."
            difficulty="medium"
            icon={<RotateCcw className="h-5 w-5 text-primary" />}
          />
        </div>
      </div>
    </section>
  );
};

export default MethodsSection;
