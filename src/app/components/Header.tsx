import React from "react";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold">PrecisionWorks</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Portfolio
            </a>
            <a href="#process" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Process
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium transition-colors">
            Request Quote
          </Button>
        </div>
      </header>
  );
};

export default Header;
