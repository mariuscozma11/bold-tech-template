import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Box, Cog, Gauge, Layers, Wrench, Zap } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Comprehensive Manufacturing Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From concept to production, we offer a full suite of precision
            manufacturing capabilities to meet your most demanding requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Cog className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-white">CNC Machining</CardTitle>
              <CardDescription className="text-slate-400">
                High-precision 3, 4, and 5-axis CNC machining for complex
                geometries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Materials:</h4>
                <p className="text-sm text-slate-300">
                  Aluminum, Steel, Stainless Steel, Titanium, Brass, Plastics
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Tolerances:</h4>
                <p className="text-sm text-slate-300">
                  ±0.001&quot; (±0.025mm) standard, tighter available
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Industries:</h4>
                <p className="text-sm text-slate-300">
                  Aerospace, Medical, Automotive, Electronics
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-white">3D Printing</CardTitle>
              <CardDescription className="text-slate-400">
                Advanced additive manufacturing for rapid prototyping and
                production
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Technologies:</h4>
                <p className="text-sm text-slate-300">
                  SLA, SLS, FDM, Metal 3D Printing
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Materials:</h4>
                <p className="text-sm text-slate-300">
                  Resins, Nylon, PEEK, Metal Powders, Carbon Fiber
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Lead Time:</h4>
                <p className="text-sm text-slate-300">
                  24-72 hours for prototypes
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Box className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-white">
                Sheet Metal Fabrication
              </CardTitle>
              <CardDescription className="text-slate-400">
                Precision cutting, forming, and welding for custom enclosures
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Processes:</h4>
                <p className="text-sm text-slate-300">
                  Laser Cutting, Bending, Welding, Powder Coating
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Thickness:</h4>
                <p className="text-sm text-slate-300">
                  0.5mm - 25mm depending on material
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Finishing:</h4>
                <p className="text-sm text-slate-300">
                  Anodizing, Plating, Painting, Passivation
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-white">Rapid Prototyping</CardTitle>
              <CardDescription className="text-slate-400">
                Fast iteration cycles to accelerate your product development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Turnaround:</h4>
                <p className="text-sm text-slate-300">
                  1-5 days depending on complexity
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Services:</h4>
                <p className="text-sm text-slate-300">
                  Design Review, DFM Analysis, Testing Support
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Volume:</h4>
                <p className="text-sm text-slate-300">
                  1-100 pieces for validation
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-white">
                Small Batch Production
              </CardTitle>
              <CardDescription className="text-slate-400">
                Bridge production for quantities from 10 to 10,000 pieces
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Volume Range:</h4>
                <p className="text-sm text-slate-300">
                  10 - 10,000 pieces per run
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Quality:</h4>
                <p className="text-sm text-slate-300">
                  ISO 9001:2015, AS9100, FDA registered
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Documentation:</h4>
                <p className="text-sm text-slate-300">
                  Full traceability, CoC, inspection reports
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-white">Post-Processing</CardTitle>
              <CardDescription className="text-slate-400">
                Complete finishing services for production-ready parts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">
                  Surface Treatments:
                </h4>
                <p className="text-sm text-slate-300">
                  Anodizing, Plating, Heat Treatment
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Assembly:</h4>
                <p className="text-sm text-slate-300">
                  Hardware insertion, Sub-assembly
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Testing:</h4>
                <p className="text-sm text-slate-300">
                  Dimensional inspection, Material testing
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
