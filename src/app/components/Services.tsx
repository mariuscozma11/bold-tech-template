import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Box, Cog, Gauge, Layers, Wrench, Zap } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Serviciile Companiei Tale
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Aceasta este secțiunea dedicată serviciilor companiei tale. Conține carduri reprezentative care descriu principalele activități sau capabilități oferite
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Cog className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-white">Exemplu de serviciu</CardTitle>
              <CardDescription className="text-slate-400">
                Descriere scurtă a serviciului oferit de companie, care evidențiază avantajele sau specificul activității.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 1:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 2:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 3:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-white">Exemplu de serviciu</CardTitle>
              <CardDescription className="text-slate-400">
                Descriere scurtă a serviciului oferit de companie, care evidențiază avantajele sau specificul activității.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 1:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 2:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 3:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
                Exemplu de serviciu
              </CardTitle>
              <CardDescription className="text-slate-400">
                Descriere scurtă a serviciului oferit de companie, care evidențiază avantajele sau specificul activității.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 1:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 2:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 3:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-white">Exemplu de serviciu</CardTitle>
              <CardDescription className="text-slate-400">
                Descriere scurtă a serviciului oferit de companie, care evidențiază avantajele sau specificul activității.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 1:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 2:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 3:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
                Exemplu de serviciu
              </CardTitle>
              <CardDescription className="text-slate-400">
                Descriere scurtă a serviciului oferit de companie, care evidențiază avantajele sau specificul activității.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 1:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 2:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 3:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-700 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle className="text-white">Exemplu de serviciu</CardTitle>
              <CardDescription className="text-slate-400">
                Descriere scurtă a serviciului oferit de companie, care evidențiază avantajele sau specificul activității.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 1:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 2:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-white">Subsectiune 3:</h4>
                <p className="text-sm text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
