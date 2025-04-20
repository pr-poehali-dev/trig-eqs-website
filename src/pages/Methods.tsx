import { Link } from "react-router-dom";
import TrigHeader from "@/components/TrigHeader";
import Footer from "@/components/Footer";

const Methods = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TrigHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="text-purple-600 hover:underline">
            ← Назад на главную
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold mb-6">Методы решения тригонометрических уравнений</h1>
        
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-sm p-5">
            <h2 className="text-xl font-bold mb-3">Метод замены переменной</h2>
            <p className="mb-3">
              Это мой любимый метод, который я использую чаще всего. Он помогает превратить 
              сложное тригонометрическое уравнение в обычное алгебраическое.
            </p>
            
            <h3 className="font-medium mb-2">Как применять:</h3>
            <ol className="list-decimal list-inside space-y-1 mb-4 text-gray-700">
              <li>Найдите подходящую замену (например, t = sin x или t = tg x)</li>
              <li>Выразите все функции через новую переменную</li>
              <li>Решите получившееся алгебраическое уравнение</li>
              <li>Вернитесь к исходной переменной и найдите все ответы</li>
            </ol>
            
            <div className="bg-purple-50 p-3 rounded mb-4 font-mono text-sm">
              <p className="font-medium mb-1">Пример из моей тетради:</p>
              <code>
                sin²x + sin x - 2 = 0<br />
                Заменяю t = sin x<br />
                t² + t - 2 = 0<br />
                (t + 2)(t - 1) = 0<br />
                t = -2 или t = 1<br />
                sin x = -2 (нет решений, т.к. |sin x| ≤ 1) или sin x = 1<br />
                x = π/2 + 2πn, n ∈ Z
              </code>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
              <p className="font-medium">Совет:</p>
              <p className="text-sm">
                На ЕГЭ часто встречаются уравнения, где можно сделать замену sin x = t.
                Это самая простая замена, поэтому всегда проверяйте её первой!
              </p>
            </div>
          </section>
          
          <section className="bg-white rounded-lg shadow-sm p-5">
            <h2 className="text-xl font-bold mb-3">Метод разложения на множители</h2>
            <p className="mb-3">
              Этот метод я выучил на дополнительных занятиях. Он отлично работает, когда 
              в уравнении есть произведения тригонометрических функций.
            </p>
            
            <h3 className="font-medium mb-2">Как применять:</h3>
            <ol className="list-decimal list-inside space-y-1 mb-4 text-gray-700">
              <li>Сгруппируйте слагаемые, чтобы получить произведение</li>
              <li>Приравняйте каждый множитель к нулю</li>
              <li>Решите каждое простое уравнение отдельно</li>
              <li>Объедините все найденные ответы</li>
            </ol>
            
            <div className="bg-purple-50 p-3 rounded mb-4 font-mono text-sm">
              <p className="font-medium mb-1">Пример, который я решал:</p>
              <code>
                sin x · cos 2x = 0<br />
                sin x = 0 или cos 2x = 0<br />
                x = πn, n ∈ Z или 2x = π/2 + πn, n ∈ Z<br />
                x = πn, n ∈ Z или x = π/4 + πn/2, n ∈ Z
              </code>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Methods;
