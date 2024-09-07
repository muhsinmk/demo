import { navItems } from "@/constants/navLinks";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-darkBlue h-64 md:h-1/2 ">
      <div>
        <nav className="container mx-auto">
          <ul className="flex justify-self-start space-x-8 p-10">
            <h5 className="text-2xl">Quick Links</h5>
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
        <hr className="border-t border-y-green-900  max-w-full" />
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="p-20 border-r border-b  border-green-900  max-w-full text-center">
            <p className="footer__p">Lorem ipsum dolor sit amet</p>
            <p className="footer__p">Lorem ipsum dolor sit amet</p>
            <p className="footer__p">Lorem ipsum dolor sit amet</p>
          </div>
          {/* <hr className="border- border-y-green-900  max-w-full" /> */}
          {/* Second Column */}
          <div className="p-20 border-r border-b  border-green-900  max-w-full text-center">
            <p className="footer__p">Lorem</p>
            <p className="footer__p">Ipsum</p>
            <p className="footer__p">Consectetur</p>
            <p className="footer__p">Efficitur</p>
          </div>

          {/* Third Column - Contact Info */}
          <div className="p-20  border-b  border-green-900  max-w-full ">
            <h3 className="font-bold text-xl mb-4">Contact Us</h3>
            <p className="mb-2 text-gray-300">
              Lorem Ipsum, Iso lorem, Iso Lorem Posum
            </p>
            <p>+91 00000 00000</p>
            <p>info@demo.com</p>
            <p className="mt-4">Follow us on</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-2">
              <Link href="#" className=" bg-lightBlue rounded-lg p-3">
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 object-contain"
                />
              </Link>
              <Link href="#" className=" bg-lightBlue rounded-lg p-3">
                <img
                  src="/icons/twitter.png"
                  alt="Twitter"
                  className="w-6 h-6 object-contain"
                />
              </Link>
              <Link href="#" className=" bg-lightBlue rounded-lg p-3">
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-6 h-6 object-contain"
                />
              </Link>
              <Link href="#" className=" bg-lightBlue rounded-lg p-3">
                <img
                  src="/icons/youtube.png"
                  alt="YouTube"
                  className="w-6 h-6 object-contain"
                />
              </Link>
              <Link href="#" className=" bg-lightBlue rounded-lg p-3">
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-4 py-7 px-12 text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
