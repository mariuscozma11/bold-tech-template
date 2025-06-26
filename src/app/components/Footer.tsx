import React from 'react'
import { Separator } from './ui/separator'
import { Settings } from 'lucide-react'

const Footer = () => {
  return (
     <footer className="border-t border-slate-800 bg-slate-900 py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Settings className="h-6 w-6 text-orange-500" />
                <span className="text-lg font-bold">PrecisionWorks</span>
              </div>
              <p className="text-sm text-slate-400">
                Your trusted partner for precision manufacturing and rapid prototyping solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Services</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#services" className="hover:text-orange-500 transition-colors">
                    CNC Machining
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange-500 transition-colors">
                    3D Printing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange-500 transition-colors">
                    Sheet Metal
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange-500 transition-colors">
                    Prototyping
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Industries</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#portfolio" className="hover:text-orange-500 transition-colors">
                    Aerospace
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-orange-500 transition-colors">
                    Medical
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-orange-500 transition-colors">
                    Automotive
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-orange-500 transition-colors">
                    Electronics
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white">Company</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Quality
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-orange-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-800" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} PrecisionWorks. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                ISO Certificates
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer