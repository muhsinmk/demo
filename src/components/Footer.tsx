import { navItems } from "@/constants/navLinks";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-darkBlue h-auto py-8 md:h-auto md:py-12">
      <div className="container mx-auto px-4">
        <nav className="mb-8">
          <h5 className="text-2xl text-white mb-4">Quick Links</h5>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white hover:text-gray-400 transition duration-300 block py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <hr className="border-t border-y-green-900 mb-8 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 md:border-r md:border-b border-green-900 text-center md:text-left">
            <p className="footer__p">Lorem ipsum dolor sit amet</p>
            <p className="footer__p">Lorem ipsum dolor sit amet</p>
            <p className="footer__p">Lorem ipsum dolor sit amet</p>
          </div>

          <div className="p-4 md:border-r md:border-b border-green-900 text-center md:text-left">
            <p className="footer__p">Lorem</p>
            <p className="footer__p">Ipsum</p>
            <p className="footer__p">Consectetur</p>
            <p className="footer__p">Efficitur</p>
          </div>

          <div className="p-4 md:border-b border-green-900 text-center md:text-left">
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <p className="mb-2 text-gray-300">
              Lorem Ipsum, Iso lorem, Iso Lorem Posum
            </p>
            <p>+91 00000 00000</p>
            <p>info@demo.com</p>
            <p className="mt-4">Follow us on</p>

            <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-2">
              <Link href="#" className="bg-lightBlue rounded-lg p-2 md:p-3">
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 object-contain"
                />
              </Link>
              <Link href="#" className="bg-lightBlue rounded-lg p-2 md:p-3">
                <img
                  src="/icons/twitter.png"
                  alt="Twitter"
                  className="w-6 h-6 object-contain"
                />
              </Link>
              <Link href="#" className="bg-lightBlue rounded-lg p-2 md:p-3">
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6 object-contain"
                />
              </Link>
              <Link href="#" className="bg-lightBlue rounded-lg p-2 md:p-3">
                <img
                  src="/icons/youtube.png"
                  alt="YouTube"
                  className="w-6 h-6 object-contain"
                />
              </Link>
              <Link href="#" className="bg-lightBlue rounded-lg p-2 md:p-3">
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
