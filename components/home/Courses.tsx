import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "৬ষ্ঠ শ্রেণি থেকে এইচএসসি",
    description:
      "পরিকল্পিত পাঠ ও নিয়মিত দিকনির্দেশনার মাধ্যমে শক্তিশালী একাডেমিক ভিত্তি গড়ে তুলুন।",
    image: "/hero.jpeg",
    tags: ["স্কুল", "এসএসসি", "এইচএসসি"],
  },
  {
    title: "একাডেমিক উৎকর্ষ",
    description:
      "বিষয়ভিত্তিক জ্ঞান, আত্মবিশ্বাস এবং গুরুত্বপূর্ণ পরীক্ষার প্রস্তুতি আরও উন্নত করুন।",
    image: "/hero.jpeg",
    tags: ["ইংরেজি", "গণিত", "বিজ্ঞান"],
  },
  {
    title: "ভর্তি পরীক্ষার প্রস্তুতি",
    description:
      "প্রতিযোগিতামূলক ভর্তি পরীক্ষার জন্য লক্ষ্যভিত্তিক সহায়তা ও কার্যকর কৌশল পান।",
    image: "/hero.jpeg",
    tags: ["ভর্তি", "মেন্টরিং"],
  },
];

export default function Courses() {
  return (
    <section className="bg-[#f5faff] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
              আমাদের প্রোগ্রামসমূহ
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              আমাদের কোর্সগুলো দেখুন
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              শিক্ষার্থীদের আত্মবিশ্বাসের সঙ্গে শিখতে এবং একাডেমিক লক্ষ্য অর্জনে
              সহায়তা করার জন্য যত্নসহকারে তৈরি কোর্সসমূহ।
            </p>
          </div>

          <Button
            variant="outline"
            className="w-fit border-[#145b86] text-[#145b86] hover:bg-[#145b86] hover:text-white"
          >
            <Link href="/courses">সব কোর্স দেখুন</Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-[#e8f3fb] px-2 py-1 text-[10px] font-semibold text-[#145b86]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {course.description}
                </p>

                <Button className="mt-5 h-10 w-full rounded-md bg-[#145b86] font-semibold text-white hover:bg-[#0f4668]">
                  <Link href="/contact">এখনই যোগাযোগ করুন</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
