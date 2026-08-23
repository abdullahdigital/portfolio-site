import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | AbdullahDigital",
  description:
    "Privacy information for AbdullahDigital, including how contact and project inquiries are handled.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-2xl border border-emerald-500/25 bg-slate-900 p-8 shadow-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Privacy</p>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>
        <p className="mt-6 text-lg text-slate-300">
          AbdullahDigital respects privacy and handles contact and project inquiries with care. Information submitted through this website, such as email addresses and project details, is used only to respond to requests, evaluate opportunities, and manage communications.
        </p>
        <p className="mt-4 text-lg text-slate-300">
          We do not sell personal information. Any project details shared by clients are only used for the stated purpose of providing services or discussing a potential engagement. Contact information may be used to follow up about work requests, proposals, consultations, or related business conversations.
        </p>
        <p className="mt-4 text-lg text-slate-300">
          This website may use analytics and performance tools to understand traffic and improve the quality of the user experience. If you have questions about privacy, use the contact page or email abdullahwebhero@gmail.com.
        </p>
      </div>
    </main>
  );
}
