import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl font-bold">
              Как решать сложные 
              <span className="text-purple-600 block mt-1">тригонометрические уравнения</span>
            </h1>
            <p className="text-gray-600">
              Привет! Я собрал на этом сайте способы решения тригонометрических уравнений, 
              которые помогли мне на олимпиадах и подготовке к ЕГЭ. Надеюсь, они помогут и вам!
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/methods">
                <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                  Изучить методы <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/examples">
                <Button variant="outline" className="border-purple-300 hover:bg-purple-50">
                  Примеры с решениями
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="font-mono text-sm bg-purple-50 p-3 rounded border border-purple-200">
                <p className="bg-purple-600 text-white px-2 py-1 rounded text-xs inline-block mb-2">
                  Моя шпаргалка
                </p>
                <code className="block">
                  // Метод замены<br />
                  sin²x - sin x - 2 = 0<br />
                  Пусть t = sin x<br />
                  t² - t - 2 = 0<br />
                  (t-2)(t+1) = 0<br />
                  t = 2 или t = -1<br />
                  // А дальше решаем<br />
                  // каждое уравнение...
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
