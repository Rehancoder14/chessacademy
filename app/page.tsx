import Image from "next/image";

const programs = [
  {
    title: "Chess Coaching",
    text: "Structured lessons for beginners, school students and improving players with clear milestones.",
  },
  {
    title: "Club Membership",
    text: "A focused chess environment where students can learn, revise, solve positions and stay consistent.",
  },
  {
    title: "Game Practice",
    text: "Regular practice games, analysis sessions and tournament-style thinking habits.",
  },
  {
    title: "Parent Updates",
    text: "Simple progress conversations so parents understand what their child is learning.",
  },
];

const strengths = [
  "Beginner-friendly coaching",
  "Tactical puzzle practice",
  "Opening and endgame basics",
  "Tournament preparation",
  "Confidence and concentration building",
  "Safe learning space for children",
];

const metrics = [
  { value: "2", label: "Dedicated coaches" },
  { value: "3+", label: "Core programs" },
  { value: "64", label: "Squares of sharp focus" },
];

const faqs = [
  {
    question: "Who can join Kingslayer Chess Academy?",
    answer:
      "Kids, beginners, school students and players who want guided chess coaching, regular practice and club-style learning.",
  },
  {
    question: "Where is the academy located?",
    answer:
      "Kingslayer Chess Academy is opposite Sayali Hotel, Powai Naka, Satara, making it easy to reach from central Satara.",
  },
  {
    question: "What does the academy provide?",
    answer:
      "The academy provides chess coaching, club membership, game practice, position solving and guidance from Aniket Bapat and Apurv Deshmukh.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Kingslayer Chess Academy",
    description:
      "Chess coaching, chess club membership and game practice in Satara with coaches Aniket Bapat and Apurv Deshmukh.",
    sport: "Chess",
    image: "https://chess-academy.example.com/chess-3d-hero.jpg",
    telephone: "8390237763",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, Balaji prestige, Opposite Sayali Hotel, Powai Naka, Satara",
      addressLocality: "Satara",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: ["Satara", "Powai Naka", "Maharashtra"],
    employee: [
      { "@type": "Person", name: "Aniket Bapat", jobTitle: "Chess Coach" },
      { "@type": "Person", name: "Apurv Deshmukh", jobTitle: "Chess Coach" },
    ],
    offers: [
      { "@type": "Offer", name: "Chess Coaching" },
      { "@type": "Offer", name: "Chess Club Membership" },
      { "@type": "Offer", name: "Chess Game Practice" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/chess-3d-hero.jpg"
            alt="Black and white 3D chess pieces on a chess board"
            fill
            priority
            className="object-cover opacity-65"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,.92)_38%,rgba(0,0,0,.42)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="absolute left-0 right-0 top-24 -z-10 h-px bg-white/20" />
        <div className="absolute bottom-20 left-0 right-0 -z-10 h-px bg-white/10" />
        <div className="hero-scan absolute inset-0 -z-10 opacity-45" />

        <div className="mx-auto grid min-h-[86vh] max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div className="hero-copy max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-4 border border-white/20 bg-black/45 px-4 py-3 shadow-[8px_8px_0_rgba(255,255,255,.10)] backdrop-blur">
              <span className="brand-mark brand-mark-large">
                <Image
                  src="/logo.png"
                  alt="Kingslayer Chess Academy logo"
                  width={72}
                  height={72}
                  className="h-auto w-16 object-contain"
                />
              </span>
              <span>
                <span className="block text-sm font-black uppercase text-amber-300">
                  Kingslayer
                </span>
                <span className="block text-xl font-black uppercase text-white">
                  Chess Academy
                </span>
              </span>
            </div>
            <p className="mb-5 inline-flex border border-white/30 px-4 py-2 text-sm font-semibold uppercase text-white/85">
              Satara chess club and coaching academy
            </p>
            <h1 className="text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              Train like royalty.
              <span className="block text-amber-300">Rule the board.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-100">
              Premium chess coaching for children, beginners and ambitious
              players with Aniket Bapat and Apurv Deshmukh, opposite Sayali
              Hotel at Powai Naka, Satara.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#enquiry"
                className="inline-flex h-14 items-center justify-center bg-white px-7 text-base font-bold text-black shadow-[8px_8px_0_#525252] transition hover:-translate-y-1"
              >
                Enquire for admission
              </a>
              <a
                href="tel:8390237763"
                className="inline-flex h-14 items-center justify-center border border-white/40 px-7 text-base font-bold text-white transition hover:bg-white hover:text-black"
              >
                Call 8390237763, 7770090266
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="stat-tile border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <p className="text-3xl font-black">{metric.value}</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-300">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ChessBoardStage />
        </div>
      </section>

      <section
        id="about"
        className="light-section relative overflow-hidden px-4 py-24 text-black"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-black/10" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[460px] overflow-hidden bg-black p-6 text-white shadow-[18px_18px_0_#e4e4e7]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.12)_0_25%,transparent_25%_50%,rgba(255,255,255,.12)_50%_75%,transparent_75%)] bg-[length:92px_92px] opacity-35" />
            <div className="relative flex h-full min-h-[410px] flex-col justify-between border border-white/20 p-6">
              <p className="text-sm font-bold uppercase text-zinc-300">
                Training board
              </p>
              <div className="grid grid-cols-4 gap-3">
                {["King", "Queen", "Rook", "Knight"].map((piece) => (
                  <div
                    key={piece}
                    className="academy-square aspect-square bg-white text-black shadow-[6px_6px_0_#71717a]"
                  >
                    <div className="flex h-full flex-col items-center justify-center">
                      <span className="text-4xl font-black">
                        {piece.slice(0, 1)}
                      </span>
                      <span className="text-xs font-bold uppercase">
                        {piece}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <h2 className="max-w-md text-4xl font-black leading-tight">
                From first move to tournament mindset.
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase text-zinc-500">
              Why parents choose us
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Coaching that turns curiosity into confidence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-700">
              Kingslayer Chess Academy is built for students who need patient
              instruction, regular board practice and a serious learning
              environment. Classes focus on fundamentals, tactics, planning,
              endgames and practical decision-making.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="border border-black/10 bg-zinc-50 px-4 py-3 font-semibold"
                >
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="coaches" className="relative overflow-hidden bg-zinc-950 px-4 py-24 text-white">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(45deg,rgba(255,255,255,.07)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.07)_50%,rgba(255,255,255,.07)_75%,transparent_75%)] bg-[length:72px_72px] opacity-30" />
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-zinc-400">
              Coaches
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Learn with Aniket Bapat and Apurv Deshmukh.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {["Aniket Bapat", "Apurv Deshmukh"].map((coach) => (
              <article
                key={coach}
                className="relative border border-amber-900/10 bg-[#faf8f2] p-5 text-black shadow-[12px_12px_0_rgba(251,191,36,.12)]"
              >
                <div className="grid gap-5 sm:grid-cols-[180px_1fr]">
                  <div className="flex aspect-square items-center justify-center border border-dashed border-black/35 bg-[conic-gradient(from_45deg,#18181b_0_25%,#e9e4d8_0_50%,#18181b_0_75%,#e9e4d8_0)] p-4 text-center">
                    <span className="border border-amber-400/60 bg-black/90 px-5 py-4 text-3xl font-black tracking-[0.2em] text-amber-300 shadow-xl">
                      {coach
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{coach}</h3>
                    <p className="mt-3 leading-7 text-zinc-700">
                      Chess coach focused on clear concepts, disciplined
                      practice and practical game improvement for academy
                      students.
                    </p>
                    <p className="mt-5 inline-flex bg-black px-4 py-2 text-sm font-bold text-white">
                      Chess Coach
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="programs"
        className="light-section px-4 py-24 text-black"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-zinc-500">
                Academy programs
              </p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Everything a growing chess player needs.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-zinc-700">
              From first moves to stronger tournament habits, every session is
              designed to help students think with clarity.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <article
                key={program.title}
                className="group border border-black/10 bg-white/65 p-6 transition hover:-translate-y-2 hover:bg-black hover:text-white hover:shadow-[12px_12px_0_rgba(251,191,36,.22)]"
              >
                <p className="text-5xl font-black text-zinc-200 group-hover:text-zinc-700">
                  0{index + 1}
                </p>
                <h3 className="mt-8 text-2xl font-black">{program.title}</h3>
                <p className="mt-4 leading-7 text-zinc-700 group-hover:text-zinc-300">
                  {program.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="relative overflow-hidden bg-black px-4 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.18),transparent_24%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase text-zinc-400">
              Admission enquiry
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Start your child&apos;s chess journey.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Share your details and the academy will contact you with batches,
              timings and membership information.
            </p>
            <div className="mt-8 border border-white/15 p-5">
              <p className="font-bold">Address</p>
              <p className="mt-2 text-zinc-300">
                Opposite Sayali Hotel, Powai Naka, Satara
              </p>
              <p className="mt-5 font-bold">Contact</p>
              <a href="tel:8390237763" className="mt-2 block text-zinc-300">
                8390237763, 7770090266
              </a>
            </div>
          </div>

          <form className="grid gap-4 bg-[#faf8f2] p-6 text-black shadow-[14px_14px_0_rgba(251,191,36,.25)]">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                Parent name
                <input
                  name="parent-name"
                  type="text"
                  placeholder="Your name"
                  className="h-12 border border-black/20 px-4 font-normal outline-none focus:border-black"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Phone number
                <input
                  name="phone"
                  type="tel"
                  placeholder="Mobile number"
                  className="h-12 border border-black/20 px-4 font-normal outline-none focus:border-black"
                />
              </label>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                Student name
                <input
                  name="student-name"
                  type="text"
                  placeholder="Child's name"
                  className="h-12 border border-black/20 px-4 font-normal outline-none focus:border-black"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Chess level
                <select
                  name="level"
                  className="h-12 border border-black/20 px-4 font-normal outline-none focus:border-black"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select level
                  </option>
                  <option>Beginner</option>
                  <option>Knows basic moves</option>
                  <option>Tournament player</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold">
              Message
              <textarea
                name="message"
                placeholder="Tell us preferred timing or questions"
                rows={5}
                className="border border-black/20 px-4 py-3 font-normal outline-none focus:border-black"
              />
            </label>
            <button
              type="submit"
              className="h-13 bg-black px-6 py-4 text-base font-bold text-white transition hover:bg-zinc-800"
            >
              Send enquiry
            </button>
            
          </form>
        </div>
      </section>

      <section id="faq" className="light-section px-4 py-20 text-black">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black sm:text-5xl">
            Chess classes in Satara for serious growth.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="border border-black/10 border-t-2 border-t-amber-400 bg-white/65 p-6 shadow-[6px_6px_0_rgba(24,24,27,.06)]"
              >
                <h3 className="text-xl font-black">{faq.question}</h3>
                <p className="mt-4 leading-7 text-zinc-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ChessBoardStage() {
  return (
    <div className="stage-card relative min-h-[460px] overflow-hidden border border-white/15 bg-white/10 p-5 backdrop-blur">
      <div className="absolute inset-x-6 top-8 h-px bg-amber-300/40" />
      <div className="absolute inset-x-12 bottom-12 h-px bg-white/15" />
      <div className="relative h-[430px]">
        <div className="absolute left-1/2 top-8 z-10 -translate-x-1/2">
          <span className="brand-mark brand-mark-stage">
            <Image
              src="/logo.png"
              alt="Kingslayer Chess Academy emblem"
              width={112}
              height={112}
              className="h-auto w-24 object-contain"
            />
          </span>
        </div>
        <div className="chess-board-3d absolute bottom-8 left-1/2 h-64 w-64 -translate-x-1/2">
          {Array.from({ length: 64 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className="floating-piece left-[8%] top-[18%] bg-white text-black">
          K
        </div>
        <div className="floating-piece float-delay-1 right-[10%] top-[10%] bg-black text-white ring-1 ring-white/30">
          Q
        </div>
        <div className="floating-piece float-delay-2 bottom-[22%] left-[16%] bg-black text-white ring-1 ring-white/30">
          R
        </div>
        <div className="floating-piece float-delay-3 bottom-[30%] right-[18%] bg-white text-black">
          N
        </div>

        <div className="absolute bottom-0 left-1/2 w-[86%] -translate-x-1/2 border border-white/20 bg-black/70 p-5 shadow-[12px_12px_0_rgba(251,191,36,.18)]">
          <p className="text-sm font-bold uppercase text-zinc-400">
            Kingslayer method
          </p>
          <p className="mt-3 text-2xl font-black leading-tight">
            Strategy, calculation and discipline in every session.
          </p>
        </div>
      </div>
    </div>
  );
}
