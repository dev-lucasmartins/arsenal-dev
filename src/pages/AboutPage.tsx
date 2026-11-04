import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TierBadge } from "../components/TierBadge";
import { aboutContent } from "../i18n/about-content";
import { useLocale } from "../hooks/useLocale";
import { tierStyles } from "../lib/tier-styles";
import { cn } from "../lib/utils";
import type { Tier } from "../types/study-item";

const TIER_ORDER: Tier[] = ["starter", "basic", "epic", "legendary"];

export function AboutPage() {
  const { locale } = useLocale();
  const content = aboutContent[locale];

  return (
    <main className="flex-1 overflow-y-auto overscroll-contain px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-2xl">
        <header className="flex flex-col items-center gap-4 text-center">
          <img
            src={`${import.meta.env.BASE_URL}images/arsenaldev-icon.png`}
            alt="Arsenal Dev"
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
          />
          <h1 className="text-2xl font-bold text-accent-text sm:text-3xl">Arsenal Dev</h1>
          <p className="max-w-md text-sm text-slate-400 light:text-slate-600">
            {content.tagline}
          </p>
        </header>

        <div className="mt-10 space-y-8">
          <Section title={content.introHeading}>
            <p className="leading-relaxed text-slate-300 light:text-slate-700">
              {content.intro}
            </p>
          </Section>

          <Section title={content.howToUseHeading}>
            <ol className="space-y-2.5">
              {content.howToUseSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 text-sm leading-relaxed text-slate-300 light:text-slate-700"
                >
                  <span
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                      "bg-accent/15 text-accent-text-strong",
                    )}
                  >
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Section>

          <Section title={content.topicsHeading}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {content.topics.map((topic) => (
                <div
                  key={topic.label}
                  className="rounded-xl border border-slate-700 light:border-slate-300 bg-surface-raised p-3 shadow-sm"
                >
                  <p className="text-sm font-semibold text-accent-text-strong">{topic.label}</p>
                  <p className="mt-1 text-sm text-slate-300 light:text-slate-700">{topic.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title={content.stackHeading}>
            <div className="flex flex-wrap gap-2">
              {content.stackItems.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-700 light:border-slate-300 bg-surface-raised px-3 py-1 text-xs font-medium text-slate-300 light:text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          <Section title={content.tiersHeading}>
            <p className="mb-3 text-sm text-slate-400 light:text-slate-600">
              {content.tiersIntro}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TIER_ORDER.map((tier) => {
                const style = tierStyles[tier];
                return (
                  <div
                    key={tier}
                    className={cn(
                      "rounded-xl border bg-surface-raised p-3 shadow-sm",
                      style.border,
                    )}
                  >
                    <TierBadge tier={tier} />
                    <p className="mt-2 text-sm text-slate-300 light:text-slate-700">
                      {content.tierDescriptions[tier]}
                    </p>
                  </div>
                );
              })}
            </div>
          </Section>

          <div className="flex justify-center pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-transform hover:scale-105"
            >
              {content.ctaLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 border-b border-accent/30 pb-2 text-sm font-bold uppercase tracking-wider text-accent/90">
        {title}
      </h2>
      {children}
    </section>
  );
}
