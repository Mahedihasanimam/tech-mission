"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";

// Navigation links for the main menu
const mainNavLinks = ["About", "Blog", "Work", "Contact", "Careers"];
// Links for the "Services" dropdown
const servicesLinks = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "AI Solutions",
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#072D5B] lg:h-24 md:h-20 h-16 ">
      <div className="container mx-auto flex lg:h-24 md:h-20 h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image
            src="/logo.png" // Make sure your logo is in the /public folder
            alt="Tech Logo"
            width={78}
            height={78}
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link
            href="#"
            className="px-6 py-2 text-base font-semibold text-white bg-gradient-to-r from-brand-secondary to-brand-primary rounded-lg shadow-md transition-transform hover:scale-105"
            prefetch={false}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-base font-semibold text-white hover:text-brand-light-blue transition-colors outline-none">
                Services <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {servicesLinks.map((link) => (
                <DropdownMenuItem key={link} asChild>
                  <Link href="#">{link}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {mainNavLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-base font-semibold text-white hover:text-brand-light-blue transition-colors"
              prefetch={false}
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Get in Touch Button */}
        <div className="hidden lg:block">
          <Button className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white font-bold shadow-lg transition-transform hover:scale-105">
            Get In Touch
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="2" fill="#106CD8" />
                <path
                  d="M12 14H28M12 20H28M21 26H28"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 p-6">
              <Link href="#" className="text-lg font-medium">
                Home
              </Link>
              <h4 className="font-semibold text-gray-500">Services</h4>
              {servicesLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="pl-4 text-lg text-gray-800 hover:text-brand-primary"
                >
                  {link}
                </Link>
              ))}
              <hr />
              {mainNavLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-lg font-medium hover:text-brand-primary"
                >
                  {link}
                </Link>
              ))}
              <Button className="w-full mt-4">Get In Touch</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
