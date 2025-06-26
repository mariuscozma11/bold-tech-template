import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Site-ul tau, <span className="text-orange-500">Construit</span> in realitate
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident saepe nam dicta autem alias architecto. Porro quasi necessitatibus libero delectus. Qui similique fuga atque dolor incidunt, laborum molestiae et.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium transition-colors flex items-center">
                  Buton Actiune
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="px-6 py-3 border border-slate-600 text-white hover:bg-slate-700 rounded-md font-medium transition-colors">
                  Buton Secundar
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">100+</div>
                  <div className="text-sm text-slate-400">Clienti Multumiti</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-slate-400">Disponibilitate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">10+</div>
                  <div className="text-sm text-slate-400">Ani Experienta</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
              <Image
                src="https://placeholder.pics/svg/600x600"
                alt="Precision manufactured parts and prototypes"
                width={600}
                height={600}
                className="relative z-10 rounded-2xl border border-slate-700"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero