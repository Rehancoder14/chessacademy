import Image from "next/image";
import EnquiryForm from "./EnquiryForm";

const phoneNumbers = [
  {
    display: "83902 37763",
    international: "+91-8390237763",
  },
  {
    display: "77700 90266",
    international: "+91-7770090266",
  },
];

const learningLevels = [
  {
    title: "Discover the Game",
    stage: "Basic Level 1",
    promise: "Build a strong foundation.",
    text: "Learn the board, piece moves and captures, then put the rules into practice. Explore check, checkmate, stalemate, castling, en passant, promotion and basic mates.",
    skills: "Rules · Piece movement · First checkmates",
  },
  {
    title: "Think Tactically",
    stage: "Basic Level 2",
    promise: "Spot opportunities to win.",
    text: "Recognize double attacks, pins, knight forks, skewers and back-rank mates. Learn to turn tactical chances into material and checkmate.",
    skills: "Forks · Pins · Mating patterns",
  },
  {
    title: "Develop Strategic Thinking",
    stage: "Pre-Intermediate 1",
    promise: "Recognize patterns. Exploit weaknesses.",
    text: "Find weaknesses and combine ideas using deflection, overloaded pieces and multi-move tactics. Study advanced mating patterns, two-bishop mates and variation calculation.",
    skills: "Combinations · Weaknesses · Calculation",
  },
  {
    title: "Master Calculation & Endgames",
    stage: "Pre-Intermediate 2",
    promise: "Think several moves ahead.",
    text: "Calculate longer combinations, study famous tactical games and open lines with purpose. Build confidence in king-and-pawn endgames and understand repetition draws.",
    skills: "Calculation · Pawn endings · Draws",
  },
  {
    title: "Attack with Confidence",
    stage: "Intermediate 1",
    promise: "Create winning opportunities.",
    text: "Learn to attack the king, remove defenders and pawn cover, and use intermediate moves to seize the initiative. Turn promising positions into real chances.",
    skills: "King attacks · Removing defenders · Initiative",
  },
  {
    title: "Advance Your Game",
    stage: "Intermediate 2",
    promise: "Refine. Compete. Grow.",
    text: "Explore discovered attacks, queen traps, seventh-rank rooks, back-rank weaknesses and rook-versus-pawn endings. Improve coordination and prepare for competitive play.",
    skills: "Piece coordination · Rook endings · Competition",
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
      "Kingslayer Chess Academy is at 3rd Floor, Balaji Prestige, opposite Sayali Hotel, Powai Naka, Satara, Maharashtra.",
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
    "@id": "https://www.kingslayerchessclub.in/#academy",
    name: "Kingslayer Chess Academy",
    url: "https://www.kingslayerchessclub.in/",
    description:
      "Kingslayer Chess Academy offers chess coaching, chess club membership and game practice for children, beginners and improving players in Satara, Maharashtra.",
    sport: "Chess",
    image: "https://www.kingslayerchessclub.in/chess-3d-hero.jpg",
    logo: "https://www.kingslayerchessclub.in/logo.png",
    telephone: phoneNumbers[0].international,
    contactPoint: phoneNumbers.map(({ international }) => ({
      "@type": "ContactPoint",
      telephone: international,
      contactType: "admissions",
      areaServed: "IN",
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, Balaji Prestige, Opposite Sayali Hotel, Powai Naka",
      addressLocality: "Satara",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Satara" },
      { "@type": "Place", name: "Powai Naka, Satara" },
    ],
    employee: [
      { "@type": "Person", name: "Aniket Bapat", jobTitle: "Chess Coach" },
      { "@type": "Person", name: "Apurv Deshmukh", jobTitle: "Chess Coach" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chess Academy Programs",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chess Coaching" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chess Club Membership" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chess Game Practice" } },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
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
              Chess Academy
              <span className="block text-amber-300">in Satara</span>
            </h1>
            <p className="mt-4 text-lg font-bold uppercase tracking-wide text-amber-200">
              Train like royalty. Rule the board.
            </p>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-100">
              Premium chess coaching for children, beginners and ambitious
              players with coaches Aniket Bapat and Apurv Deshmukh at Powai Naka,
              opposite Sayali Hotel in Satara, Maharashtra.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <a
                href="#enquiry"
                className="inline-flex h-14 items-center justify-center bg-white px-7 text-base font-bold text-black shadow-[8px_8px_0_#525252] transition hover:-translate-y-1"
              >
                Enquire for admission
              </a>
              <div className="grid flex-1 grid-cols-2 gap-2 border border-white/20 bg-white/5 p-2">
                <p className="col-span-2 px-2 text-xs font-bold uppercase tracking-wide text-zinc-300">
                  Call us
                </p>
                {phoneNumbers.map((phoneNumber) => (
                  <a
                    key={phoneNumber.international}
                    href={`tel:${phoneNumber.international}`}
                    aria-label={`Call ${phoneNumber.display}`}
                    className="flex min-h-11 items-center justify-center border border-white/20 px-2 text-sm font-bold text-white transition hover:border-amber-300 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                  >
                    {phoneNumber.display}
                  </a>
                ))}
              </div>
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
              Chess coaching in Satara
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
              The Kingslayer learning path
              </p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Your journey to chess mastery.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-zinc-700">
              Six progressive levels take students from their first moves to
              confident, competitive play—one skill at a time.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {learningLevels.map((level, index) => (
              <article
                key={level.title}
                className="group relative overflow-hidden border border-black/10 bg-white/70 p-6 transition hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-[10px_10px_0_rgba(251,191,36,.22)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500 group-hover:text-amber-300">
                    {level.stage}
                  </p>
                  <p className="text-4xl font-black text-zinc-200 group-hover:text-zinc-700">
                  0{index + 1}
                  </p>
                </div>
                <h3 className="mt-5 text-2xl font-black">{level.title}</h3>
                <p className="mt-2 font-bold text-amber-700 group-hover:text-amber-300">
                  {level.promise}
                </p>
                <p className="mt-4 min-h-28 leading-7 text-zinc-700 group-hover:text-zinc-300">
                  {level.text}
                </p>
                <p className="mt-5 border-t border-black/10 pt-4 text-xs font-bold uppercase tracking-wide text-zinc-500 group-hover:border-white/15 group-hover:text-zinc-300">
                  {level.skills}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-6 border border-black/10 bg-black p-6 text-white shadow-[8px_8px_0_rgba(251,191,36,.2)] sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-amber-300">
                Every move takes you further
              </p>
              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                Learn. Practise. Analyse. Improve.
              </h3>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-300">
                Progressive training, practical games and assessments help
                students build skill step by step—from understanding the basics
                to playing with confidence and strategic awareness.
              </p>
            </div>
            <a
              href="#enquiry"
              className="inline-flex min-h-12 items-center justify-center bg-amber-300 px-6 font-black text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
            >
              Find your next move <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="enquiry" className="relative overflow-hidden bg-black px-4 py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.18),transparent_24%)]" />
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
                3rd Floor, Balaji Prestige, opposite Sayali Hotel, Powai Naka, Satara, Maharashtra 415001.
              </p>
              <div className="mt-5">
                <p className="font-bold">Contact</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {phoneNumbers.map((phoneNumber) => (
                    <a
                      key={phoneNumber.international}
                      href={`tel:${phoneNumber.international}`}
                      aria-label={`Call ${phoneNumber.display}`}
                      className="border border-white/15 bg-white/5 px-4 py-3 font-semibold text-zinc-200 transition hover:border-amber-300 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                    >
                      {phoneNumber.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <EnquiryForm />
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
