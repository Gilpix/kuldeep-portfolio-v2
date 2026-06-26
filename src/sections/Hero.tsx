/**
 * Hero.tsx
 * Premium landing section with global theme variables, diagonal hero split,
 * profile image, smooth motion, and typing role animation.
 */

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

import profileImage from "../assets/images/profile.webp";
import SocialLink from "../components/ui/SocialLink";
import { profile } from "../data/profile";
import { fadeUp, staggerContainer, zoomIn } from "../utils/animations";

const heroRoles = [
  "Full Stack Developer",
  "Software Developer",
  "Frontend Developer",
  "Backend Developer",
  "Founder / CEO",
];

/**
 * Creates a simple typewriter effect:
 * types one role, pauses, deletes it, then moves to the next role.
 */
function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = letterCount === currentWord.length;
    const isWordDeleted = letterCount === 0;

    const typingSpeed = isDeleting ? 45 : 85;
    const pauseBeforeDeleting =
      isWordComplete && !isDeleting ? 1200 : typingSpeed;
    const pauseBeforeNextWord =
      isWordDeleted && isDeleting ? 350 : pauseBeforeDeleting;

    const timer = window.setTimeout(() => {
      if (isWordComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isWordDeleted && isDeleting) {
        setIsDeleting(false);
        setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
        return;
      }

      setLetterCount((currentCount) =>
        isDeleting ? currentCount - 1 : currentCount + 1,
      );
    }, pauseBeforeNextWord);

    return () => window.clearTimeout(timer);
  }, [isDeleting, letterCount, wordIndex, words]);

  return words[wordIndex].slice(0, letterCount);
}

function Hero() {
  const typedRole = useTypewriter(heroRoles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full max-w-[100vw] items-center overflow-hidden bg-[var(--section-bg-hero-left)] px-4 pb-16 pt-28 sm:px-6 lg:px-12 lg:py-20"
    >
      <div className="hero-gradient absolute inset-0" />
      <div className="hero-overlay absolute inset-0" />

      <div className="section-container relative grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-end gap-x-3 gap-y-1"
          >
            <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Hi, I'm
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
              Kuldeep Singh
            </h1>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-5 min-h-[3.5rem] text-3xl font-black leading-tight tracking-[-0.03em] bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent sm:text-4xl lg:text-5xl"
          >
            <span>{typedRole}</span>
            <span className="ml-1 inline-block animate-pulse font-normal text-[var(--color-primary)]">
              |
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">
              View Projects <ArrowDown size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/5 px-6 py-3 text-sm font-bold !text-white transition hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              Contact Me <Download size={18} />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <SocialLink key={social.platform} social={social} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={zoomIn}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <div className="relative size-56 rounded-full border-[12px] border-[var(--color-primary)] bg-[var(--color-black)] shadow-2xl shadow-black/40 sm:size-72">
            <div className="absolute -inset-6 rounded-full border border-[var(--color-primary)]/30" />
            <div className="absolute -inset-12 rounded-full border border-[var(--color-primary)]/10" />

            <img
              src={profileImage}
              alt="Kuldeep Singh"
              className="relative z-10 size-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
