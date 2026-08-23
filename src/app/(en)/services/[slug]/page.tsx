import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/src/data/services';
import { ServiceDetail } from '@/src/views/ServiceDetail';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `https://www.webuildsites.net/services/${slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        bs: `https://www.webuildsites.net/bs/usluge/${slug}`,
      },
    },
    openGraph: {
      title: `${service.title} | WBW`,
      description: service.description,
      url,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetail slug={slug} />;
}
