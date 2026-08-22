import { MetadataRoute } from 'next';
import { services } from '@/src/data/services';
import { industries } from '@/src/data/industries';
import { getAllPosts } from '@/src/lib/blog';
import { getAllPostsBS } from '@/src/lib/blog-bs';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.webuildsites.net';

  const staticRoutes = [
    { url: base, priority: 1.0 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/blog`, priority: 0.9 },
    { url: `${base}/industries`, priority: 0.9 },
    { url: `${base}/work`, priority: 0.8 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/process`, priority: 0.7 },
    { url: `${base}/testimonials`, priority: 0.7 },
    { url: `${base}/contact`, priority: 0.8 },
    { url: `${base}/pricing`, priority: 0.9 },
    { url: `${base}/work/firme-ba`, priority: 0.8 },
    { url: `${base}/work/converttonext`, priority: 0.8 },
    { url: `${base}/work/hamada-co`, priority: 0.8 },
    { url: `${base}/work/neimax`, priority: 0.8 },
    { url: `${base}/work/multilab`, priority: 0.8 },
    { url: `${base}/work/wldm`, priority: 0.8 },
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

  const blogRoutes = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const bsStaticRoutes = [
    { url: `${base}/bs`, priority: 0.9 },
    { url: `${base}/bs/usluge`, priority: 0.9 },
    { url: `${base}/bs/industrije`, priority: 0.9 },
    { url: `${base}/bs/rad`, priority: 0.8 },
    { url: `${base}/bs/o-nama`, priority: 0.8 },
    { url: `${base}/bs/proces`, priority: 0.7 },
    { url: `${base}/bs/recenzije`, priority: 0.7 },
    { url: `${base}/bs/kontakt`, priority: 0.8 },
    { url: `${base}/bs/cijene`, priority: 0.9 },
    { url: `${base}/bs/blog`, priority: 0.9 },
    { url: `${base}/bs/izrada-web-stranica-sarajevo`, priority: 0.8 },
    { url: `${base}/bs/izrada-web-stranica-tuzla`, priority: 0.8 },
    { url: `${base}/bs/rad/hamada-co`, priority: 0.8 },
    { url: `${base}/bs/rad/converttonext`, priority: 0.8 },
    { url: `${base}/bs/rad/firme-ba`, priority: 0.8 },
    { url: `${base}/bs/rad/neimax`, priority: 0.8 },
    { url: `${base}/bs/rad/multilab`, priority: 0.8 },
    { url: `${base}/bs/rad/wldm`, priority: 0.8 },
  ].map((route) => ({
    ...route,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }));

  const bsServiceRoutes = services.map((s) => ({
    url: `${base}/bs/usluge/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const bsIndustryRoutes = industries.map((i) => ({
    url: `${base}/bs/industrije/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const bsBlogRoutes = getAllPostsBS().map((p) => ({
    url: `${base}/bs/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...bsStaticRoutes,
    ...bsServiceRoutes,
    ...bsIndustryRoutes,
    ...bsBlogRoutes,
  ];
}
