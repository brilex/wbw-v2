import { MetadataRoute } from 'next';
import { services } from '@/src/data/services';
import { industries } from '@/src/data/industries';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://webuildsites.net';

  const staticRoutes = [
    { url: base, priority: 1.0 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/industries`, priority: 0.9 },
    { url: `${base}/work`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/process`, priority: 0.7 },
    { url: `${base}/testimonials`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.8 },
  ].map((route) => ({
    ...route,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes];
}
