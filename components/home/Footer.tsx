import Link from "next/link";
import { Globe2, Mail, MapPin, Phone, Video } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "আমাদের সম্পর্কে" },
  { href: "/courses", label: "কোর্সসমূহ" },
  { href: "/teachers", label: "শিক্ষকবৃন্দ" },
  { href: "/results", label: "ফলাফল" },
];

const supportLinks = [
  { href: "/contact", label: "যোগাযোগ করুন" },
  { href: "/admission", label: "ভর্তি সংক্রান্ত দিকনির্দেশনা" },
  { href: "/faq", label: "সাধারণ জিজ্ঞাসা" },
  { href: "/privacy", label: "গোপনীয়তা নীতি" },
];

export default function Footer() {
  return (
    <footer className="bg-[#083e5f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-10 lg:py-16">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <span
              aria-hidden="true"
              className="grid h-8 w-8 grid-cols-2 gap-0.5 rounded-md bg-white p-1"
            >
              <span className="rounded-sm bg-blue-500" />
              <span className="rounded-sm bg-orange-400" />
              <span className="rounded-sm bg-emerald-500" />
              <span className="rounded-sm bg-sky-300" />
            </span>
            CCC
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100">
            শিক্ষার্থীদের শক্তিশালী ভিত্তি গড়ে তুলতে, আত্মবিশ্বাসের সঙ্গে বেড়ে
            উঠতে এবং বড় লক্ষ্য অর্জনে সহায়তা করছি।
          </p>

          <div className="mt-6 flex items-center gap-2">
            {[Globe2, Video].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                aria-label={`সামাজিক যোগাযোগমাধ্যম ${index + 1}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-blue-100 transition-colors hover:bg-[#f2a52d] hover:text-white"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold">দ্রুত লিংক</h2>
          <nav className="mt-5 flex flex-col gap-3">
            {quickLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-blue-100 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold">সহায়তা</h2>
          <nav className="mt-5 flex flex-col gap-3">
            {supportLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-blue-100 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold">যোগাযোগের তথ্য</h2>

          <div className="mt-5 space-y-4">
            <div className="flex items-start gap-3 text-sm text-blue-100">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#9ee5bd]" />
              <span>ঢাকা, বাংলাদেশ</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-blue-100">
              <Phone className="h-4 w-4 shrink-0 text-[#9ee5bd]" />
              <span>+880 1700-000000</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-blue-100">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#9ee5bd]" />
              <span className="break-all">hello@creativecare.edu</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-center text-xs text-blue-200 sm:px-8 md:flex-row md:items-center md:justify-between md:text-left lg:px-10">
          <p>
            © {new Date().getFullYear()} ক্রিয়েটিভ কেয়ার কোচিং। সর্বস্বত্ব
            সংরক্ষিত।
          </p>
          <p>শিখুন। বেড়ে উঠুন। সফল হোন।</p>
        </div>
      </div>
    </footer>
  );
}
