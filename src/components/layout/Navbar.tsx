/**
 * Navbar.tsx
 * Responsive navigation. Desktop uses a floating side menu, while
 * mobile/tablet uses a clean top bar with a slide-down menu.
 */

import { useState } from "react";
import { Briefcase, Code2, Home, Mail, Menu, User, Wrench, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

function Navbar() {
  // Controls mobile menu visibility only. Desktop menu is always visible.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Closes mobile menu after clicking a section link.
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile / Tablet Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#home" className="text-sm font-bold uppercase tracking-[0.25em] text-amber-400">
            KS
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="rounded-full border border-white/10 p-2 text-white transition hover:border-amber-400 hover:text-amber-400"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mx-auto mt-4 max-w-6xl rounded-2xl border border-white/10 bg-slate-900 p-3">
            <ul className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleMobileLinkClick}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-amber-400"
                    >
                      <Icon size={18} />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>

      {/* Desktop Floating Side Navbar */}
      <header className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <nav aria-label="Primary navigation">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex h-12 w-12 items-center overflow-hidden rounded-full border border-slate-700 bg-slate-900/90 text-slate-300 shadow-lg shadow-black/20 transition-all duration-300 hover:w-36 hover:border-amber-400 hover:bg-slate-950 hover:text-amber-400"
                  >
                    <span className="flex min-w-12 justify-center">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>

                    <span className="whitespace-nowrap pr-4 text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;