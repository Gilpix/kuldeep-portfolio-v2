/**
 * ContactForm.tsx
 * Contact form ready for Formspree, Web3Forms, or any third-party form endpoint.
 */

import { Send } from "lucide-react";

const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "";

function ContactForm() {
  return (
    <form
      action={formEndpoint}
      method="POST"
      className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6"
    >
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-primary)]">
        Send a message
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[var(--color-primary)]"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[var(--color-primary)]"
        />
      </div>

      <input
        name="subject"
        placeholder="Subject"
        className="mt-4 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[var(--color-primary)]"
      />

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell me about your project, role, or opportunity..."
        className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-7 text-white outline-none transition placeholder:text-slate-500 focus:border-[var(--color-primary)]"
      />

      <button
        type="submit"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-black text-[var(--color-black)] transition hover:-translate-y-0.5"
      >
        Send Message
        <Send size={17} />
      </button>
    </form>
  );
}

export default ContactForm;
