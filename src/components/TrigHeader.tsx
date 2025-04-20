import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { FileText, BookOpen, Calculator } from "lucide-react";

interface LinkWithRefProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

const LinkWithRef = React.forwardRef<HTMLAnchorElement, LinkWithRefProps>(
  ({ to, children, className, target }, ref) => (
    <Link to={to} className={className} ref={ref} target={target}>
      {children}
    </Link>
  )
);

LinkWithRef.displayName = "LinkWithRef";

const TrigHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              T
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">
              ТригоМастер
            </span>
          </Link>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Главная
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Методы</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <Link to="/methods" className="group grid h-full w-full items-center justify-center gap-1 rounded-md bg-accent p-4 hover:bg-accent/80">
                    <BookOpen className="h-6 w-6 text-primary group-hover:text-primary/70" />
                    <div className="text-sm font-medium">Все методы</div>
                  </Link>
                  
                  <Link to="/methods" className="group grid h-full w-full items-center justify-center gap-1 rounded-md bg-accent p-4 hover:bg-accent/80">
                    <Calculator className="h-6 w-6 text-primary group-hover:text-primary/70" />
                    <div className="text-sm font-medium">Метод замены</div>
                  </Link>
                  
                  <Link to="/methods" className="group grid h-full w-full items-center justify-center gap-1 rounded-md bg-accent p-4 hover:bg-accent/80">
                    <FileText className="h-6 w-6 text-primary group-hover:text-primary/70" />
                    <div className="text-sm font-medium">Разложение на множители</div>
                  </Link>
                  
                  <Link to="/methods" className="group grid h-full w-full items-center justify-center gap-1 rounded-md bg-accent p-4 hover:bg-accent/80">
                    <div className="text-3xl">∫</div>
                    <div className="text-sm font-medium">Универсальная подстановка</div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/examples" className={navigationMenuTriggerStyle()}>
                Примеры
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="hidden md:flex items-center gap-2">
          <Link to="/methods">
            <Button>Начать изучение</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TrigHeader;
