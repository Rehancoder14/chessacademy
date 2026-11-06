import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chess Tournaments in Satara",
  description:
    "Discover upcoming semi-classical chess tournaments hosted by Kingslayer Chess Club in Satara.",
  alternates: {
    canonical: "/tournaments",
  },
};

export default function TournamentsPage() {
  return (
    <section className="light-section px-4 py-24 text-black">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-500">
            Hosted by Kingslayer Chess Club
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            Play your next tournament.
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-700">
            Meet the local chess community, challenge yourself over the board
            and make every move matter.
          </p>
        </div>

        <section aria-labelledby="upcoming-tournaments" className="mt-10">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 id="upcoming-tournaments" className="text-2xl font-black">
              Upcoming tournament
            </h2>
            <span className="border border-amber-500/40 bg-amber-300/30 px-3 py-1 text-xs font-black uppercase tracking-wide">
              Registration open
            </span>
          </div>
          <article className="grid overflow-hidden border border-black/10 bg-zinc-950 text-white shadow-[10px_10px_0_rgba(24,24,27,.12)] md:grid-cols-[.8fr_1.2fr]">
            <div className="relative min-h-80 bg-black sm:min-h-96">
              <Image
                src="/tmt1.jpeg"
                alt="Kingslayers Chess Club semi-classical one day tournament brochure"
                width={1024}
                height={1536}
                className="h-full w-full object-contain"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-300">
                Semi-classical · Satara
              </p>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                One day tournaments
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="border border-white/15 bg-white/5 p-4">
                  <p className="text-sm font-bold text-amber-300">21 November</p>
                  <p className="mt-1 text-lg font-black">U14 · 1st TMT</p>
                  <p className="mt-1 text-sm text-zinc-400">30 players · 5 rounds</p>
                </div>
                <div className="border border-white/15 bg-white/5 p-4">
                  <p className="text-sm font-bold text-amber-300">22 November</p>
                  <p className="mt-1 text-lg font-black">Open · 2nd TMT</p>
                  <p className="mt-1 text-sm text-zinc-400">30 players · 5 rounds</p>
                </div>
              </div>
              <dl className="mt-5 grid gap-x-4 gap-y-3 border-t border-white/15 pt-5 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-bold text-white">First round</dt>
                  <dd className="mt-1 text-zinc-400">9:30 AM</dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Open time control</dt>
                  <dd className="mt-1 text-zinc-400">25 + 10</dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Venue</dt>
                  <dd className="mt-1 text-zinc-400">
                    Balaji Prestige, 3rd Floor, Powai Naka, Satara
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-white">Entry fee</dt>
                  <dd className="mt-1 text-zinc-400">₹400 · KSCC members ₹360</dd>
                </div>
              </dl>
              <a
                href="tel:+918390237763"
                className="mt-6 inline-flex min-h-12 items-center justify-center bg-amber-300 px-5 font-black text-black transition hover:bg-white focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-amber-300"
              >
                Call to register · 83902 37763
              </a>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
