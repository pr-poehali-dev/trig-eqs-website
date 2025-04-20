import TrigHeader from "@/components/TrigHeader";
import Hero from "@/components/Hero";
import MethodsSection from "@/components/MethodsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/card";
import { Book, Calculator, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TrigHeader />
      
      <main className="flex-grow">
        <Hero />
        
        <MethodsSection />
        
        <section className="py-16 bg-accent">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Почему это важно?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Нестандартные методы решения помогают не только справиться со сложными 
                задачами, но и глубже понять природу тригонометрических функций.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Book className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Для учебы</h3>
                <p className="text-muted-foreground">
                  Улучшите свои оценки и подготовьтесь к экзаменам, освоив эффективные методы.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Для олимпиад</h3>
                <p className="text-muted-foreground">
                  Получите преимущество в математических соревнованиях и олимпиадах.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 text-center shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Для жизни</h3>
                <p className="text-muted-foreground">
                  Развивайте логическое и аналитическое мышление для решения любых задач.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
