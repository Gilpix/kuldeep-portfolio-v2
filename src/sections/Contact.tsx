/**
 * Contact.tsx
 * Premium contact CTA with compact form layout.
 */

import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";

import ContactForm from "../components/contact/ContactForm";
import SectionHeading from "../components/common/SectionHeading";
import SectionWrapper from "../components/layout/SectionWrapper";
import { fadeUp, viewportOnce } from "../utils/animations";

function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-[var(--section-bg-contact)]">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, -18, 0], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-10 top-20 size-80 rounded-full bg-[var(--color-primary)]/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 size-96 rounded-full bg-[var(--color-blue-soft)]/30 blur-3xl"
        />
      </div>

      <SectionHeading
        label="Contact"
        title="Ready to build"
        accent="something together?"
        description="Whether it is a product, platform, website, CMS, or full-stack application, I am open to meaningful opportunities and serious project conversations."
        align="center"
        size="lg"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto mt-14 grid max-w-6xl gap-6 overflow-hidden rounded-[2.5rem] border border-[var(--color-card-border)] bg-[var(--color-card)] p-5 shadow-[var(--shadow-card-strong)] backdrop-blur-xl sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
      >
        <div className="relative flex flex-col justify-center">
          <div className="pointer-events-none absolute -left-10 -top-10 size-44 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--color-primary)]"
          >
            <Sparkles size={15} />
            Available now
          </motion.div>

          <h3 className="relative mt-5 max-w-xl text-4xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl">
            Let’s turn a good idea into a real product.
          </h3>

          <p className="relative mt-5 max-w-xl text-sm leading-8 text-[var(--color-text-soft)] sm:text-base">
            I work across frontend, backend, CMS, cloud APIs, deployment, and
            product execution.
          </p>

          <div className="relative z-10 mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:kulsinggh@gmail.com?subject=Portfolio Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="/assets/resume/Kuldeep-Singh-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              <Download size={18} />
              View Resume
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

export default Contact;
