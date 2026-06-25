/**
 * About.tsx
 * Introduces the developer and explains the working style through
 * reusable feature cards and a short professional bio.
 */

import FeatureCard from "../components/cards/FeatureCard";
import { aboutFeatures } from "../data/about";
import { profile } from "../data/profile";

function About() {
  return (
    <section id="about" className="bg-white px-4 py-24 text-slate-950 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            A developer focused on clean systems and useful products.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            I work across frontend, backend, databases, and cloud services to
            build applications that are reliable, maintainable, and easy to use.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex justify-center lg:justify-start">
            {/* Temporary profile block. We’ll replace it with your real image later. */}
            <div className="flex size-64 items-center justify-center rounded-[2rem] bg-slate-950 text-6xl font-bold text-amber-400 shadow-2xl shadow-slate-300/80">
              KS
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Hi, I’m {profile.name}.
            </h3>

            <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
              <p>
                I’m a Full Stack Developer based in Ontario, Canada, with
                experience building CMS platforms, e-commerce systems, legal
                tech tools, and cloud-based applications.
              </p>

              <p>
                My recent work focuses on React, TypeScript, RTK Query,
                Node.js, Express, PostgreSQL, MongoDB, AWS Lambda, API Gateway,
                Amplify, S3, and RDS.
              </p>

              <p>
                I enjoy building interfaces that are simple for users and code
                structures that are easy for teams to maintain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;