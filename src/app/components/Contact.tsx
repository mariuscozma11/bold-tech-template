import { Download, Mail, MapPin, Phone, Upload } from 'lucide-react'
import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Your Project?</h2>
                <p className="text-xl text-slate-300">
                  Get in touch with our engineering team to discuss your requirements. We&apos;re here to help bring your
                  ideas to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-slate-300">
                      1234 Manufacturing Drive
                      <br />
                      Industrial Park, CA 90210
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-slate-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-400">Mon-Fri 8AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-slate-300">quotes@precisionworks.com</p>
                    <p className="text-sm text-slate-400">24/7 quote requests</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-white">Supported File Types</h3>
                <div className="flex flex-wrap gap-2">
                  {[".step", ".iges", ".stl", ".dwg", ".pdf", ".sldprt", ".ipt", ".prt"].map((type) => (
                    <Badge key={type} variant="outline" className="border-slate-600 text-slate-300">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  <Download className="mr-2 h-4 w-4" />
                  Download NDA Template
                </Button>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Request a Quote</CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and we&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Company</label>
                  <Input
                    placeholder="Your Company"
                    className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Project Details</label>
                  <Textarea
                    placeholder="Describe your project requirements, materials, quantities, and timeline..."
                    className="bg-slate-900 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Upload Files</label>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-orange-500/50 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-sm text-slate-400">Drop files here or click to browse</p>
                    <p className="text-xs text-slate-500 mt-1">Max file size: 50MB</p>
                  </div>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Submit Quote Request</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

export default Contact