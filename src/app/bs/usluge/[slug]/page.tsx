import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/src/data/services';
import { getServiceBSBySlug } from '@/src/data/services-bs';
import { ServiceDetailBS } from '@/src/views/bs/ServiceDetailBS';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bsService = getServiceBSBySlug(slug);
  if (!bsService) return {};
  const url = `https://www.webuildsites.net/bs/usluge/${slug}`;
  return {
    title: `${bsService.title} | WBW Agencija`,
    description: bsService.description,
    alternates: {
      canonical: url,
      languages: {
        en: `https://www.webuildsites.net/services/${slug}`,
        bs: url,
      },
    },
    openGraph: {
      title: `${bsService.title} | WBW Agencija`,
      description: bsService.description,
      url,
    },
  };
}

export default async function ServiceDetailBSPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bsService = getServiceBSBySlug(slug);
  if (!bsService) notFound();
  return <ServiceDetailBS slug={slug} />;
}
