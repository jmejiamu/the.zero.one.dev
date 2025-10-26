const highlights = [
  {
    badge: "Product",
    title: "Blueprint & UX audits",
    copy: "Map conversion-critical flows, remove friction, and turn ideas into high-fidelity journeys the team can build.",
  },
  {
    badge: "Delivery",
    title: "Core feature builds",
    copy: "Own end-to-end React Native features with animations, data, and QA so you can launch without pausing roadmap work.",
  },
  {
    badge: "Support",
    title: "Systems & handoff",
    copy: "Document tokens, component strategies, and deployment steps so your team can iterate confidently after launch.",
  },
];

const builds = [
  {
    title: "Habit Pulse",
    description:
      "Gamified streak tracker built with Expo Router, custom animations, and offline persistence.",
    tags: ["Expo", "Reanimated", "SQLite"],
    gradient: "from-purple-500/40 via-fuchsia-500/20 to-transparent",
  },
  {
    title: "Creator Desk",
    description:
      "Multi-column dashboard for managing briefs, assets, and approvals straight from mobile.",
    tags: ["React Query", "NativeWind", "Clerk"],
    gradient: "from-sky-500/40 via-cyan-400/20 to-transparent",
  },
  {
    title: "Travel Threads",
    description:
      "Chat-first companion app that stitches maps, itineraries, and shared media into one feed.",
    tags: ["Maps", "Vision Camera", "Supabase"],
    gradient: "from-amber-400/40 via-rose-400/20 to-transparent",
  },
];

const toolkit = [
  {
    label: "Stack",
    value: "Expo + React Native",
    detail:
      "Ship to iOS and Android with a single codebase tuned for native polish.",
  },
  {
    label: "Styling",
    value: "NativeWind + Tokens",
    detail:
      "Utility-first flow with a custom design system for consistent UI drops.",
  },
  {
    label: "Motion",
    value: "Reanimated 3",
    detail:
      "Micro-interactions that showcase how to make touch feel intentional.",
  },
  {
    label: "Delivery",
    value: "Async-first rituals",
    detail:
      "Status docs, Loom walkthroughs, and tight PR reviews to keep teams aligned without extra meetings.",
  },
];

const rhythm = [
  {
    title: "Kickoff intensive",
    detail:
      "Define scope, success metrics, and technical constraints in the first 48 hours so decisions stay clear.",
  },
  {
    title: "Build loops",
    detail:
      "Two-week sprints with prototypes, code reviews, and async demos so stakeholders see progress early.",
  },
  {
    title: "Launch + support",
    detail:
      "Stabilize, polish, and support your team through release, then document next steps for internal ownership.",
  },
];

const services = [
  {
    title: "Product Studio Sprints",
    description:
      "Two-week design-build loops to validate onboarding, monetization, or retention flows.",
    deliverables: ["Clickable prototype", "Tech plan", "Launch checklist"],
  },
  {
    title: "Embedded Engineering",
    description:
      "Drop into your team’s repo to unblock feature launches, performance work, or architectural spikes.",
    deliverables: ["PR-ready code", "Documentation", "Knowledge transfer"],
  },
  {
    title: "Founder Support",
    description:
      "Hands-on help for solo founders who need a React Native partner to turn pitch decks into product.",
    deliverables: ["Scope clarifier", "Roadmap", "Investor visuals"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-16 md:px-10 lg:px-14">
        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900/80 via-zinc-950 to-black p-10 shadow-2xl">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-32 top-16 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>
          <div className="relative z-10 flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
              the.zero.one.dev
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              A React Native product studio for founders who need
              production-ready mobile apps.
            </h1>
            <p className="max-w-2xl text-lg text-zinc-300">
              I partner with startups and agencies to design, build, and launch
              React Native experiences — from concept sprints to polished
              feature work that can scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@thezeroonedev.com?subject=React%20Native%20Project"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Book a strategy call
                <span aria-hidden className="text-xl">
                  ↗
                </span>
              </a>
              <a
                href="#builds"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-white"
              >
                See recent builds
              </a>
            </div>
            {/* <dl className="mt-8 grid gap-6 text-left sm:grid-cols-3">
              {[
                { label: "Current builds", value: "Fintech · Creator tools" },
                { label: "Service modes", value: "Audits · Feature work" },
                { label: "Availability", value: "Apr–May 2025" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-[0.3em] text-zinc-400">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-semibold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl> */}
          </div>
        </section>

        <section>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-fuchsia-400">
                Content pillars
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Everything revolves around React Native
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-400">
              Every engagement is anchored to shipping React Native software
              faster — blending product thinking, code, and motion systems.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-[0_10px_80px_rgba(0,0,0,0.35)]"
              >
                <span className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                  {item.badge}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* <section id="builds" className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-sky-400">
                Build log
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                React Native builds shipping right now
              </h2>
            </div>
            <a
              href="mailto:hello@thezeroonedev.com?subject=Project%20Walkthrough"
              className="text-sm font-semibold text-sky-300 hover:text-white"
            >
              Request a walkthrough ↗
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {builds.map((build) => (
              <article
                key={build.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-zinc-900/60 p-6"
              >
                <div
                  className={`rounded-2xl bg-gradient-to-br ${build.gradient} p-4`}
                >
                  <div className="h-40 rounded-xl border border-white/20 bg-zinc-950/40 p-4">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        Live preview
                      </div>
                      <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-2">
                          {[...Array(3)].map((_, index) => (
                            <div
                              key={index}
                              className="h-12 rounded-lg bg-white/5"
                            />
                          ))}
                        </div>
                        <div className="h-3 w-3/4 rounded-full bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {build.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{build.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {build.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section> */}

        <section className="rounded-[32px] border border-white/10 bg-zinc-900/40 p-10 shadow-[0_20px_120px_rgba(0,0,0,0.45)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">
                Hire me
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Partner on your next React Native build
              </h2>
            </div>
            <a
              href="mailto:hello@thezeroonedev.com?subject=React%20Native%20Project"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Start a project
              <span aria-hidden className="text-lg">
                ↗
              </span>
            </a>
          </div>
          <p className="mt-4 max-w-3xl text-sm text-zinc-400">
            Whether you need audits, feature builds, or a full product sprint, I
            slot in as a hands-on builder who cares about developer experience
            and UI craft as much as shipping date. Most clients are seed to
            Series A startups or agencies that want a React Native specialist on
            call.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <span className="rounded-full border border-white/10 px-4 py-2 text-white">
              Available for April–May 2025
            </span>
            <span>
              Prefer async? Email hello@thezeroonedev.com with scope + timeline.
            </span>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
              Stack
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Tools powering every build
            </h2>
            <div className="mt-8 space-y-6">
              {toolkit.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                    {item.label}
                  </div>
                  <div className="mt-2 text-xl font-semibold text-white">
                    {item.value}
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">
              Rhythm
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              How we work together
            </h2>
            <div className="mt-8 space-y-6">
              {rhythm.map((entry) => (
                <div
                  key={entry.title}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="h-12 w-12 rounded-2xl bg-emerald-400/10 text-2xl text-emerald-200 flex items-center justify-center">
                    •
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-6 text-sm text-emerald-100">
              Looking to collaborate on a React Native build? Email
              hello@thezeroonedev.com with scope, stack, and deadlines — I
              answer every message.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
