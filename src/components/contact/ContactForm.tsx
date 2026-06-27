/**
 * ContactForm.tsx
 * Working Web3Forms contact form with success/error states.
 */

import { useState } from "react";
import { Send } from "lucide-react";

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", accessKey);
    formData.append("from_name", "Kuldeep Singh Portfolio");
    formData.append(
      "subject",
      formData.get("subject")?.toString() || "New Portfolio Message",
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const clearStatus = () => {
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[var(--color-card-border)] bg-[var(--color-glass)] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.20)] backdrop-blur-xl sm:p-6"
    >
      <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-primary)]">
        Send a message
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          onChange={clearStatus}
          placeholder="Your name"
          className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]"
        />

        <input
          name="email"
          type="email"
          required
          onChange={clearStatus}
          placeholder="Your email"
          className="rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]"
        />
      </div>

      <input
        name="subject"
        placeholder="Subject"
        onChange={clearStatus}
        className="mt-4 w-full rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]"
      />

      <textarea
        name="message"
        required
        rows={5}
        onChange={clearStatus}
        placeholder="Tell me about your project, role, or opportunity..."
        className="mt-4 w-full resize-none rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] px-4 py-3 text-sm leading-7 text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)]"
      />

      <button
        type="submit"
        disabled={status === "sending" || !accessKey}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-black text-[var(--color-black)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        <Send size={17} />
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-semibold text-green-500">
          Message sent successfully. I will get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-500">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      {!accessKey && (
        <p className="mt-4 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm font-semibold text-yellow-500">
          Contact form key is missing.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
