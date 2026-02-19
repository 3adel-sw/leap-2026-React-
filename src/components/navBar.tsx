import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/logo-light.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 py-3 backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Leap Logo"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-12" : "h-12 md:h-16"
            }`}
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-lg font-semibold transition-colors ${
                scrolled
                  ? "text-black hover:text-black/70"
                  : "text-white hover:text-white/75"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className={`relative z-[70] md:hidden ${scrolled || mobileOpen ? "text-black" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-black/35"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute left-0 top-0 h-screen w-full bg-white/95 backdrop-blur-md transition-transform duration-500 ease-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col justify-center gap-8 px-8">
            <a
              href="/"
              className="mx-auto mb-2 flex items-center justify-center"
            >
              <img src={Logo} alt="Leap Logo" className="h-14 w-auto" />
            </a>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-3xl font-semibold text-black transition-colors hover:text-black/70"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
