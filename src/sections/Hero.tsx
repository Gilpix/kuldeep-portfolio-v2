// /**
//  * Hero.tsx
//  * Main landing section. Pulls profile data from one central file
//  * so personal info is not hardcoded across multiple components.
//  */

// import { ArrowDown, Download } from "lucide-react";

// import { profile } from "../data/profile";
// import SocialLink from "../components/ui/SocialLink";

// function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(135deg,#101820_0%,#101820_50%,#f4b400_50%,#f4b400_100%)] px-6 py-20"
//     >
//       {/* Dark overlay improves text readability on the split background. */}
//       <div className="absolute inset-0 bg-slate-950/20" />

//       <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
//         <div>
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
//             {profile.role}
//           </p>

//           <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
//             {profile.name}
//           </h1>

//           <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
//             {profile.summary}
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href="#projects"
//               className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
//             >
//               View Projects
//               <ArrowDown size={18} />
//             </a>

//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
//             >
//               Contact Me
//               <Download size={18} />
//             </a>
//           </div>

//           <div className="mt-8 flex flex-wrap gap-3">
//             {profile.socials.map((social) => (
//               <SocialLink key={social.platform} social={social} />
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center lg:justify-end">
//           {/* Temporary profile circle. Later we will replace initials with your profile image. */}
//           <div className="flex size-56 items-center justify-center rounded-full border-[12px] border-amber-400 bg-slate-950 text-5xl font-bold shadow-2xl shadow-black/30 sm:size-72">
//             KS
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


/**
 * Hero.tsx
 * Main landing section. Uses central profile data and keeps the old
 * diagonal gold/dark identity in a modern responsive layout.
 */

/**
 * Hero.tsx
 * Premium landing section with motion, central profile data,
 * and global theme colors for easy future rebranding.
 */

/**
 * Hero.tsx
 * Premium landing section using global theme variables.
 * Change hero colors in index.css, not inside this component.
 */


/**
 * Hero.tsx
 * Premium landing section using global theme variables.
 * Change hero colors in index.css, not inside this component.
 */

import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";

import profileImage from "../assets/images/profile.webp";
import SocialLink from "../components/ui/SocialLink";
import { profile } from "../data/profile";
import { smoothTransition, zoomIn } from "../utils/animations";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--section-bg-hero-left)] px-4 pb-16 pt-28 sm:px-6 lg:px-12 lg:py-20"
    >
      {/* Global hero background: dark/yellow diagonal split from index.css. */}
      <div className="absolute inset-0 bg-[image:var(--hero-gradient)]" />

      {/* Global overlay keeps text readable without changing component colors. */}
      <div className="absolute inset-0 bg-[image:var(--hero-overlay)]" />

      <div className="section-container relative grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={smoothTransition}
          className="max-w-3xl"
        >
          <p className="section-label">{profile.role}</p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
            <MapPin size={17} className="text-[var(--color-primary)]" />
            <span>{profile.location}</span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">
              View Projects <ArrowDown size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <SocialLink key={social.platform} social={social} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={zoomIn}
          initial="hidden"
          animate="visible"
          transition={{ ...smoothTransition, delay: 0.12 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative size-56 rounded-full border-[12px] border-[var(--color-primary)] bg-[var(--color-black)] shadow-2xl shadow-black/40 sm:size-72">
            {/* Decorative rings keep the old portfolio profile focus, but cleaner. */}
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