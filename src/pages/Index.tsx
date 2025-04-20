import TrigHeader from "@/components/TrigHeader";
import Hero from "@/components/Hero";
import MethodsSection from "@/components/MethodsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TrigHeader />
      <Hero />
      <MethodsSection />
      
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Зачем я создал этот сайт</h2>
            
            <div className="bg-purple-50 rounded-lg p-5 mb-8">
              <p className="italic text-gray-700">
                "Когда я готовился к ЕГЭ, то заметил, что многие тригонометрические уравнения
                можно решить быстрее, если знать несколько хитрых приёмов. Я записывал эти методы
                в тетрадь, а потом решил сделать сайт, чтобы поделиться с одноклассниками."
              </p>
              <p className="text-right mt-2 text-sm text-gray-600">— Автор сайта, ученик 11 класса</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Помогает с ЕГЭ</h3>
                  <p className="text-gray-600 text-sm">
                    В демо-версии ЕГЭ 2023 по математике было задание на тригонометрическое
                    уравнение, которое легко решается методом замены переменной.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Объясняю простым языком</h3>
                  <p className="text-gray-600 text-sm">
                    Я написал объяснения так, как сам хотел бы их увидеть - без лишних сложностей
                    и заумных терминов, с примерами из реальных заданий.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Работает на телефонах</h3>
                  <p className="text-gray-600 text-sm">
                    Сайт можно открыть на телефоне, когда решаешь задачи в транспорте или на перемене.
                    Я сам так делаю перед контрольными!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
