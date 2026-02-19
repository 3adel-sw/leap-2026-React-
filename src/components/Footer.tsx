import { Linkedin, Facebook, Youtube } from "lucide-react";
import Logo from "@/assets/logo-light.svg";

const Footer = () => {
  const learnMoreLinks = [
    { name: "About Us", href: "/about" },
    { name: "Jobs", href: "/jobs" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ];

  return (
    <footer className="bg-black text-white py-16 px-6 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img src={Logo} alt="LEAP PM Services" className="h-12 w-auto" />
          </div>
          <div className="text-slate-400 text-sm leading-relaxed">
            <p>© 2026 LEAP PM.</p>
            <p>All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              title="LinkedIn"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              title="Facebook"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              title="YouTube"
              className="hover:text-[var(--color-primary)] transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
          <div className="space-y-4 text-sm">
            <p>
              <span className="text-[var(--color-primary)] font-bold">
                Saudi Arabia:
              </span>{" "}
              Riyadh
            </p>
            <p>
              <span className="text-[var(--color-primary)] font-bold">
                Egypt:
              </span>{" "}
              Cairo
            </p>
            <div className="pt-4 space-y-1 text-slate-300">
              <p className="hover:text-white cursor-pointer">
                info@leap-pm.com
              </p>
              <p>+966532407726</p>
              <p>+966565420453</p>
            </div>
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h4 className="text-lg font-bold mb-6">Learn More</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            {learnMoreLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-6">Our Newsletter</h4>
          <p className="text-sm text-slate-300 mb-6 leading-relaxed">
            Get the latest updates and insights delivered to your inbox.
          </p>
          <div className="flex w-full flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#0A0A0A] border border-white/10 rounded-xl sm:rounded-l-xl sm:rounded-r-none px-4 py-3 text-sm w-full focus:outline-none focus:border-[#70D1F4]/50"
            />
            <button className="mt-3 sm:mt-0 bg-[var(--color-primary)] text-black font-bold px-6 py-3 rounded-xl sm:rounded-r-xl sm:rounded-l-none hover:bg-[#5bc0e6] transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
        <p>Project management, controls, and digital delivery services.</p>
        <p>Built for complex capital projects.</p>
      </div>
    </footer>
  );
};

export default Footer;
