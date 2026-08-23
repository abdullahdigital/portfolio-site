import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-24">
        <div className="text-center max-w-3xl">
          <div className="text-9xl md:text-[12rem] font-black text-emerald-500 mb-4">404</div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            The page you requested does not exist on AbdullahDigital. Use the links below to continue exploring the portfolio, services, and AI resources.
          </p>

          <article className="rounded-2xl border border-emerald-500/30 bg-slate-900/80 p-6 text-left text-sm text-slate-200 shadow-2xl mx-auto max-w-xl mb-8">
            <p className="mb-3 text-emerald-300 font-semibold">Quick recovery guide for agents and crawlers</p>
            <pre className="whitespace-pre-wrap font-mono text-xs leading-6 text-slate-200">
# AbdullahDigital

- Home: https://abdullahdigital.vercel.app/
- Services: https://abdullahdigital.vercel.app/services
- Projects: https://abdullahdigital.vercel.app/projects
- About: https://abdullahdigital.vercel.app/about
- Contact: https://abdullahdigital.vercel.app/contact
- Privacy: https://abdullahdigital.vercel.app/privacy
- Sitemap: https://abdullahdigital.vercel.app/sitemap.xml
- llms.txt: https://abdullahdigital.vercel.app/llms.txt
            </pre>
          </article>

          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <FaHome aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}