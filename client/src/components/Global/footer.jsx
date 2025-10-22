import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';



export default function Footer() {
  return (
    <footer className="bg-[#003333] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#027c68] to-[#009983] flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EcoVerde</span>
            </div>
            <p className="text-[#A8C7B8] mb-6 max-w-md">
              Committed to sustainable solutions and environmental innovation. Building a greener future, one step at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-[#027c68] hover:bg-[#009983] flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#027c68] hover:bg-[#009983] flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#027c68] hover:bg-[#009983] flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#027c68] hover:bg-[#009983] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#b0e892] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#A8C7B8] hover:text-[#b0e892] transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A8C7B8] hover:text-[#b0e892] transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A8C7B8] hover:text-[#b0e892] transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A8C7B8] hover:text-[#b0e892] transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#A8C7B8] hover:text-[#b0e892] transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#b0e892] font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#027c68] mt-0.5 flex-shrink-0" />
                <span className="text-[#A8C7B8] text-sm">
                  123 Green Street<br />
                  Eco City, EC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#027c68] flex-shrink-0" />
                <a href="tel:+1234567890" className="text-[#A8C7B8] hover:text-[#b0e892] transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#027c68] flex-shrink-0" />
                <a href="mailto:info@ecoverde.com" className="text-[#A8C7B8] hover:text-[#b0e892] transition-colors text-sm">
                  info@ecoverde.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-[#027c68] pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-[#b0e892] font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-[#A8C7B8] text-sm mb-4">Stay updated with our latest news and sustainable solutions.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-[#027c68] text-white placeholder-[#A8C7B8] focus:outline-none focus:ring-2 focus:ring-[#b0e892]"
              />
              <button className="px-6 py-2 bg-[#b0e892] text-[#003333] rounded-lg font-semibold hover:bg-[#009983] hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#027c68] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A8C7B8] text-sm">
            © 2025 EcoVerde. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#A8C7B8] hover:text-[#b0e892] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#A8C7B8] hover:text-[#b0e892] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#A8C7B8] hover:text-[#b0e892] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}