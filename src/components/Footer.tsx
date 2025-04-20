import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ТригоМастер</h3>
            <p className="text-muted-foreground">
              Платформа для изучения нестандартных методов решения тригонометрических уравнений.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition">Главная</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition">Методы решения</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition">Примеры</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary transition">Теория</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <p className="text-muted-foreground">
              Если у вас есть вопросы или предложения, свяжитесь с нами:
            </p>
            <p className="text-primary mt-2">info@trigomaster.ru</p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-4 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} ТригоМастер. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
