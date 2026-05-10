import {
  CodeIcon,
  PaletteIcon,
  ShoppingCartIcon,
  SearchIcon,
  SettingsIcon,
  LayersIcon,
  type LucideIcon } from
'lucide-react';

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: {title: string;description: string;}[];
  deliverables: string[];
  technologies: string[];
  faqs: {question: string;answer: string;}[];
}

export const services: ServiceData[] = [
{
  slug: 'web-development',
  icon: CodeIcon,
  title: 'Web Development',
  tagline: 'Custom websites and web applications',
  description:
  'Custom websites and web applications built with React, TypeScript, and modern frameworks. Optimized for performance, scalability, and user experience.',
  longDescription:
  'We build production-grade websites and web applications using the latest technologies. From marketing sites to complex SaaS platforms, our development is fast, accessible, and built to scale with your business.',
  features: [
  {
    title: 'Modern stack',
    description:
    'React, TypeScript, Next.js, and Tailwind CSS — battle-tested tools that deliver speed and maintainability.'
  },
  {
    title: 'Performance-first',
    description:
    'Sub-second load times, perfect Lighthouse scores, and Core Web Vitals tuned for SEO.'
  },
  {
    title: 'Accessibility built-in',
    description:
    'WCAG 2.1 AA compliant by default. Every site is keyboard-navigable and screen-reader friendly.'
  },
  {
    title: 'API integrations',
    description:
    'Seamless connections to your CRM, payment processors, analytics, and any third-party service.'
  }],

  deliverables: [
  'Custom-coded responsive site',
  'CMS integration',
  'Analytics & tracking setup',
  'Performance optimization',
  'Documentation & training',
  '30 days post-launch support'],

  technologies: [
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Vercel',
  'Sanity'],

  faqs: [
  {
    question: 'How long does a typical project take?',
    answer:
    'Most marketing sites take 6–8 weeks. Complex web apps range from 12 to 20 weeks depending on scope.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
    'Yes — we offer monthly maintenance plans and dedicated support retainers after launch.'
  }]

},
{
  slug: 'wordpress-development',
  icon: LayersIcon,
  title: 'Custom WordPress Development',
  tagline: 'Tailored WordPress solutions',
  description:
  'Tailored WordPress solutions with custom themes, plugins, and integrations. Perfect for content-driven sites that need flexibility and ease of management.',
  longDescription:
  'We build custom WordPress experiences from the ground up — no bloated themes, no plugin chaos. Just clean, fast, secure WordPress sites your team will actually love managing.',
  features: [
  {
    title: 'Custom themes',
    description:
    'Hand-coded themes built to your exact specs — no page builders slowing you down.'
  },
  {
    title: 'Custom plugins',
    description:
    'Bespoke plugins for unique functionality, integrated cleanly with the WordPress ecosystem.'
  },
  {
    title: 'Headless WordPress',
    description:
    'Use WordPress as a CMS with a modern React/Next.js frontend for the best of both worlds.'
  },
  {
    title: 'Security hardening',
    description:
    'Server hardening, regular audits, and proactive monitoring to keep you safe.'
  }],

  deliverables: [
  'Custom WordPress theme',
  'Custom Gutenberg blocks',
  'Plugin configuration',
  'Editor training & docs',
  'Hosting setup recommendations',
  'Security & performance hardening'],

  technologies: [
  'WordPress',
  'PHP',
  'Gutenberg',
  'ACF',
  'WP-CLI',
  'Composer'],

  faqs: [
  {
    question: 'Can you migrate my existing WordPress site?',
    answer:
    'Absolutely. We handle full migrations including content, media, redirects, and SEO preservation.'
  },
  {
    question: 'Do you offer hosting?',
    answer:
    "We don't host directly, but we recommend and configure managed WordPress hosts like WP Engine and Kinsta."
  }]

},
{
  slug: 'ui-ux-design',
  icon: PaletteIcon,
  title: 'UI/UX Design',
  tagline: 'Beautiful, intuitive interfaces',
  description:
  'Beautiful, intuitive interfaces designed with your users in mind. We create experiences that delight and convert through thoughtful design and research.',
  longDescription:
  'Great design is invisible. Our UI/UX work blends user research, modern visual design, and rigorous testing to create products that feel effortless to use and unmistakably yours.',
  features: [
  {
    title: 'User research',
    description:
    'Interviews, surveys, and usability testing to ground decisions in real user behavior.'
  },
  {
    title: 'Information architecture',
    description:
    'Clear, scannable structures that help users find what they need without thinking.'
  },
  {
    title: 'Visual design systems',
    description:
    'Cohesive component libraries and design tokens that scale with your product.'
  },
  {
    title: 'Interactive prototypes',
    description:
    'High-fidelity Figma prototypes you can click through, test, and iterate on before code.'
  }],

  deliverables: [
  'User research report',
  'Wireframes & user flows',
  'High-fidelity mockups',
  'Interactive Figma prototype',
  'Design system & components',
  'Developer handoff documentation'],

  technologies: ['Figma', 'Framer', 'Maze', 'Notion', 'Hotjar'],
  faqs: [
  {
    question: 'Do you do design without development?',
    answer:
    'Yes — we frequently take on design-only engagements and hand off to your dev team.'
  },
  {
    question: 'How many revisions are included?',
    answer:
    'We work in iterative cycles with up to three rounds of revisions per phase, plus continuous async feedback.'
  }]

},
{
  slug: 'ecommerce-development',
  icon: ShoppingCartIcon,
  title: 'E-commerce Development',
  tagline: 'Shopping experiences that convert',
  description:
  'Complete e-commerce solutions that drive sales. From product catalogs to checkout flows, we build shopping experiences that convert visitors into customers.',
  longDescription:
  'We build high-converting online stores on Shopify, Hydrogen, and headless platforms. Beautiful product pages, frictionless checkout, and the technical foundations to grow.',
  features: [
  {
    title: 'Custom Shopify themes',
    description:
    'Hand-built Shopify themes optimized for conversion and your unique brand.'
  },
  {
    title: 'Headless commerce',
    description:
    'Shopify Hydrogen, Medusa, or BigCommerce — modern stacks for ambitious stores.'
  },
  {
    title: 'Conversion optimization',
    description:
    'A/B testing, checkout improvements, and analytics-driven iteration to lift sales.'
  },
  {
    title: 'Payment & fulfillment',
    description:
    'Stripe, PayPal, Apple Pay, plus shipping and fulfillment integrations.'
  }],

  deliverables: [
  'Custom storefront',
  'Product configurators',
  'Optimized checkout flow',
  'Payment & shipping setup',
  'Analytics & tracking',
  'Conversion-focused launch plan'],

  technologies: [
  'Shopify',
  'Hydrogen',
  'Stripe',
  'Klaviyo',
  'GA4',
  'Algolia'],

  faqs: [
  {
    question: 'Can you migrate from another platform?',
    answer:
    'Yes — we handle migrations from WooCommerce, Magento, BigCommerce, and other platforms with full data and SEO preservation.'
  },
  {
    question: 'Do you build custom checkout flows?',
    answer:
    'On Shopify Plus and headless setups, absolutely. We can fully customize checkout for max conversion.'
  }]

},
{
  slug: 'seo-optimization',
  icon: SearchIcon,
  title: 'SEO Optimization',
  tagline: 'Get found by the right people',
  description:
  'Improve your search rankings and organic traffic. We implement technical SEO, content optimization, and performance improvements to boost visibility.',
  longDescription:
  'SEO is part technical, part content, part patience. We cover all three — fixing the technical foundations, optimizing your content, and giving you a roadmap for sustainable organic growth.',
  features: [
  {
    title: 'Technical SEO audit',
    description:
    'Full audit of crawlability, indexing, schema, redirects, and Core Web Vitals.'
  },
  {
    title: 'On-page optimization',
    description:
    'Title tags, meta descriptions, headings, internal linking, and content structure.'
  },
  {
    title: 'Content strategy',
    description:
    'Keyword research and content roadmaps that target the right audience and intent.'
  },
  {
    title: 'Performance & Core Web Vitals',
    description:
    'Speed, mobile usability, and CLS fixes that move both users and rankings.'
  }],

  deliverables: [
  'Comprehensive SEO audit',
  'Keyword research report',
  'On-page optimization',
  'Schema markup implementation',
  'Sitemap & robots.txt',
  'Monthly performance reports'],

  technologies: [
  'Ahrefs',
  'Search Console',
  'GA4',
  'Screaming Frog',
  'Schema.org'],

  faqs: [
  {
    question: 'How long until I see results?',
    answer:
    'Technical wins can show in weeks. Sustainable ranking growth typically takes 3–6 months of consistent work.'
  },
  {
    question: 'Do you guarantee rankings?',
    answer:
    'No reputable agency does. We guarantee process, transparency, and measurable improvement to the metrics that matter.'
  }]

},
{
  slug: 'website-maintenance',
  icon: SettingsIcon,
  title: 'Website Maintenance',
  tagline: 'Ongoing care for your site',
  description:
  'Ongoing support and maintenance to keep your site running smoothly. Regular updates, security patches, performance monitoring, and content updates.',
  longDescription:
  'Websites need ongoing care. Our maintenance plans keep your site secure, fast, and up-to-date so you can focus on running your business — not patching your CMS.',
  features: [
  {
    title: 'Security & updates',
    description:
    'Plugin, theme, and core updates applied carefully on a schedule, with rollback safety nets.'
  },
  {
    title: 'Performance monitoring',
    description:
    'Real-time uptime monitoring and monthly performance reports to catch issues early.'
  },
  {
    title: 'Content updates',
    description:
    'A bank of monthly hours for content, copy, and small design tweaks — no per-task pricing surprises.'
  },
  {
    title: 'Backups & recovery',
    description:
    'Daily backups stored offsite, with one-click restore if anything goes wrong.'
  }],

  deliverables: [
  'Monthly maintenance hours',
  '24/7 uptime monitoring',
  'Daily offsite backups',
  'Security patching',
  'Performance reports',
  'Priority support response'],

  technologies: [
  'New Relic',
  'Sentry',
  'Cloudflare',
  'BackupBuddy',
  'WP Engine'],

  faqs: [
  {
    question: 'What if I have an emergency outside business hours?',
    answer:
    'Maintenance plans include emergency response. Critical issues get attention 24/7 with same-day resolution targets.'
  },
  {
    question: 'Can I cancel anytime?',
    answer:
    'Yes — all maintenance plans are month-to-month with no long-term commitment.'
  }]

}];


export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}