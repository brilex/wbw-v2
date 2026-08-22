import {
  CodeIcon,
  PaletteIcon,
  ShoppingCartIcon,
  SearchIcon,
  SettingsIcon,
  LayersIcon,
  ZapIcon,
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
  title: 'Web Development & High-Performance Website Design',
  tagline: 'An SEO friendly web design company for custom websites and web applications',
  description:
  'Custom websites and web applications built with React, TypeScript, and modern frameworks. As an SEO friendly web design company, we optimize every build for performance, scalability, and user experience from day one.',
  longDescription:
  'We build production-grade websites and web applications using the latest technologies — full CMS website development services or custom-coded apps, depending on what you need. From marketing sites to complex SaaS platforms, our high-performance website design is fast, accessible, and built to scale with your business.',
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
  title: 'Custom WordPress Development & Redesign',
  tagline: 'Tailored WordPress solutions and website redesign services',
  description:
  'Tailored WordPress solutions with custom themes, plugins, and integrations — plus WordPress website redesign services for sites that have outgrown their template. Perfect for content-driven sites that need flexibility and ease of management.',
  longDescription:
  'We build custom WordPress experiences from the ground up — no bloated themes, no plugin chaos. Just clean, fast, secure WordPress sites your team will actually love managing. As a website redesign expert, we also rebuild existing WordPress sites that have become slow, outdated, or hard to maintain, preserving your content and SEO equity while modernizing everything else.',
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
    title: 'Headless WordPress website design agency',
    description:
    'Use WordPress as a CMS with a modern React/Next.js frontend for the best of both worlds — the editing experience your team knows, with the speed of a decoupled frontend.'
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
    question: 'Do you offer WordPress website redesign services?',
    answer:
    "Yes. If your current WordPress site is slow, outdated, or hard to update, we rebuild it with a custom theme while preserving your content, URLs, and search rankings. We audit what's underperforming first, then redesign around it."
  },
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
    question: 'Do you offer local SEO services?',
    answer:
    "Yes — local SEO is often the fastest win for service businesses. We optimize your Google Business Profile, build location-specific content, and fix the technical issues that keep you out of local map results."
  },
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

},
{
  slug: 'csr-to-ssr-migration',
  icon: ZapIcon,
  title: 'CSR to SSR / SSG Migration',
  tagline: 'Faster, SEO-ready React apps',
  description:
    'Convert your slow, invisible Vite or Create React App site into a fully server-rendered or statically generated Next.js app — without rebuilding from scratch.',
  longDescription:
    'Most React apps built with Vite or Create React App are Client-Side Rendered (CSR). That means the browser downloads a blank HTML file, then waits for JavaScript to load before showing any content. Search engines struggle to index them, users on slow connections see nothing for seconds, and Lighthouse scores suffer. We migrate your existing CSR project to Next.js with SSR or SSG — preserving all your components, logic, and design while unlocking the performance and SEO your site deserves.',
  features: [
    {
      title: 'The problem with CSR',
      description:
        'With CSR, Google and other crawlers often see an empty page. Your content lives inside JavaScript bundles that load after the initial request — making it invisible to search engines and slow for real users.',
    },
    {
      title: 'SSG: best for most sites',
      description:
        'Static Site Generation pre-renders every page at build time. Pages are served as pure HTML — instant load, fully indexable, and cacheable on a global CDN. Perfect for marketing sites, portfolios, and content-heavy pages.',
    },
    {
      title: 'SSR: best for dynamic content',
      description:
        'Server-Side Rendering generates pages on the server for every request. Ideal for dashboards, user-specific content, or data that changes frequently — while still delivering fully rendered HTML to crawlers.',
    },
    {
      title: 'Hybrid: best of both worlds',
      description:
        'Next.js lets you mix SSG and SSR on a per-page basis. Static where it makes sense, dynamic where it has to be — without any compromise.',
    },
  ],
  deliverables: [
    'Full Next.js App Router migration',
    'SSG / SSR strategy per route',
    'SEO metadata & canonical tags',
    'Sitemap & robots.txt',
    'Core Web Vitals optimisation',
    'Vercel deployment setup',
    'Before/after Lighthouse report',
  ],
  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Vercel',
    'Lighthouse',
  ],
  faqs: [
    {
      question: 'Will my existing components still work?',
      answer:
        'In most cases yes. React components migrate cleanly to Next.js. Interactive components simply get a "use client" directive — no rewrite needed.',
    },
    {
      question: 'How long does a migration take?',
      answer:
        'A typical Vite or CRA site with 5–15 routes takes 1–2 weeks. Larger apps with complex state management or routing take 3–4 weeks.',
    },
    {
      question: 'What performance gains can I expect?',
      answer:
        'Most sites see Lighthouse scores jump from 40–60 to 95–100 after migration. Time to First Byte drops dramatically and Google can finally index your content.',
    },
    {
      question: 'Do you handle deployment as well?',
      answer:
        'Yes — we set up your Vercel project, configure environment variables, and make sure CI/CD is running before we hand over.',
    },
  ],
},
];


export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}