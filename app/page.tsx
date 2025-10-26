const toolkit = [
  {
    label: "Stack",
    value:
      "Expo , React Native , TypeScript, Node.js, Firebase, Mongodb, PostgreSQL",
    detail:
      "Ship to iOS and Android with a single codebase tuned for native polish.",
  },
  {
    label: "Styling",
    value: "NativeWind , Gluestack-UI, StyleSheet",
    detail:
      "Utility-first flow with a custom design system for consistent UI drops.",
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
              React Native partner for startups that need clean builds — not big
              teams.
            </h1>
            <p className="max-w-2xl text-lg text-zinc-300">
              I help founders translate product ideas into thoughtful mobile
              experiences with a calm, async-focused process. Bring me a deck,
              prototype, or half-built repo — I’ll guide it to release.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:jmejiamu@gmail.com?subject=React%20Native%20Project"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Book a strategy call
                <span aria-hidden className="text-xl">
                  ↗
                </span>
              </a>
            </div>
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
              jmejiamu@gmail.com with scope, stack, and deadlines — I answer
              every message.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
