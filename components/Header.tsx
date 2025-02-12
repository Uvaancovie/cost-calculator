"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-800">
          Everlast Insurance
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-blue-800 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-blue-800 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/services" className="text-blue-800 hover:text-blue-600">
            Services
          </Link>
          <Link href="/cost-calculator" className="text-blue-800 hover:text-blue-600">
            Cost Calculator
          </Link>
          <Link href="/contact" className="text-blue-800 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-800 hover:text-blue-600"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu using Dialog */}
      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogTrigger asChild>
          {/* Hidden button trigger for accessibility */}
          <VisuallyHidden>
            <Button>Open Menu</Button>
          </VisuallyHidden>
        </DialogTrigger>
        <DialogContent className="max-w-sm bg-white p-6 rounded-lg shadow-lg">
          <DialogTitle>Navigation</DialogTitle>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-blue-800 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-blue-800 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-blue-800 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/cost-calculator"
              className="text-blue-800 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cost Calculator
            </Link>
            <Link
              href="/contact"
              className="text-blue-800 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <DialogClose asChild>
            <Button variant="secondary" className="mt-4">
              Close Menu
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </header>
  );
}
