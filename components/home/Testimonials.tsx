import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "শিক্ষকেরা প্রতিটি বিষয় খুব সহজভাবে বোঝান এবং সবসময় আমাদের আরও ভালো করতে উৎসাহ দেন।",
    name: "Sabila Rahman",
    role: "এসএসসি শিক্ষার্থী",
    initials: "SR",
    color: "bg-[#e8f3fb] text-[#145b86]",
  },
  {
    quote:
      "ক্রিয়েটিভ কেয়ার কোচিং আমাকে আরও আত্মবিশ্বাসী হতে এবং পরীক্ষার জন্য প্রস্তুত হতে সহায়তা করেছে।",
    name: "Tanvir Hasan",
    role: "এইচএসসি শিক্ষার্থী",
    initials: "TH",
    color: "bg-[#e9f8ef] text-[#168354]",
  },
  {
    quote: "শিক্ষার পরিবেশটি বন্ধুত্বপূর্ণ, মনোযোগী এবং সত্যিই সহায়ক।",
    name: "Mim Akter",
    role: "শিক্ষার্থী",
    initials: "MA",
    color: "bg-[#fff1e2] text-[#e89025]",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
              শিক্ষার্থীদের মতামত
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              আমাদের শিক্ষার্থীরা কী বলে
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              ক্রিয়েটিভ কেয়ার কোচিংয়ের মাধ্যমে বেড়ে ওঠা, শেখা এবং নিজেদের
              লক্ষ্য অর্জন করা শিক্ষার্থীদের অভিজ্ঞতা শুনুন।
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="আগের মতামতগুলো"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#145b86] transition-colors hover:bg-[#e8f3fb]"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="পরের মতামতগুলো"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#145b86] transition-colors hover:bg-[#e8f3fb]"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, initials, color }) => (
            <article
              key={name}
              className="relative rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <Quote
                className="absolute right-5 top-5 h-8 w-8 text-[#dcecf6]"
                aria-hidden="true"
              />

              <div className="flex gap-1 text-[#f2a52d]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mt-6 min-h-24 text-sm leading-6 text-slate-600">
                &quot;{quote}&quot;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${color}`}
                >
                  {initials}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">{name}</h3>
                  <p className="mt-0.5 text-xs text-slate-500">{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
