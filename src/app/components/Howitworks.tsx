import { Calculator, CheckCircle, Clock, Cog, Shield, Truck, Upload } from 'lucide-react'
import React from 'react'
import { Separator } from './ui/separator'

const Howitworks = () => {
  return (
    <section id="process" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Streamlined Process, Exceptional Results</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From initial design to final delivery, our proven process ensures quality, speed, and transparency at
              every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto border-2 border-orange-500">
                <Upload className="h-8 w-8 text-orange-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">1. Upload Design</h3>
                <p className="text-slate-300 text-sm">
                  Submit your CAD files through our secure portal. We accept all major formats including STEP, IGES,
                  STL, and native files.
                </p>
              </div>
              <div className="text-xs text-slate-400">Supported: .step, .iges, .stl, .dwg, .pdf</div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto border-2 border-orange-500">
                <Calculator className="h-8 w-8 text-orange-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">2. Instant Quote</h3>
                <p className="text-slate-300 text-sm">
                  Receive detailed pricing within 24 hours. Our engineers review for manufacturability and suggest
                  optimizations if needed.
                </p>
              </div>
              <div className="text-xs text-slate-400">Typical response: 2-24 hours</div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto border-2 border-orange-500">
                <Cog className="h-8 w-8 text-orange-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">3. Production</h3>
                <p className="text-slate-300 text-sm">
                  Your parts enter production with real-time updates. Quality checks at every stage ensure perfect
                  results.
                </p>
              </div>
              <div className="text-xs text-slate-400">Live tracking available</div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto border-2 border-orange-500">
                <Truck className="h-8 w-8 text-orange-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">4. Delivery</h3>
                <p className="text-slate-300 text-sm">
                  Parts shipped with full documentation, inspection reports, and certificates of compliance. Express
                  shipping available.
                </p>
              </div>
              <div className="text-xs text-slate-400">Worldwide shipping</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-6 bg-slate-900 rounded-lg border border-slate-700">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-slate-300">Fast turnaround: 1-10 days</span>
              </div>
              <Separator orientation="vertical" className="h-6 bg-slate-600 hidden md:block" />
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-slate-300">NDA protection available</span>
              </div>
              <Separator orientation="vertical" className="h-6 bg-slate-600 hidden md:block"  />
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-slate-300">Quality guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Howitworks