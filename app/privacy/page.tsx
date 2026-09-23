import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github, ShieldCheck } from "lucide-react";

const basePath = process.env.NODE_ENV === "production" ? "/SimuGen" : "";

export const metadata: Metadata = {
  title: "Privacy Policy | SimuGen",
  description: "Privacy information for SimuGen.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090d] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/[0.08] blur-[120px]" />
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/10 bg-cyan-300/[0.05] px-3 py-1.5 text-xs text-cyan-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            Privacy
          </div>

          <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-white/35">
            Last updated: 23 September 2026
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] backdrop-blur">
          <LegalSection title="Overview">
            SimuGen is an open-source ChatGPT plugin for creating clinical
            simulation scenarios. SimuGen does not operate its own backend
            service, user accounts, analytics platform or database.
          </LegalSection>

          <LegalSection title="Information processed by SimuGen">
            SimuGen does not independently collect, transmit or store the
            contents of your conversations. Your use of ChatGPT remains subject
            to OpenAI&apos;s own privacy and data-handling terms.
          </LegalSection>

          <LegalSection title="Patient and health information">
            SimuGen is designed for fictional educational simulation. Do not
            provide identifiable information about real patients or other
            individuals. Scenario content should use synthetic training data
            only.
          </LegalSection>

          <LegalSection title="Third-party services">
            The public SimuGen website is hosted using GitHub Pages. Links may
            direct you to GitHub, ChatGPT, OpenAI or authoritative healthcare
            resources. Those services operate under their own privacy policies.
          </LegalSection>

          <LegalSection title="Changes">
            This policy may be updated when SimuGen&apos;s functionality or data
            handling changes. Material changes will be reflected in the project
            repository and public website.
          </LegalSection>

          <LegalSection title="Contact" last>
            Questions can be raised through the{" "}
            <a
              href="https://github.com/smcnab1/SimuGen/issues"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200"
            >
              SimuGen GitHub repository
            </a>
            . Do not include confidential, clinical or sensitive personal
            information in a public GitHub issue.
          </LegalSection>
        </div>

        <footer className="mt-8 flex gap-5 text-xs text-white/30">
          <Link href="/terms" className="hover:text-white/70">
            Terms
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