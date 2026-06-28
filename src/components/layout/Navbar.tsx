/**
 * Navbar.tsx
 * Responsive navigation with active section tracking.
 */

import { useEffect, useState } from "react";
import {
  Briefcase,
  Code2,
  Home,
  Mail,
  Menu,
  User,
  Wrench,
  X,
} from "lucide-react";

import ThemeToggle from "../common/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const updateActiveSection = () => {
      let current = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.45) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile / Tablet Navbar */}
      <header className="fixed left-0 top-0 z-[999] w-full border-b border-white/10 bg-[#020617]/95 px-4 py-3 text-white backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a
            href="#home"
            onClick={handleMobileLinkClick}
            className="group leading-none"
            aria-label="Go to home section"
          >
            <span className="block text-lg font-black tracking-tight !text-white transition group-active:!text-[var(--color-primary)]">
              Kuldeep
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-white/45 transition group-active:text-[var(--color-primary)]">
              Full Stack Developer
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div
              className="
  [&>*]:!static
  [&>*]:!right-auto
  [&>*]:!top-auto
  [&>*]:!translate-x-0
  [&>*]:!translate-y-0
  [&_button]:!size-9
  [&_button]:!border-0
  [&_button]:!bg-transparent
  [&_button]:!shadow-none
  [&_button]:!text-white
  "
            >
              <ThemeToggle />
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex size-9 items-center justify-center border-0 bg-transparent !text-white transition hover:!text-[var(--color-primary)] active:scale-95 active:!text-[var(--color-primary)]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="-mx-4 mt-3 border-t border-white/10 bg-[#020617]/98 px-4 py-3 shadow-2xl backdrop-blur-xl">
            <ul className="grid gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={handleMobileLinkClick}
                      className={`flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-[15px] font-black transition active:scale-[0.98] ${
                        isActive
                          ? "bg-[var(--color-primary)] !text-[var(--color-black)]"
                          : "!text-white hover:bg-white/10 hover:!text-[var(--color-primary)] active:bg-white/10 active:!text-[var(--color-primary)]"
                      }`}
                    >
                      <Icon size={20} strokeWidth={2} />
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
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`group flex h-12 w-12 items-center overflow-hidden rounded-full border shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:w-36 ${
                      isActive
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] !text-[var(--color-black)] shadow-[0_0_28px_rgba(244,180,0,0.35)]"
                        : "border-white/15 bg-[#020617]/95 !text-white hover:border-[var(--color-primary)] hover:bg-[#020617] hover:!text-[var(--color-primary)]"
                    }`}
                  >
                    <span className="flex min-w-12 justify-center">
                      <Icon size={19} strokeWidth={1.9} />
                    </span>

                    <span className="whitespace-nowrap pr-4 text-sm font-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
