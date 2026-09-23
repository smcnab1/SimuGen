import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-12 md:px-8">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← SimuGen
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: 23 September 2026
      </p>

      <div className="mt-8 space-y-8 leading-7">
        <section>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-3">
            SimuGen is an open-source ChatGPT plugin for creating clinical
            simulation scenarios. The SimuGen plugin does not operate its own
            backend service, user accounts, analytics platform or database.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Information processed by SimuGen</h2>
          <p className="mt-3">
            SimuGen does not independently collect, transmit or store the
            contents of your conversations. Your use of ChatGPT remains subject
            to OpenAI&apos;s own privacy and data-handling terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Patient and health information</h2>
          <p className="mt-3">
            SimuGen is designed for fictional educational simulation. Do not
            provide identifiable information about real patients or other
            individuals. Scenario content should use synthetic training data
            only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Third-party services</h2>
          <p className="mt-3">
            The public SimuGen website is hosted using GitHub Pages. Links may
            direct you to GitHub, ChatGPT, OpenAI or authoritative healthcare
            resources, each of which operates under its own privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Changes</h2>
          <p className="mt-3">
            This policy may be updated when SimuGen&apos;s functionality or data
            handling changes. Material changes will be reflected in the project
            repository and this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-3">
            Questions about SimuGen can be raised through the project&apos;s
            GitHub support channels. Do not include confidential, clinical or
            sensitive personal information in a public GitHub issue.
          </p>
          <p className="mt-3">
            <Link
              href="https://github.com/smcnab1/SimuGen/issues"
              className="underline underline-offset-4"
            >
              SimuGen support and issues
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
