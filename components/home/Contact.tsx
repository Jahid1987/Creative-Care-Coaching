import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: Phone,
    label: "ফোন করুন",
    value: "+880 1700-000000",
  },
  {
    icon: Mail,
    label: "ইমেইল করুন",
    value: "hello@creativecare.edu",
  },
  {
    icon: MapPin,
    label: "আমাদের ঠিকানায় আসুন",
    value: "ঢাকা, বাংলাদেশ",
  },
  {
    icon: Clock3,
    label: "অফিস সময়",
    value: "শনি - বৃহস্পতি, সকাল ৯:০০ - সন্ধ্যা ৭:০০",
  },
];

export default function Contact() {
  return (
    <section className="bg-[#f5faff] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#145b86]">
            যোগাযোগ করুন
          </p>

          <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            যোগাযোগ ও ভর্তি সংক্রান্ত দিকনির্দেশনা
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            আমাদের কোর্স বা ভর্তি প্রক্রিয়া সম্পর্কে কোনো প্রশ্ন আছে? আমাদের
            বার্তা পাঠান, আমাদের দল আপনাকে সঠিক পথ বেছে নিতে সহায়তা করবে।
          </p>

          <div className="mt-8 space-y-5">
            {contactDetails.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f3fb] text-[#145b86]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          action="#"
          method="post"
          className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-slate-800"
              >
                পুরো নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="আপনার নাম"
                className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-[#145b86] focus:ring-2 focus:ring-[#145b86]/20"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-slate-800"
              >
                ফোন নম্বর
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="আপনার ফোন নম্বর"
                className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-[#145b86] focus:ring-2 focus:ring-[#145b86]/20"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-800"
              >
                ইমেইল ঠিকানা
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-[#145b86] focus:ring-2 focus:ring-[#145b86]/20"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-slate-800"
              >
                আপনার বার্তা
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="আমরা কীভাবে সহায়তা করতে পারি তা জানান..."
                className="mt-2 w-full resize-y rounded-md border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition focus:border-[#145b86] focus:ring-2 focus:ring-[#145b86]/20"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="mt-6 h-11 w-full rounded-md bg-[#145b86] font-semibold text-white hover:bg-[#0f4668]"
          >
            বার্তা পাঠান
          </Button>

          <p className="mt-3 text-center text-xs text-slate-500">
            আমরা যত দ্রুত সম্ভব আপনার সঙ্গে যোগাযোগ করব।
          </p>
        </form>
      </div>
    </section>
  );
}
