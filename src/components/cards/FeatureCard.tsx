/**
 * FeatureCard.tsx
 * Reusable animated card for values, skills, or highlights.
 */

import { motion } from "framer-motion";

import type { AboutFeature } from "../../types/about";

interface FeatureCardProps {
  feature: AboutFeature;
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-xl"
    >
      <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-[var(--color-dark)]">
        <Icon size={25} strokeWidth={1.8} />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {feature.description}
      </p>
    </motion.article>
  );
}

export default FeatureCard;