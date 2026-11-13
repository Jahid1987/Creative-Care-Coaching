import { ArrowRight, BookOpen, UserRound } from "lucide-react";
import Link from "next/link";

const teachers = [
  {
    name: "Jaschar Name",
    role: "গণিত বিশেষজ্ঞ",
    subject: "গণিত",
    initials: "JN",
    color: "bg-[#e8f3fb] text-[#145b86]",
  },
  {
    name: "Jasmin Ahmed",
    role: "পদার্থবিজ্ঞানের প্রভাষক",
    subject: "পদার্থবিজ্ঞান",
    initials: "JA",
    color: "bg-[#e9f8ef] text-[#168354]",
  },
  {
    name: "Nadia Rahman",
    role: "ইংরেজি প্রশিক্ষক",
    subject: "ইংরেজি",
    initials: "NR",
    color: "bg-[#fff1e2] text-[#e89025]",
  },
];

export default function Teachers() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
              আমাদের দলের সঙ্গে পরিচিত হোন
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              বিশেষজ্ঞ শিক্ষকদের কাছ থেকে শিখুন
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              আমাদের নিবেদিত শিক্ষকরা প্রতিটি শ্রেণিকক্ষে অভিজ্ঞতা, যত্ন এবং
              ব্যবহারিক দিকনির্দেশনা নিয়ে আসেন।
            </p>
          </div>

          <Link
            href="/teachers"
            className="inline-flex w-fit items-center text-sm font-bold text-[#145b86] transition-colors hover:text-[#0f4668]"
          >
            সব শিক্ষকের সঙ্গে পরিচিত হোন
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {teachers.map(({ name, role, subject, initials, color }) => (
            <article
              key={name}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-bold ${color}`}
                >
                  {initials}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">{name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{role}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
                <BookOpen
                  className="h-4 w-4 text-[#145b86]"
                  aria-hidden="true"
                />
                <span>{subject}</span>
              </div>

              <Link
                href="/teachers"
                className="mt-4 inline-flex items-center text-xs font-semibold text-[#145b86] hover:underline"
              >
                প্রোফাইল দেখুন
                <UserRound className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
