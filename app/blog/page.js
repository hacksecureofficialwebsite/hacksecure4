'use client';

import Navbar from '../../navbar';
import Footer from '../../footer';

export default function BlogPost() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-6">Top Tools for Penetration Testing</h1>
        <div className="flex justify-center mb-6">
          <img src="/pentesting-tools.jpg" alt="Penetration Testing Tools" className="rounded-lg shadow-lg w-full max-w-3xl" />
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Penetration testing, or ethical hacking, is a practice used to evaluate the security of a system by simulating cyberattacks.
          It helps identify and fix security vulnerabilities before malicious hackers can exploit them. To conduct effective penetration tests,
          professionals rely on specialized tools that help in various aspects of security testing.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Some of the most widely used penetration testing tools include:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li><strong>Metasploit</strong> - A powerful framework for developing and executing exploits.</li>
          <li><strong>Burp Suite</strong> - A widely used tool for web application security testing.</li>
          <li><strong>Nmap</strong> - A network scanning tool to discover hosts and services.</li>
          <li><strong>Wireshark</strong> - A network protocol analyzer for traffic inspection.</li>
          <li><strong>John the Ripper</strong> - A fast password-cracking tool.</li>
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed">
          These tools play a crucial role in ethical hacking and cybersecurity assessments. Understanding how to use them effectively
          can greatly enhance an individual's ability to detect and mitigate potential security threats.
        </p>
      </div>
      <Footer />
    </div>
  );
}
