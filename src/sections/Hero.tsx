/**
 * Hero.tsx
 * Premium landing section with global theme variables, diagonal hero split,
 * profile image, smooth motion, and typing role animation.
 */

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useEffect, useState } from "react";

import profileImage from "../assets/images/profile-transparent.webp";

import SocialLink from "../components/ui/SocialLink";
import { profile } from "../data/profile";
import { fadeUp, staggerContainer, zoomIn } from "../utils/animations";

// "Full Stack Developer",
// "Software Developer",
// "Frontend Developer",
// "Backend Developer",
// "Founder / CEO",
const heroRoles = [
  "Full Stack Developer",
  "Application Developer",
  "Founder & CEO",
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

  return {
    currentWord: words[wordIndex],
    letterCount,
    isDeleting,
  };
}

function Hero() {
  const { currentWord, letterCount, isDeleting } = useTypewriter(heroRoles);

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
            className="mt-5 min-h-[3.5rem] text-3xl font-black leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
          >
            {currentWord
              .slice(0, letterCount)
              .split("")
              .map((letter, index) => {
                const isWordComplete = letterCount === currentWord.length;

                const activeLetterIndex =
                  isWordComplete && !isDeleting ? -1 : letterCount - 1;

                const isActiveLetter = index === activeLetterIndex;

                return (
                  <span
                    key={`${currentWord}-${index}`}
                    className={
                      isActiveLetter
                        ? "text-[var(--color-primary)]"
                        : "text-white"
                    }
                  >
                    {letter}
                  </span>
                );
              })}

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
              View My Work
              <ArrowDown size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/5 px-6 py-3 text-sm font-bold !text-white transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:!text-[var(--color-primary)] active:scale-95 active:bg-[var(--color-primary)] active:border-[var(--color-primary)] active:!text-[var(--color-black)]"
            >
              Get In Touch
              <Download size={18} />
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
          <motion.div
            whileHover={{ scale: 0.96 }}
            whileTap={{ scale: 0.94 }}
            className="group relative mt-6 size-52 cursor-pointer rounded-full border-[2px] border-[var(--color-primary)] bg-[var(--color-primary)] shadow-2xl shadow-black/40 sm:mt-10 sm:size-72 lg:mt-0"
          >
            <span className="absolute -inset-4 rounded-full border border-[var(--color-primary)]/60 transition duration-500 group-hover:scale-110 group-hover:opacity-40 group-active:scale-125 group-active:opacity-20" />
            <span className="absolute -inset-9 rounded-full border border-[var(--color-primary)]/35 transition duration-700 group-hover:scale-110 group-hover:opacity-30 group-active:scale-150 group-active:opacity-10" />
            <span className="absolute -inset-14 rounded-full border border-[var(--color-primary)]/20 transition duration-1000 group-hover:scale-110 group-hover:opacity-20 group-active:scale-[1.7] group-active:opacity-0" />

            <motion.img
              src={profileImage}
              alt="Kuldeep Singh"
              className="relative z-10 size-full rounded-full object-cover transition duration-500 group-hover:scale-105 group-active:scale-95"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
