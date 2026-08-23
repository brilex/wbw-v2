import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getIndustryBySlug, industries } from '@/src/data/industries';
import { IndustryDetail } from '@/src/views/IndustryDetail';

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  const url = `https://www.webuildsites.net/industries/${slug}`;
  return {
    title: industry.title,
    description: industry.description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        bs: `https://www.webuildsites.net/bs/industrije/${slug}`,
      },
    },
    openGraph: {
      title: `${industry.title} | WBW`,
      description: industry.description,
      url,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryDetail slug={slug} />;
}
