import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#222831] text-gray-300">
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div className="flex items-baseline gap-0.5 mb-3">
              <span className="text-white font-extrabold text-2xl leading-none">WIN</span>
              <span className="text-white text-sm font-light">store</span>
            </div>

            <p className="text-[#00b4b4] font-semibold text-sm mb-3">
              Got questions? Call us 24/7!
            </p>
            <div className="flex items-center gap-2 text-sm mb-1">
              <Phone size={13} className="text-gray-400" />
              <span>03 111 666 144</span>
            </div>
            <div className="text-sm mb-4 ml-5">0317 1777015.</div>

            <p className="text-[#00b4b4] font-semibold text-sm mb-1">Contact info</p>
            <div className="flex items-center gap-2 text-sm mb-5">
              <Mail size={13} className="text-gray-400" />
              <span>info@winstore.pk</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-[#00b4b4] hover:border-[#00b4b4] transition-colors"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[#00b4b4] font-bold text-base mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#00b4b4] text-sm transition-colors no-underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <div /> {/* spacer */}
          <div className="flex items-center gap-3">
            {/* Payment badges */}
            {["VISA", "MasterCard", "CASH", "Easy Install"].map((method) => (
              <div
                key={method}
                className="bg-white rounded px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1a1e24] text-center py-3 text-xs text-gray-500">
        © 2021 Winstore. All Rights Reserved.
      </div>
    </footer>
  );
}
