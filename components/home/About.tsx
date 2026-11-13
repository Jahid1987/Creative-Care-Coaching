import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "অভিজ্ঞ ও সহায়তাপ্রবণ শিক্ষক",
  "শিক্ষার্থীকেন্দ্রিক শিক্ষার পরিবেশ",
  "নিয়মিত অগ্রগতি পর্যবেক্ষণ ও দিকনির্দেশনা",
];

export default function About() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
            আমাদের সম্পর্কে
          </p>

          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            ক্রিয়েটিভ কেয়ার কোচিং সম্পর্কে
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            ক্রিয়েটিভ কেয়ার কোচিং শিক্ষার্থীদের শক্তিশালী একাডেমিক ভিত্তি গড়ে
            তুলতে এবং আত্মবিশ্বাসের সঙ্গে নিজেদের লক্ষ্য অর্জনে সহায়তা করতে
            নিবেদিত। আমরা প্রতিটি শিক্ষার্থীর জন্য মানসম্মত পাঠদান, ব্যক্তিগত
            দিকনির্দেশনা এবং যত্নশীল শিক্ষার পরিবেশ নিশ্চিত করি।
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm font-medium text-slate-700"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#20a56b]"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <Button className="mt-8 h-11 rounded-md bg-[#145b86] px-5 font-semibold text-white hover:bg-[#0f4668]">
            <Link href="/about">আরও জানুন</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative aspect-4/5 overflow-hidden rounded-lg">
            <Image
              src="/hero.jpeg"
              alt="ক্রিয়েটিভ কেয়ার কোচিংয়ে শিক্ষার্থীদের শেখার দৃশ্য"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 45vw, 25vw"
            />
          </div>

          <div className="space-y-3 pt-8 sm:space-y-4 sm:pt-12">
            <div className="relative aspect-4/3 overflow-hidden rounded-lg">
              <Image
                src="/hero.jpeg"
                alt="শিক্ষার্থীরা একাডেমিক দিকনির্দেশনা গ্রহণ করছে"
                fill
                className="object-cover object-right"
                sizes="(max-width: 640px) 45vw, 25vw"
              />
            </div>

            <div className="rounded-lg bg-[#e8f3fb] p-5 sm:p-6">
              <p className="text-3xl font-bold text-[#145b86]">১০+</p>
              <p className="mt-1 text-sm font-medium leading-5 text-slate-700">
                বছরের পাঠদানের অভিজ্ঞতা
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
