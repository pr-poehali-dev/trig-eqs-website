import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface MethodCardProps {
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  icon?: React.ReactNode;
}

const MethodCard = ({ title, description, difficulty, icon }: MethodCardProps) => {
  const difficultyMap = {
    easy: { label: "Легко", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" },
    medium: { label: "Средне", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" },
    hard: { label: "Сложно", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100" },
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            {icon}
            {title}
          </CardTitle>
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyMap[difficulty].color}`}>
            {difficultyMap[difficulty].label}
          </span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="h-32 flex items-center justify-center bg-accent rounded-md overflow-hidden">
          <img src="/placeholder.svg" alt={title} className="w-full h-full object-cover" />
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button className="w-full gap-2">
          <BookOpen className="h-4 w-4" />
          Изучить метод
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MethodCard;
