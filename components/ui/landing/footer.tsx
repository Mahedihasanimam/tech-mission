import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mountain, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-brand-background pt-32 pb-8">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Newsletter Section */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-6xl">
           <div className="bg-brand-primary rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute -left-16 -top-16 w-48 h-48 border-8 border-white/20 rounded-full opacity-50"></div>
            <div className="absolute -right-20 -bottom-24 w-60 h-60 border-8 border-white/20 rounded-full opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h3 className="text-3xl md:text-4xl font-bold text-center font-raleway">Subscribe to our newsletter</h3>
              <form className="w-full max-w-2xl flex flex-col sm:flex-row gap-4">
                <Input type="email" placeholder="Email address" className="bg-white/90 text-black placeholder:text-gray-500 flex-grow" />
                <Button type="submit" className="bg-gray-900 text-white hover:bg-gray-800">Subscribe Now</Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 pt-16 border-t border-gray-200">
          <div className="lg:col-span-2">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8 text-brand-primary" />
              <span className="text-2xl font-bold text-gray-800 font-raleway">Tech Mission</span>
            </Link>
            <p className="text-gray-600 max-w-xs">
              Clarity gives you the blocks you need to create a truly professional website.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#"><Twitter className="text-gray-500 hover:text-brand-primary" /></Link>
              <Link href="#"><Facebook className="text-gray-500 hover:text-brand-primary" /></Link>
              <Link href="#"><Instagram className="text-gray-500 hover:text-brand-primary" /></Link>
              <Link href="#"><Linkedin className="text-gray-500 hover:text-brand-primary" /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">Features</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">Works</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">Career</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">Customer Support</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">Delivery Details</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">Terms & Conditions</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">Free eBooks</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">Development Tutorial</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-brand-primary">Youtube Playlist</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© Copyright {new Date().getFullYear()}, All Rights Reserved by Tech Mission</p>
        </div>
      </div>
    </footer>
  );
}