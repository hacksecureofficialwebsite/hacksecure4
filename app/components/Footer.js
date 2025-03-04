'use client'

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand Name */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">HACK SEC</Link>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row md:space-x-12 text-center mb-4 md:mb-0">
          {/* Products Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Products</h4>
            <Link href="/courses" className="block text-gray-400 hover:text-gray-300">Courses</Link>
            <Link href="/job-board" className="block text-gray-400 hover:text-gray-300">Job Board</Link>
            <Link href="/coming-soon" className="block text-gray-400 hover:text-gray-300">VIP</Link>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <Link href="/about-us" className="block text-gray-400 hover:text-gray-300">About Us</Link>
            <Link href="/contact-us" className="block text-gray-400 hover:text-gray-300">Contact Us</Link>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Resources</h4>
            <Link href="/blog" className="block text-gray-400 hover:text-gray-300">Blog</Link>
            <Link href="/coming-soon" className="block text-gray-400 hover:text-gray-300">Career Opportunity</Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <Link href="https://www.facebook.com/yourpage" target="_blank" className="hover:text-gray-300">
            <Facebook size={24} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="https://twitter.com/yourprofile" target="_blank" className="hover:text-gray-300">
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://www.instagram.com/yourprofile" target="_blank" className="hover:text-gray-300">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://www.linkedin.com/company/hacksecureofficial/posts/?feedView=all" target="_blank" className="hover:text-gray-300">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://discord.gg/Bwjj86c3" target="_blank" className="hover:text-gray-300">
            <Linkedin size={24} />
            <span className="sr-only">Discord</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
