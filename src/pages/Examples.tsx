import { Link } from "react-router-dom";
import TrigHeader from "@/components/TrigHeader";
import Footer from "@/components/Footer";

const Examples = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TrigHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="text-purple-600 hover:underline">
            ← Назад на главную
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold mb-6">Примеры решений из моей тетради</h1>
        
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-sm p-5">
            <h2 className="text-xl font-bold mb-3">Пример 1: Метод замены</h2>
            
            <div className="bg-purple-50 p-3 rounded mb-4 font-mono text-sm">
              <p className="mb-2">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">из варианта №14</span>
              </p>
              <code className="block">
                Уравнение: 2sin²x - 3sin x + 1 = 0<br /><br />
                
                <span className="text-purple-600 font-medium">Шаг 1:</span> Заменяю sin x = t<br />
                2t² - 3t + 1 = 0<br /><br />
                
                <span className="text-purple-600 font-medium">Шаг 2:</span> Решаю квадратное уравнение<br />
                D = 9 - 8 = 1<br />
                t₁ = (3 + 1)/4 = 1<br />
                t₂ = (3 - 1)/4 = 1/2<br /><br />
                
                <span className="text-purple-600 font-medium">Шаг 3:</span> Возвращаюсь к синусу<br />
                sin x = 1 или sin x = 1/2<br /><br />
                
                <span className="text-purple-600 font-medium">Шаг 4:</span> Нахожу все значения x<br />
                sin x = 1 ⟹ x = π/2 + 2πn, n ∈ Z<br />
                sin x = 1/2 ⟹ x = π/6 + 2πn или x = 5π/6 + 2πn, n ∈ Z<br /><br />
                
                <span className="text-purple-600 font-medium">Ответ:</span> 
                x = π/2 + 2πn или x = π/6 + 2πn или x = 5π/6 + 2πn, n ∈ Z
              </code>
            </div>
            
            <p className="text-sm text-gray-600 mb-2">
              Этот пример я решил на пробнике ЕГЭ и получил балл. Замена переменной - супер метод!
            </p>
          </section>
          
          <section className="bg-white rounded-lg shadow-sm p-5">
            <h2 className="text-xl font-bold mb-3">Пример 2: Понижение степени</h2>
            
            <div className="bg-purple-50 p-3 rounded mb-4 font-mono text-sm">
              <p className="mb-2">
                <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">из олимпиады МФТИ</span>
              </p>
              <code className="block">
                Уравнение: sin⁴x - cos⁴x = 0<br /><br />
                
                <span className="text-purple-600 font-medium">Шаг 1:</span> Преобразовываю уравнение<br />
                sin⁴x = cos⁴x<br />
                sin²x = cos²x (извлекаю корень, т.к. sin²x ≥ 0 и cos²x ≥ 0)<br /><br />
                
                <span className="text-purple-600 font-medium">Шаг 2:</span> Использую тождество sin²x + cos²x = 1<br />
                sin²x = cos²x<br />
                sin²x = 1 - sin²x<br />
                2sin²x = 1<br />
                sin²x = 1/2<br />
                sin x = ±1/√2 = ±√2/2<br /><br />
                
                <span className="text-purple-600 font-medium">Шаг 3:</span> Нахожу все значения x<br />
                sin x = √2/2 ⟹ x = π/4 + 2πn или x = 3π/4 + 2πn, n ∈ Z<br />
                sin x = -√2/2 ⟹ x = 5π/4 + 2πn или x = 7π/4 + 2πn, n ∈ Z<br /><br />
                
                <span className="text-purple-600 font-medium">Ответ:</span> 
                x = π/4 + πn/2 + 2πk, n ∈ {0,1,2,3}, k ∈ Z
              </code>
            </div>
            
            <p className="text-sm text-gray-600">
              Этот пример мне попался на кружке, и я долго тупил, пока не догадался
              извлечь корень. Оказывается, всё так просто!
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Examples;
