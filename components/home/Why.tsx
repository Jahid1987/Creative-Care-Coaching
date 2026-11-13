import {
  BookOpenCheck,
  GraduationCap,
  Lightbulb,
  UsersRound,
} from "lucide-react";

const reasons = [
  {
    title: "আধুনিক শিক্ষাদান পদ্ধতি",
    description:
      "অভিজ্ঞ শিক্ষকদের কাছ থেকে শিখুন, যারা প্রতিটি পাঠকে সহজবোধ্য, ব্যবহারিক ও আকর্ষণীয় করে তোলেন।",
    icon: UsersRound,
    iconClass: "bg-[#e8f3fb] text-[#145b86]",
  },
  {
    title: "অনুপ্রেরণাদায়ক পরীক্ষা",
    description:
      "নিয়মিত অনুশীলন, সহায়ক মতামত এবং অর্থবহ অগ্রগতির মাধ্যমে আত্মবিশ্বাস গড়ে তুলুন।",
    icon: BookOpenCheck,
    iconClass: "bg-[#e9f8ef] text-[#20a56b]",
  },
  {
    title: "সংক্ষিপ্ত শিক্ষাসামগ্রী",
    description:
      "এমন লক্ষ্যভিত্তিক পড়াশোনার উপকরণ পান, যা পুনরাবৃত্তি সহজ করে এবং দ্রুত শিখতে সহায়তা করে।",
    icon: Lightbulb,
    iconClass: "bg-[#fff1e2] text-[#e89025]",
  },
  {
    title: "অনুপ্রেরণামূলক গল্প",
    description:
      "শিক্ষার্থীদের বাস্তব অভিজ্ঞতা, অর্জন এবং সাফল্যের গল্পের মাধ্যমে অনুপ্রাণিত থাকুন।",
    icon: GraduationCap,
    iconClass: "bg-[#e9f1fb] text-[#3c78b4]",
  },
];

export default function Why() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
            কেন আমাদের বেছে নেবেন
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            শিক্ষার্থীরা কেন CCC বেছে নেয়
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            আমরা এমন একটি সহায়ক শিক্ষার অভিজ্ঞতা তৈরি করি, যা প্রতিটি
            শিক্ষার্থীকে আত্মবিশ্বাসের সঙ্গে এগিয়ে যেতে এবং আরও ভালো ফলাফল
            অর্জন করতে সহায়তা করে।
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ title, description, icon: Icon, iconClass }) => (
            <div
              key={title}
              className="flex min-h-64 flex-col items-center rounded-lg border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${iconClass}`}
              >
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-base font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
