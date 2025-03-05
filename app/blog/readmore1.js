'use client';

import Navbar from '../../navbar';
import Footer from '../../footer';

export default function HowToLearnCybersecurity() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-12">How to Learn Cybersecurity</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Cybersecurity is an essential skill in today's digital world. To get started, you should learn about networking, cryptography, ethical hacking, and security best practices...
        </p>
      </div>
      <Footer />
    </div>
  );
}
