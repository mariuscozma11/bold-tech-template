import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className=" relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Pagina ta, <span className="text-orange-500">Construita</span>{" "}
                in Realitate
              </h1>
              <p className="text-xl text-slate-300 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, rerum eum deserunt, sed alias quod natus officia
                facilis corrupti ducimus maiores placeat.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                Buton Actiune
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
              >
                Buton Secundar
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">24hr</div>
                <div className="text-sm text-slate-400">Statistica</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">
                  ±0.001"
                </div>
                <div className="text-sm text-slate-400">Alta statistica</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-slate-400">Inca una</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
            <img
              src="https://placeholder.pics/svg/600x600"
              alt="Precision manufactured parts and prototypes"
              className="relative hidden lg:block z-10 rounded-2xl border border-slate-700 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
