import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | AbdullahDigital",
  description:
    "Contact AbdullahDigital for web development, cybersecurity, AI automation, and product engineering services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-2xl border border-emerald-500/25 bg-slate-900 p-8 shadow-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Contact</p>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Contact AbdullahDigital</h1>
        <p className="mt-6 text-lg text-slate-300">
          AbdullahDigital helps businesses, founders, and teams build web products, AI workflows, and secure digital systems that are fast, reliable, and production-ready.
        </p>
        <p className="mt-4 text-lg text-slate-300">
          Email: <a href="mailto:abdullahwebhero@gmail.com" className="text-emerald-400 underline">abdullahwebhero@gmail.com</a>
        </p>
        <p className="mt-2 text-lg text-slate-300">
          Location: Rawalpindi, Punjab, Pakistan
        </p>
        <p className="mt-6 text-base text-slate-300">
          Use this page to request a quote, inquire about services, or begin a project involving AI automation, cybersecurity, custom web development, and digital transformation.
        </p>
      </div>
    </main>
  );
}
