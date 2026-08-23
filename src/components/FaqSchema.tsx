import React from 'react';

interface Faq {
  question: string;
  answer: string;
}

interface Props {
  /** Unique id so multiple schema blocks never collide on one page. */
  id: string;
  faqs: Faq[];
}

/**
 * Emits FAQPage structured data so Google can show the questions as a
 * rich result under the listing.
 */
export function FaqSchema({ id, faqs }: Props) {
  if (faqs.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // A plain <script> tag, not next/script: only this renders into the static
  // HTML, which is where crawlers reliably read structured data.
  return (
    <script
      id={`faq-schema-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
