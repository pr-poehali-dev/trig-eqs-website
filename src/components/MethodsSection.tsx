import { Link } from "react-router-dom";
import { 
  Calculator,
  BookOpen,
  Functions,
  PenTool
} from "lucide-react";

const MethodsSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800">Методы, которые помогут сдать ЕГЭ на 90+</h2>
          <p className="text-gray-600 mt-2">
            Собрал эти методы, готовясь к олимпиадам и экзамену. Они реально работают!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method) => (
            <Link to="/methods" key={method.id} className="block">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5 h-full">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    {method.icon}
                  </div>
                  <h3 className="ml-3 font-semibold text-lg">{method.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{method.description}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Сложность: {method.difficulty}</span>
                  <span className="text-purple-600 text-sm font-medium">Подробнее →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/methods">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors">
              Все методы решения
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const methods = [
  {
    id: 1,
    title: "Замена переменной",
    description: "Самый простой и понятный метод. Используется, когда можно ввести новую переменную и свести к квадратному уравнению.",
    difficulty: "⭐⭐",
    icon: <Calculator className="h-5 w-5" />
  },
  {
    id: 2,
    title: "Универсальная подстановка",
    description: "С помощью тангенса половинного угла можно решить почти любое уравнение. Универсальный, но немного сложный метод.",
    difficulty: "⭐⭐⭐",
    icon: <Functions className="h-5 w-5" />
  },
  {
    id: 3,
    title: "Однородные уравнения",
    description: "Метод используется для решения уравнений вида asin²x + bsinxcosx + ccos²x = 0. Один из моих любимых!",
    difficulty: "⭐⭐",
    icon: <PenTool className="h-5 w-5" />
  }
];

export default MethodsSection;
