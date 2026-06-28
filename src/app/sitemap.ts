import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abdullahdigital.vercel.app';

  // Define all your routes
  const routes = [
    '',
    '/projects',
    '/skills',
    '/industries',
    '/referral',
  ];

  // Generate sitemap entries
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
