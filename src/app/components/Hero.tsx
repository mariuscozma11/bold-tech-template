import React from 'react'
import { Badge } from './ui/badge'
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
                <Badge variant="outline" className="border-orange-500 text-orange-500 bg-orange-500/10">
                  Precision Manufacturing
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Your Ideas, <span className="text-orange-500">Engineered</span> to Reality
                </h1>
                <p className="text-xl text-slate-300 max-w-lg">
                  From rapid prototypes to custom production parts. We deliver precision manufacturing solutions that
                  bring your designs to life with unmatched quality and speed.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium transition-colors flex items-center">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="px-6 py-3 border border-slate-600 text-white hover:bg-slate-700 rounded-md font-medium transition-colors">
                  View Capabilities
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">24hr</div>
                  <div className="text-sm text-slate-400">Quote Turnaround</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">±0.001&quot;</div>
                  <div className="text-sm text-slate-400">Tolerance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">500+</div>
                  <div className="text-sm text-slate-400">Materials</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
              <Image
                src="/placeholder.svg?height=600&width=600"
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