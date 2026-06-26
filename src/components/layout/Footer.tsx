/**
 * Footer.tsx
 * Premium portfolio footer.
 */

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] px-4 py-10 text-white sm:px-6 lg:px-12">
      <div className="section-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-2xl font-black">Kuldeep Singh</p>
            <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">
              CEO / Founder at BRIL Consultancy Services
            </p>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
              Full Stack Developer building premium web platforms, CMS systems,
              and business-ready digital products.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:your-email@example.com"
              className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <Mail size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://github.com/Gilpix"
              target="_blank"
              rel="noreferrer"
              className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kuldeep Singh. All rights reserved.</p>
          <p>Ontario, Canada</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
