import "../App.css";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://leap-pm.com/front/assets/img/logo-light.svg"
            alt="logo"
            className="h-8"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-bold tracking-tight text-white">
          <li>
            <a href="/" className="hover:text-primary transition">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-primary transition">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-primary transition">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-primary transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setOpen(true)} className="lg:hidden text-white">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 left-0 h-full w-80 bg-[#111827]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          z-50
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h3 className="text-white text-xl font-bold">LEAP PM</h3>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 p-6 text-white font-bold">
          <li>
            <a href="/" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/services" onClick={() => setOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="/contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        {/* Footer */}
        <div className="mt-auto p-6 text-white border-t border-white/10">
          <a href="mailto:info@leap-pm.com" className="block mb-2">
            info@leap-pm.com
          </a>

          <a href="tel:+966532407726" className="block text-gray-400">
            +966532407726
          </a>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-primary transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary transition">
              Facebook
            </a>
            <a href="#" className="hover:text-primary transition">
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </nav>
  );
};
export default Navbar;
