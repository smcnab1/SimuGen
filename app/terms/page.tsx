import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-12 md:px-8">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← SimuGen
      </Link>

      <h1 className="mt-8 text-3xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: 23 September 2026
      </p>

      <div className="mt-8 space-y-8 leading-7">
        <section>
          <h2 className="text-xl font-semibold">Purpose</h2>
          <p className="mt-3">
            SimuGen is provided for healthcare education, training and clinical
            simulation design. It is not a clinical decision-support system and
            is not intended to direct the diagnosis or treatment of a real
            patient.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Educational use</h2>
          <p className="mt-3">
            Users are responsible for reviewing generated material before using
            it in teaching or assessment. Clinical content, medication
            information, guideline references and local processes should be
            checked against current authoritative sources and organisational
            requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Synthetic data</h2>
          <p className="mt-3">
            SimuGen is intended to work with fictional simulation data. Do not
            provide identifiable real-patient information, protected health
            information or genuine healthcare identifiers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">No warranty</h2>
          <p className="mt-3">
            SimuGen is provided on an as-is basis. AI-generated content can be
            incomplete or inaccurate and must be professionally reviewed before
            use in healthcare education.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Open-source software</h2>
          <p className="mt-3">
            The SimuGen source code and plugin package are made available under
            the MIT Licence. Use of ChatGPT and other third-party services
            remains subject to the terms of those services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Changes</h2>
          <p className="mt-3">
            These terms may be updated as SimuGen develops. The current version
            will be published on this site and in the project repository.
          </p>
        </section>
      </div>
    </main>
  );
}
