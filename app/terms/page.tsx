import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CircleAlert,
  Github,
} from "lucide-react";

const basePath = process.env.NODE_ENV === "production" ? "/SimuGen" : "";

export const metadata: Metadata = {
  title: "Terms of Service | SimuGen",
  description: "Terms of Service for SimuGen.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-blue-500/[0.08] blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/[0.06]">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={`${basePath}/logo.png`}
              alt="SimuGen"
              className="h-9 w-9 rounded-xl"
            />
            <span className="font-semibold">SimuGen</span>
          </Link>

          <a
            href="https://github.com/smcnab1/SimuGen"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to SimuGen
        </Link>

        <div className="mt-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/10 bg-blue-300/[0.05] px-3 py-1.5 text-xs text-blue-200">
            <CircleAlert className="h-3.5 w-3.5" />
            Terms
          </div>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm text-white/35">
            Last updated: 23 September 2026
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] backdrop-blur">
          <LegalSection title="Purpose">
            SimuGen is provided for healthcare education, training and clinical
            simulation design. It is not a clinical decision-support system and
            is not intended to direct the diagnosis or treatment of a real
            patient.
          </LegalSection>

          <LegalSection title="Educational use">
            Users are responsible for reviewing generated material before using
            it in teaching or assessment. Clinical content, medication
            information, guideline references and local processes should be
            checked against current authoritative sources and organisational
            requirements.
          </LegalSection>

          <LegalSection title="Synthetic data">
            SimuGen is intended to work with fictional simulation data. Do not
            provide identifiable real-patient information, protected health
            information or genuine healthcare identifiers.
          </LegalSection>

          <LegalSection title="No warranty">
            SimuGen is provided on an as-is basis. AI-generated content can be
            incomplete or inaccurate and must be professionally reviewed before
            use in healthcare education.
          </LegalSection>

          <LegalSection title="Open-source software">
            The SimuGen source code and plugin package are made available under
            the MIT Licence. Use of ChatGPT and other third-party services
            remains subject to the terms of those services.
          </LegalSection>

          <LegalSection title="Changes" last>
            These terms may be updated as SimuGen develops. The current version
            will be published on the SimuGen website and in the project
            repository.
          </LegalSection>
        </div>

        <footer className="mt-8 flex gap-5 text-xs text-white/30">
          <Link href="/privacy" className="hover:text-white/70">
            Privacy
          </Link>

          <a
            href="https://github.com/smcnab1/SimuGen"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white/70"
          >
            Source
          </a>
        </footer>
      </main>
    </div>
  );
}

function LegalSection({
  title,
  children,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section
      className={`p-6 sm:p-7 ${
        last ? "" : "border-b border-white/[0.07]"
      }`}
    >
      <h2 className="text-base font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-white/50">{children}</p>
    </section>
  );
}