import {
  CodeIcon,
  PaletteIcon,
  ShoppingCartIcon,
  SearchIcon,
  SettingsIcon,
  LayersIcon,
  ZapIcon,
  PuzzleIcon,
  LayoutGridIcon,
  GlobeIcon,
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
  title: 'SEO Optimization & WordPress SEO Services',
  tagline: 'Get found by the right people',
  description:
  'Improve your search rankings and organic traffic. As a team that builds most sites on WordPress, our WordPress SEO services cover technical SEO, content optimization, and performance improvements built directly into the theme — not bolted on with plugins.',
  longDescription:
  'SEO is part technical, part content, part patience. We cover all three — fixing the technical foundations, optimizing your content, and giving you a roadmap for sustainable organic growth. Because most of our builds run on WordPress, our WordPress SEO services go deeper than a plugin checklist: clean theme code, proper schema markup, and Core Web Vitals handled at the template level.',
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
    question: 'What makes your WordPress SEO services different?',
    answer:
    "Most WordPress SEO work is plugin configuration on top of a template someone else built. Since we build the theme ourselves, we can fix SEO issues at the source — clean markup, proper heading structure, and fast load times — instead of patching around them with plugins."
  },
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
{
  slug: 'custom-plugin-development',
  icon: PuzzleIcon,
  title: 'Custom WordPress Plugin Development',
  tagline: 'When no existing plugin does what you need',
  description:
    'Bespoke WordPress plugins built from scratch — automation pipelines, API integrations, custom widgets, and admin tools designed around how your business actually works.',
  longDescription:
    "Most agencies solve every problem by installing another plugin. That works until it doesn't — until the plugin almost does what you need, or breaks on update, or slows your site to a crawl. We write custom plugins in PHP against the WordPress APIs, so the functionality fits your workflow exactly, stays maintainable, and doesn't drag along features you'll never use.",
  features: [
    {
      title: 'AI and API integrations',
      description:
        'We built a plugin that pulls RSS content, rewrites it through an AI model, and publishes on a schedule — handling rate limits, retries, and output cleanup automatically.',
    },
    {
      title: 'Custom admin interfaces',
      description:
        'Settings pages, editable prompts, and controls your team can actually use — so behaviour can change without touching code.',
    },
    {
      title: 'Bespoke widgets and blocks',
      description:
        'Live data widgets, Gutenberg blocks, and shortcodes built for your exact use case rather than bent out of a generic plugin.',
    },
    {
      title: 'Scheduled automation',
      description:
        'WP-Cron jobs that run reliably in the background — content pipelines, data syncs, and scheduled imports.',
    },
  ],
  deliverables: [
    'Custom plugin, versioned and documented',
    'Admin settings interface',
    'API integration and error handling',
    'Scheduled task (cron) configuration',
    'Installation and handover documentation',
    'Post-launch support window',
  ],
  technologies: ['PHP', 'WordPress Plugin API', 'WP-Cron', 'REST APIs', 'MySQL', 'JavaScript'],
  faqs: [
    {
      question: 'Why build a custom plugin instead of using an existing one?',
      answer:
        "When an off-the-shelf plugin covers your need, we'll tell you to use it — that's cheaper for you. Custom development makes sense when nothing does the job, when you'd need three plugins fighting each other, or when an existing one carries so much unused weight it hurts performance.",
    },
    {
      question: 'Can you integrate AI into a WordPress site?',
      answer:
        'Yes. We built a plugin that rewrites syndicated articles through an AI model into original, structured content — including handling API rate limits, model routing, and cleaning up the output before publishing. See the CryptoLeb case study for the full breakdown.',
    },
    {
      question: 'Will the plugin survive WordPress updates?',
      answer:
        'We build against documented WordPress APIs rather than hacking around internals, which is what keeps a plugin working across core updates. We also hand over the source so you are never locked to us.',
    },
    {
      question: 'Do we own the code?',
      answer:
        'Yes. You get the full source, documented, and it is yours to keep, modify, or hand to another developer.',
    },
  ],
},
{
  slug: 'directory-marketplace-development',
  icon: LayoutGridIcon,
  title: 'Business Directory & Marketplace Development',
  tagline: 'Platforms built to scale past launch day',
  description:
    'Directory and marketplace platforms with listing management, category and location search, reviews, and an architecture that stays fast as listings grow into the thousands.',
  longDescription:
    "A directory is not a brochure site with a list on it. It lives or dies on how fast people find what they're looking for and how complete the listings feel — and both get harder as the platform grows. We build directory platforms with the data structure and search architecture planned upfront, so adding thousands of listings doesn't mean a rebuild.",
  features: [
    {
      title: 'Structured listing management',
      description:
        'Category taxonomies, listing tiers, and profile fields modelled around your market from the start — not bolted on later.',
    },
    {
      title: 'Search and filtering that scales',
      description:
        'Fast filtering by category, location, and attributes that stays responsive as the listing count grows.',
    },
    {
      title: 'Geolocation and proximity search',
      description:
        'Location-aware results so visitors find what is genuinely near them, not just what was added most recently.',
    },
    {
      title: 'Reviews and community features',
      description:
        'User feedback and discussion built in — the trust signals that make people use a directory instead of just searching Google.',
    },
  ],
  deliverables: [
    'Custom directory platform',
    'Listing submission and management flow',
    'Category and location search',
    'Business profile pages',
    'Review and rating system',
    'Free and premium listing tiers',
    'SEO-ready listing URLs and metadata',
  ],
  technologies: ['WordPress', 'Custom PHP', 'MySQL', 'Geolocation APIs', 'Next.js'],
  faqs: [
    {
      question: 'Have you actually built a directory before?',
      answer:
        'Two. firme.ba is a nationwide business directory for Bosnia & Herzegovina with free and premium listing tiers, and United First is a Canada-wide directory spanning 25+ categories with geolocation search. Both case studies are on this site.',
    },
    {
      question: 'How do you handle a directory that starts out empty?',
      answer:
        'Structure and seeding matter more than features at launch. We plan the category model around a realistic first hundred listings, make submission frictionless, and build the SEO structure so individual listings can rank on their own.',
    },
    {
      question: 'Can it support paid listings?',
      answer:
        'Yes — tiered listings are a common model, and we build the free/premium distinction into the data model from the start rather than retrofitting it.',
    },
    {
      question: 'Will it stay fast with thousands of listings?',
      answer:
        'That is the main architectural question, and we plan for it upfront — indexed queries, sensible pagination, and caching. A directory that gets slow at scale usually was not designed as a directory.',
    },
  ],
},
{
  slug: 'multilingual-websites',
  icon: GlobeIcon,
  title: 'Multilingual & International Websites',
  tagline: 'One site, several markets, no compromises',
  description:
    'Multilingual websites built for businesses selling across borders — proper language switching, correct hreflang signals, and content structured so each market ranks on its own.',
  longDescription:
    'Running a site in several languages is mostly an SEO and content-architecture problem, not a translation problem. Get it wrong and your language versions compete with each other in search instead of each ranking in its own market. We build multilingual sites with the URL structure, hreflang signals, and editorial workflow planned from the start.',
  features: [
    {
      title: 'Correct hreflang and canonicals',
      description:
        'Search engines told explicitly which page serves which language and market, so versions reinforce each other instead of splitting rankings.',
    },
    {
      title: 'Clean URL structure per language',
      description:
        'Predictable, indexable URLs for every language — not query parameters or JavaScript-only switching that crawlers cannot follow.',
    },
    {
      title: 'Manageable editorial workflow',
      description:
        'Your team edits each language without fear of breaking the others, with a clear view of what is translated and what is not.',
    },
    {
      title: 'Market-specific content, not just translation',
      description:
        'Keyword research per language, because the phrase your customers search in German is rarely a direct translation of the English one.',
    },
  ],
  deliverables: [
    'Multilingual site architecture',
    'Language switcher and routing',
    'hreflang and canonical implementation',
    'Per-language SEO metadata',
    'Translation workflow setup',
    'Per-market keyword research',
  ],
  technologies: ['WordPress', 'WPML', 'Next.js', 'PHP', 'Schema.org'],
  faqs: [
    {
      question: 'Have you built a multilingual site before?',
      answer:
        'Yes — Neimax, a packaging manufacturer exporting to European partners, runs in Bosnian, English, and German on a custom WordPress theme with seamless language switching. We also built CryptoLeb for a specific regional market. Both case studies are on this site.',
    },
    {
      question: 'Will the language versions compete with each other in Google?',
      answer:
        'Not if hreflang is implemented correctly — that is the signal telling Google these are language variants of the same page rather than duplicates. Missing or wrong hreflang is the single most common reason multilingual sites underperform.',
    },
    {
      question: 'Do you provide the translations?',
      answer:
        'We build the structure and can work with your translator or translation service. For market-specific pages we also do keyword research per language, since a literal translation often misses what people actually search for.',
    },
    {
      question: 'Can we add a language later?',
      answer:
        'Yes, if the site is built for it from the start — which is exactly why the architecture decision matters early. Retrofitting multilingual support onto a single-language site is far more work than planning for it upfront.',
    },
  ],
},
];


export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}