import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import TrigHeader from "@/components/TrigHeader";
import Footer from "@/components/Footer";

const Examples = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TrigHeader />
      
      <main className="flex-grow container py-10">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Назад на главную
            </Button>
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Примеры решений</h1>
        
        <div className="grid gap-8">
          <section className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Пример 1: Замена переменной</h2>
            
            <div className="bg-accent/50 p-4 rounded-md mb-4">
              <p className="font-mono">
                Уравнение: 2sin²x - 3sin x + 1 = 0<br /><br />
                
                <span className="text-primary">Шаг 1:</span> Заменяем sin x = t<br />
                2t² - 3t + 1 = 0<br /><br />
                
                <span className="text-primary">Шаг 2:</span> Решаем квадратное уравнение<br />
                a = 2, b = -3, c = 1<br />
                D = b² - 4ac = 9 - 8 = 1<br />
                t₁ = (3 + 1)/4 = 1<br />
                t₂ = (3 - 1)/4 = 1/2<br /><br />
                
                <span className="text-primary">Шаг 3:</span> Возвращаемся к исходной переменной<br />
                sin x = 1 или sin x = 1/2<br /><br />
                
                <span className="text-primary">Шаг 4:</span> Находим все решения<br />
                sin x = 1 ⟹ x = π/2 + 2πn, n ∈ Z<br />
                sin x = 1/2 ⟹ x = π/6 + 2πn или x = 5π/6 + 2πn, n ∈ Z<br /><br />
                
                <span className="text-primary">Ответ:</span> x = π/2 + 2πn или x = π/6 + 2πn или x = 5π/6 + 2πn, n ∈ Z
              </p>
            </div>
          </section>
          
          <section className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Пример 2: Метод понижения степени</h2>
            
            <div className="bg-accent/50 p-4 rounded-md mb-4">
              <p className="font-mono">
                Уравнение: sin⁴x - cos⁴x = 0<br /><br />
                
                <span className="text-primary">Шаг 1:</span> Преобразуем уравнение<br />
                sin⁴x = cos⁴x<br />
                sin²x = cos²x (извлекаем корень)<br /><br />
                
                <span className="text-primary">Шаг 2:</span> Используем основное тригонометрическое тождество<br />
                sin²x = 1 - cos²x<br />
                1 - cos²x = cos²x<br />
                1 = 2cos²x<br />
                cos²x = 1/2<br />
                cos x = ±1/√2 = ±√2/2<br /><br />
                
                <span className="text-primary">Шаг 3:</span> Находим все решения<br />
                cos x = √2/2 ⟹ x = ±π/4 + 2πn, n ∈ Z<br />
                cos x = -√2/2 ⟹ x = ±3π/4 + 2πn, n ∈ Z<br /><br />
                
                <span className="text-primary">Ответ:</span> x = ±π/4 + 2πn или x = ±3π/4 + 2πn, n ∈ Z
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Examples;
