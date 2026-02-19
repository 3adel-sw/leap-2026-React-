function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B1220] text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#70D1F4]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#375FA7]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          Error
        </p>
        <h1 className="mt-4 text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
          404
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
          The page you are looking for does not exist or has been moved. Let’s
          get you back to a safe place.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/"
            className="rounded-full bg-white px-8 py-3 text-sm font-bold text-[#0B1220] transition hover:translate-y-[-2px] hover:bg-white/90"
          >
            Go Home
          </a>
          <a
            href="/contact-us"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-bold text-white transition hover:border-white/60 hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Quick Tip
            </p>
            <p className="mt-2 text-sm text-white/80">
              Check the URL for typos.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Navigation
            </p>
            <p className="mt-2 text-sm text-white/80">
              Use the menu to find your page.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Support
            </p>
            <p className="mt-2 text-sm text-white/80">
              We’re here to help if you’re stuck.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
