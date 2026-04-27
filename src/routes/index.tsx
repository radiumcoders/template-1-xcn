import { createFileRoute } from "@tanstack/react-router";

import { TopNavbar } from "../components/top-navbar";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,14,0.28)_0%,rgba(6,8,14,0.72)_58%,rgba(6,8,14,0.92)_100%),url('/bg.png')] bg-cover bg-center bg-no-repeat"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_100%)]" />

      <div className="relative z-10 flex min-h-svh flex-col px-6 py-4 sm:px-8 sm:py-6">
        <TopNavbar />

        <section className="flex flex-1 items-end pt-20 sm:pt-24">
          <div className="w-full" id="home">
            <h1 className="mt-3 text-6xl font-bold text-white sm:text-7xl ">
              Building Software That Scales.
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
              We design and build digital systems that grow with you. From brand
              identity to high-performance websites, our work is rooted in
              clarity, structure, and long-term thinking—crafted to scale
              without noise.
            </p>
          </div>
        </section>

        <div className="sr-only">
          <div id="pricing" />
          <div id="about" />
          <div id="features" />
        </div>
      </div>
    </main>
  );
}
