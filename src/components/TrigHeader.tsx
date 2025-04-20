import React from "react";
import { Link } from "react-router-dom";

const TrigHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-purple-600">ТригоШпаргалка</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-600 hover:underline">
              Главная
            </Link>
            <Link to="/methods" className="text-gray-700 hover:text-purple-600 hover:underline">
              Методы
            </Link>
            <Link to="/examples" className="text-gray-700 hover:text-purple-600 hover:underline">
              Примеры
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-700">
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TrigHeader;
