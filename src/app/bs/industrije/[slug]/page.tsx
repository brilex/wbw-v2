import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries } from '@/src/data/industries';
import { getIndustryBSBySlug } from '@/src/data/industries-bs';
import { IndustryDetailBS } from '@/src/views/bs/IndustryDetailBS';

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bsIndustry = getIndustryBSBySlug(slug);
  if (!bsIndustry) return {};
  const url = `https://www.webuildsites.net/bs/industrije/${slug}`;
  return {
    title: `${bsIndustry.title} Web Dizajn | WBW Agencija`,
    description: bsIndustry.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${bsIndustry.title} Web Dizajn | WBW Agencija`,
      description: bsIndustry.description,
      url,
    },
  };
}

export default async function IndustryDetailBSPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bsIndustry = getIndustryBSBySlug(slug);
  if (!bsIndustry) notFound();
  return <IndustryDetailBS slug={slug} />;
}
