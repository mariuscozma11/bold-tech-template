import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from "next/image"
import { Badge } from './ui/badge'

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From aerospace components to medical devices, see how we&apos;ve helped companies bring their most challenging
              designs to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-orange-500/50 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Aerospace bracket prototype"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-600 text-white">Aerospace</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Titanium Aerospace Bracket</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Complex 5-axis machined bracket for commercial aircraft. Achieved ±0.0005&quot; tolerance requirements with
                  full material traceability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    Ti-6Al-4V
                  </Badge>
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    5-Axis CNC
                  </Badge>
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    AS9100
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-orange-500/50 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Medical device housing"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Medical</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Medical Device Housing</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Biocompatible housing for implantable device. FDA-compliant manufacturing with full documentation and
                  validation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    PEEK
                  </Badge>
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    CNC + 3D Print
                  </Badge>
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    FDA
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-orange-500/50 transition-colors">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Automotive prototype"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">Automotive</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">EV Battery Enclosure</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Lightweight aluminum enclosure for electric vehicle battery pack. Rapid prototyping enabled 3-week
                  development cycle.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    6061-T6
                  </Badge>
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    Sheet Metal
                  </Badge>
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">
                    Anodized
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
  )
}

export default Portfolio