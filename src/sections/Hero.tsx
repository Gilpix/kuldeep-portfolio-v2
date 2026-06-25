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

import { ArrowDown, Download, MapPin } from "lucide-react";

import SocialLink from "../components/ui/SocialLink";
import { profile } from "../data/profile";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-4 pb-16 pt-28 sm:px-6 lg:px-12 lg:py-20"
    >
      {/* Diagonal background inspired by the old portfolio design. */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#101820_0%,#101820_52%,#f4b400_52%,#f4b400_100%)]" />

      {/* Soft overlay keeps text readable on all screen sizes. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,180,0,0.18),transparent_30%),linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.35))]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400 sm:text-sm">
            {profile.role}
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
            <MapPin size={17} className="text-amber-400" />
            <span>{profile.location}</span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-7 grid gap-3 sm:max-w-xl sm:grid-cols-3">
            {profile.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur"
              >
                {highlight}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
            >
              View Projects
              <ArrowDown size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
            >
              Contact Me
              <Download size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <SocialLink key={social.platform} social={social} />
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          {/* Image placeholder for now. We’ll replace this with profile.png later. */}
          <div className="relative flex size-56 items-center justify-center rounded-full border-[12px] border-amber-400 bg-slate-950 text-5xl font-bold text-white shadow-2xl shadow-black/40 sm:size-72">
            <div className="absolute -inset-6 rounded-full border border-amber-400/30" />
            <div className="absolute -inset-12 rounded-full border border-amber-400/10" />
            KS
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;