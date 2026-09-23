/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { BotMessageSquare, Github, ShieldCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const basePath = process.env.NODE_ENV === "production" ? "/SimuGen" : "";

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <img
              src={`${basePath}/logo.png`}
              alt="SimuGen"
              className="h-10 w-10 rounded-lg"
            />
            <span className="font-semibold">SimuGen</span>
          </div>

          <Link href="https://github.com/smcnab1/SimuGen">
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20 text-center md:px-8 md:py-28">
          <img
            src={`${basePath}/logo.png`}
            alt=""
            className="mb-8 h-24 w-24 rounded-2xl"
          />

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Healthcare simulation
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Build better clinical simulation scenarios
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            SimuGen helps healthcare educators create structured, realistic and
            educationally purposeful clinical simulation scenarios, with a UK
            healthcare focus by default.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="https://chatgpt.com/g/g-eTexeFjiJ-simugen">
              <Button size="lg">
                <BotMessageSquare className="mr-2 h-5 w-5" />
                Try SimuGen
              </Button>
            </Link>
            <Link href="https://github.com/smcnab1/SimuGen">
              <Button size="lg" variant="outline">
                <Github className="mr-2 h-5 w-5" />
                View source
              </Button>
            </Link>
          </div>
        </section>

        <section className="border-y bg-muted/30">
          <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-14 md:grid-cols-3 md:px-8">
            <div>
              <Stethoscope className="mb-4 h-6 w-6" />
              <h2 className="font-semibold">Clinically structured</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Patient presentation, observations, investigations, scenario
                progression and expected learner actions.
              </p>
            </div>

            <div>
              <ShieldCheck className="mb-4 h-6 w-6" />
              <h2 className="font-semibold">Simulation-first</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Synthetic patient information, learner-level adaptation and
                clear separation from real-patient clinical advice.
              </p>
            </div>

            <div>
              <BotMessageSquare className="mb-4 h-6 w-6" />
              <h2 className="font-semibold">Faculty-ready</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Learning objectives, equipment, moulage, faculty guidance and
                debrief prompts in one usable package.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>SimuGen · Open-source clinical simulation tooling.</p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link
              href="https://github.com/smcnab1/SimuGen/issues"
              className="hover:text-foreground"
            >
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
