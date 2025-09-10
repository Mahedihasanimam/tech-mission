import React from 'react';
import { MapPin, Mail, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function TopHeader() {
  return (
    <div className="w-full bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white overflow-hidden">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        {/* Contact Info - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-x-8 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>example@gmail.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 ml-auto">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 hover:opacity-80 transition-opacity" />
          </Link>
        </div>
      </div>
    </div>
  );
}