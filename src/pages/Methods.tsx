import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import TrigHeader from "@/components/TrigHeader";
import Footer from "@/components/Footer";

const Methods = () => {
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
        
        <h1 className="text-3xl font-bold mb-6">Методы решения тригонометрических уравнений</h1>
        
        <div className="grid gap-8">
          <section className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Метод замены переменной</h2>
            <p className="mb-4">
              Метод замены переменной – один из самых эффективных способов упростить 
              тригонометрическое уравнение, сведя его к алгебраическому.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Алгоритм решения:</h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>Определить подходящую замену (например, t = sin x или t = tg x/2)</li>
              <li>Выразить все тригонометрические функции через введенную переменную</li>
              <li>Решить получившееся алгебраическое уравнение</li>
              <li>Вернуться к исходной переменной и найти все решения</li>
            </ol>
            
            <div className="bg-accent/50 p-4 rounded-md mb-4">
              <h4 className="font-medium mb-2">Пример:</h4>
              <p className="font-mono">
                sin²x + sin x - 2 = 0<br />
                Заменим t = sin x<br />
                t² + t - 2 = 0<br />
                (t + 2)(t - 1) = 0<br />
                t = -2 или t = 1<br />
                sin x = -2 (нет решений) или sin x = 1<br />
                x = π/2 + 2πn, n ∈ Z
              </p>
            </div>
            
            <div className="bg-primary/10 p-4 rounded-md">
              <h4 className="font-medium mb-2">Подсказка:</h4>
              <p>
                Особенно эффективна универсальная тригонометрическая подстановка t = tg(x/2),
                которая позволяет выразить sin x, cos x через рациональные функции от t.
              </p>
            </div>
          </section>
          
          <section className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Метод разложения на множители</h2>
            <p className="mb-4">
              Этот метод особенно полезен, когда уравнение можно представить в виде 
              произведения нескольких тригонометрических выражений.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Алгоритм решения:</h3>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>Преобразуйте уравнение, чтобы выделить произведение множителей</li>
              <li>Приравняйте каждый множитель к нулю</li>
              <li>Решите получившиеся простые уравнения</li>
              <li>Объедините все найденные решения</li>
            </ol>
            
            <div className="bg-accent/50 p-4 rounded-md mb-4">
              <h4 className="font-medium mb-2">Пример:</h4>
              <p className="font-mono">
                sin x · cos 2x = 0<br />
                sin x = 0 или cos 2x = 0<br />
                x = πn, n ∈ Z или 2x = π/2 + πn, n ∈ Z<br />
                x = πn, n ∈ Z или x = π/4 + πn/2, n ∈ Z
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Methods;
