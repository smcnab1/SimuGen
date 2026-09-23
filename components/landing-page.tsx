import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Check,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";

const basePath = process.env.NODE_ENV === "production" ? "/SimuGen" : "";

const chatGptUrl = "https://chatgpt.com/plugins/plugins_6ab3b44c4dac8191974976c0d09f0180";

const supportUrl =
  "https://github.com/smcnab1/SimuGen/issues/new/choose";

export function LandingPage() {

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-[#07090d] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[-8rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 shrink-0">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={`${basePath}/logo.png`}
              alt="SimuGen"
              className="h-10 w-10 rounded-xl"
            />

            <div>
              <div className="font-semibold tracking-tight">SimuGen</div>
              <div className="text-[11px] text-white/40">
                Healthcare Simulation
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-2">
            <a
              href="https://github.com/smcnab1/SimuGen"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white sm:flex"
            >
              <SiGithub className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={supportUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 min-h-0 flex-1 overflow-y-auto lg:overflow-hidden">
        <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 px-5 py-5 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-12 lg:px-10 lg:py-6">
          {/* Hero */}
          <section>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              Healthcare Simulation in ChatGPT
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-[3.8rem] lg:leading-[0.98] xl:text-[4.35rem]">
              Build clinical
              <br />
              scenarios that{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                feel real.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              SimuGen helps healthcare educators turn an idea into a structured,
              realistic simulation scenario - including clinical progression,
              faculty guidance and debriefing prompts.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={chatGptUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
              >
                <MessageSquareText className="h-4 w-4" />
                Open in ChatGPT
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://github.com/smcnab1/SimuGen"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/75 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <SiGithub className="h-4 w-4" />
                View source
              </a>
            </div>

            <div className="mt-7 flex max-w-xl flex-wrap gap-x-6 gap-y-3 text-xs text-white/45">
              <span className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-cyan-400" />
                UK-focused
              </span>

              <span className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-cyan-400" />
                Faculty-ready
              </span>

              <span className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-cyan-400" />
                Debrief included
              </span>

              <span className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-cyan-400" />
                Open source
              </span>
            </div>
          </section>

          {/* Product preview */}
          <section className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/[0.025] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/40 backdrop-blur-xl">
              {/* Preview header */}
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={`${basePath}/logo.png`}
                    alt=""
                    className="h-9 w-9 rounded-xl"
                  />

                  <div>
                    <p className="text-sm font-medium">SimuGen</p>
                    <p className="text-[11px] text-white/35">
                      Scenario Generator
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-cyan-400/50" />
                </div>
              </div>

              {/* Scenario */}
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300/70">
                      Generated scenario
                    </p>
                    <h2 className="mt-1 text-lg font-semibold">
                      Acute respiratory deterioration
                    </h2>
                  </div>

                  <Stethoscope className="h-5 w-5 text-white/25" />
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium">Sarah Mitchell</p>
                      <p className="mt-0.5 text-xs text-white/35">
                        58 years · Medical ward
                      </p>
                    </div>

                    <span className="rounded-full border border-amber-300/15 bg-amber-300/[0.07] px-2.5 py-1 text-[10px] font-medium text-amber-200">
                      Deteriorating
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {[
                      ["RR", "28"],
                      ["SpO₂", "89%"],
                      ["HR", "116"],
                      ["BP", "104/68"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5"
                      >
                        <p className="text-[9px] uppercase tracking-wide text-white/30">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/[0.07] bg-black/15 p-3.5">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <Activity className="h-3.5 w-3.5 text-cyan-300" />
                      Scenario progression
                    </div>
                    <p className="mt-2 text-[11px] leading-5 text-white/35">
                      Dynamic observations and expected learner actions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-black/15 p-3.5">
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-300" />
                      Faculty guidance
                    </div>
                    <p className="mt-2 text-[11px] leading-5 text-white/35">
                      Learning objectives, prompts and structured debrief.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 shrink-0 border-t border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-3 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>SimuGen · Open-source healthcare simulation tooling.</p>

          <nav className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-white/70">
              Privacy
            </Link>

            <Link href="/terms" className="transition hover:text-white/70">
              Terms
            </Link>

            <a
              href={supportUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white/70"
            >
              Support
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}