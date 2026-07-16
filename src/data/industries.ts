import {
  RefreshCwIcon,
  CarIcon,
  Building2Icon,
  HardHatIcon,
  PackageIcon,
  ShoppingCartIcon,
  GraduationCapIcon,
  ZapIcon,
  LandmarkIcon,
  HeartPulseIcon,
  ScaleIcon,
  FactoryIcon,
  UtensilsIcon,
  HomeIcon,
  CpuIcon,
  TrophyIcon,
  type LucideIcon } from
'lucide-react';

export interface IndustryData {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  challenges: string[];
  capabilities: {title: string;description: string;}[];
  stats: {value: string;label: string;}[];
}

export const industries: IndustryData[] = [
{
  slug: 'before-after-redesigns',
  icon: RefreshCwIcon,
  title: 'Before & After Web Redesigns',
  tagline: 'Transformations worth showing off',
  description:
  'See how we turn dated, underperforming sites into modern, conversion-focused experiences.',
  longDescription:
  "A redesign is more than a fresh coat of paint — it's an opportunity to rethink how your site works for your business. We pair strategy, design, and engineering to deliver redesigns that move the metrics that matter.",
  challenges: [
  'Outdated visual identity that no longer matches the brand',
  'Slow load times damaging SEO and user experience',
  'Confusing information architecture and weak conversion paths',
  "Legacy CMS that's painful for the marketing team to use"],

  capabilities: [
  {
    title: 'Audit & strategy',
    description:
    'Heuristic review, analytics analysis, and stakeholder interviews to ground the redesign in real data.'
  },
  {
    title: 'Modern visual identity',
    description:
    'Design refreshes that feel current without losing the equity of your existing brand.'
  },
  {
    title: 'Conversion optimization',
    description:
    'Restructured user flows and CTAs that turn more visitors into customers.'
  },
  {
    title: 'Seamless migration',
    description:
    'Content, SEO, and redirect strategy that protects existing rankings during the transition.'
  }],

  stats: [
  { value: '+220%', label: 'Avg. conversion lift' },
  { value: '3.2x', label: 'Faster load times' },
  { value: '0', label: 'SEO rankings lost' }]

},
{
  slug: 'automotive-transportation',
  icon: CarIcon,
  title: 'Automotive & Transportation Web Design',
  tagline: 'Sites that move metal',
  description:
  'High-performance websites for dealerships, OEMs, fleet operators, and transportation companies.',
  longDescription:
  'From dealership inventory to fleet logistics platforms, we build sites that handle complex data, integrate with industry tools, and convert browsers into buyers.',
  challenges: [
  'Real-time inventory feeds and VIN-level detail pages',
  'Multi-location dealer networks with consistent branding',
  'Integration with DMS, CRM, and finance applications',
  'High-quality vehicle imagery and 360° tours at scale'],

  capabilities: [
  {
    title: 'Inventory integrations',
    description:
    'Live feeds from DMS, vAuto, HomeNet, and major auto data providers.'
  },
  {
    title: 'Lead capture & finance tools',
    description:
    'Trade-in calculators, financing apps, and test drive scheduling that drive showroom visits.'
  },
  {
    title: 'Multi-location architecture',
    description:
    'Scalable templates for dealer groups with location-specific content and SEO.'
  },
  {
    title: 'Performance at scale',
    description:
    'Fast image delivery and server-side rendering for inventories with thousands of vehicles.'
  }],

  stats: [
  { value: '+185%', label: 'Lead form fills' },
  { value: '<1s', label: 'Page load time' },
  { value: '10+', label: 'Dealer sites built' }]

},
{
  slug: 'corporate',
  icon: Building2Icon,
  title: 'Corporate Web Design',
  tagline: 'Polished sites for serious businesses',
  description:
  'Premium corporate websites that build trust, communicate clearly, and represent your brand at the highest level.',
  longDescription:
  'Your corporate site is the front door to your business. We design and build sites that reflect the calibre of your organization — sophisticated, trustworthy, and a pleasure to use.',
  challenges: [
  'Communicating complex services and value propositions clearly',
  'Maintaining brand consistency across global teams and regions',
  'Investor relations, ESG, and compliance content management',
  'Multi-language and multi-region content strategies'],

  capabilities: [
  {
    title: 'Brand-led design',
    description:
    'Visual systems that align with corporate identity and translate beautifully to digital.'
  },
  {
    title: 'Global content management',
    description:
    'Multi-region, multi-language CMS architectures that scale with your business.'
  },
  {
    title: 'Investor & IR sections',
    description:
    'Secure, compliant pages for investor communications, reports, and announcements.'
  },
  {
    title: 'Enterprise integrations',
    description:
    'Seamless connections to Salesforce, Marketo, HubSpot, and other enterprise tools.'
  }],

  stats: [
  { value: '40+', label: 'Enterprise clients' },
  { value: '15', label: 'Languages supported' },
  { value: '99.9%', label: 'Uptime SLA' }]

},
{
  slug: 'construction',
  icon: HardHatIcon,
  title: 'Construction Web Design',
  tagline: 'Build trust before you break ground',
  description:
  'Project-driven websites for general contractors, subs, and construction firms that win more bids.',
  longDescription:
  'Your portfolio is your proof. We build construction sites that showcase past work powerfully, simplify project inquiries, and help you win the kind of work you actually want.',
  challenges: [
  'Showcasing past projects with rich imagery and case studies',
  'Capturing qualified RFP and project inquiry leads',
  'Hiring and recruitment pages that attract skilled trades',
  'Safety credentials, certifications, and capability statements'],

  capabilities: [
  {
    title: 'Project portfolios',
    description:
    'Filterable, image-rich project showcases with detailed case studies and metrics.'
  },
  {
    title: 'Lead qualification forms',
    description:
    'Smart forms that capture project scope, budget, and timeline upfront.'
  },
  {
    title: 'Careers & recruitment',
    description:
    'Job listings, application flows, and culture pages that attract top talent.'
  },
  {
    title: 'Capability statements',
    description:
    'Polished credentials, certifications, and capability content for prequalifications.'
  }],

  stats: [
  { value: '+340%', label: 'RFP inquiries' },
  { value: '120+', label: 'Projects showcased' },
  { value: '4.2x', label: 'Career applications' }]

},
{
  slug: 'consumer-goods',
  icon: PackageIcon,
  title: 'Consumer Goods & Product Web Design',
  tagline: 'Where products become brands',
  description:
  'Websites for CPG brands that turn product features into stories and visitors into loyal customers.',
  longDescription:
  'Consumer goods sites need to do more than sell — they need to build brand affinity. We craft immersive product experiences that retailers respect and customers love.',
  challenges: [
  'Telling a brand story that stands out on crowded shelves',
  'Where-to-buy and retailer locator functionality',
  'Product detail pages with rich content and assets',
  'Connecting D2C and retail channels seamlessly'],

  capabilities: [
  {
    title: 'Brand storytelling',
    description:
    'Editorial-quality content that builds emotional connection with your products.'
  },
  {
    title: 'Where to buy',
    description:
    'Location-aware retailer finders with online and in-store availability.'
  },
  {
    title: 'Rich product pages',
    description:
    'Beautiful PDPs with imagery, specs, ingredients, certifications, and reviews.'
  },
  {
    title: 'D2C integration',
    description:
    'Connect Shopify or other commerce platforms without compromising brand experience.'
  }],

  stats: [
  { value: '+92%', label: 'Brand engagement' },
  { value: '2.4x', label: 'Where-to-buy clicks' },
  { value: '50+', label: 'SKU pages built' }]

},
{
  slug: 'ecommerce',
  icon: ShoppingCartIcon,
  title: 'eCommerce Website Design Services',
  tagline: 'Storefronts engineered to convert',
  description:
  'High-performance eCommerce sites on Shopify, Hydrogen, and headless platforms.',
  longDescription:
  'We build online stores that load fast, look stunning, and convert visitors at industry-leading rates. From boutique brands to high-volume retailers, our eCommerce work moves the needle.',
  challenges: [
  'Custom checkout experiences that maximize conversion',
  'Product configurators and customization tools',
  'Subscription, bundle, and upsell mechanics',
  'Performance under high traffic and inventory loads'],

  capabilities: [
  {
    title: 'Custom Shopify themes',
    description:
    'Hand-coded themes optimized for speed, SEO, and conversion — no bloated builders.'
  },
  {
    title: 'Headless architecture',
    description:
    'Shopify Hydrogen and headless setups for the fastest, most flexible storefronts.'
  },
  {
    title: 'Conversion optimization',
    description:
    'A/B testing, checkout improvements, and analytics-driven iteration.'
  },
  {
    title: 'Subscriptions & loyalty',
    description:
    'Recharge, Yotpo, Klaviyo integrations to build recurring revenue and brand love.'
  }],

  stats: [
  { value: '+312%', label: 'Conversion lift' },
  { value: '98/100', label: 'PageSpeed score' },
  { value: '$50M+', label: 'GMV powered' }]

},
{
  slug: 'education',
  icon: GraduationCapIcon,
  title: 'Education & University Web Design',
  tagline: 'Sites that recruit and inspire',
  description:
  'Modern websites for universities, K-12 schools, and online learning platforms.',
  longDescription:
  'Education websites serve everyone from prospective students to current parents to faculty. We design accessible, content-rich sites that help institutions thrive in a competitive landscape.',
  challenges: [
  'Serving multiple audiences (prospects, students, parents, faculty)',
  'Massive content libraries and program directories',
  'Accessibility compliance (WCAG, Section 508)',
  'Application and admissions flow optimization'],

  capabilities: [
  {
    title: 'Audience-first IA',
    description:
    'Information architecture that lets each audience find what they need quickly.'
  },
  {
    title: 'Program directories',
    description:
    'Filterable, searchable program and course catalogs with rich detail pages.'
  },
  {
    title: 'Accessibility excellence',
    description:
    'WCAG 2.1 AA compliance built in from day one, not bolted on later.'
  },
  {
    title: 'Admissions journeys',
    description:
    'Streamlined application flows and prospect nurturing experiences.'
  }],

  stats: [
  { value: '+58%', label: 'Application starts' },
  { value: '97/100', label: 'Avg. Lighthouse score' },
  { value: 'AA', label: 'WCAG compliance' }]

},
{
  slug: 'energy',
  icon: ZapIcon,
  title: 'Energy Web Design',
  tagline: 'Power your brand online',
  description:
  'Websites for energy companies, utilities, renewables, and clean tech innovators.',
  longDescription:
  'From utilities serving millions to clean tech startups changing the world, we build sites that explain complex offerings, support customers, and showcase impact.',
  challenges: [
  'Customer self-service portals (billing, outage maps, service requests)',
  'Sustainability reporting and ESG storytelling',
  'Rate plans, programs, and rebate explanations',
  'High traffic spikes during outages and events'],

  capabilities: [
  {
    title: 'Customer portals',
    description:
    'Secure self-service for billing, usage, outages, and service management.'
  },
  {
    title: 'Sustainability storytelling',
    description:
    'Visual, data-driven content that communicates ESG impact and progress.'
  },
  {
    title: 'Program & rebate pages',
    description:
    'Clear explanations of rate plans, incentives, and customer programs.'
  },
  {
    title: 'High-availability infrastructure',
    description:
    'Architecture that handles traffic surges during outages or weather events.'
  }],

  stats: [
  { value: '98/100', label: 'Avg. Lighthouse score' },
  { value: '+143%', label: 'Organic traffic growth' },
  { value: '<1s', label: 'Page load time' }]

},
{
  slug: 'finance-banking',
  icon: LandmarkIcon,
  title: 'Finance & Banking Web Design',
  tagline: 'Trust by design',
  description:
  'Secure, compliant, conversion-focused websites for banks, fintech, and financial advisors.',
  longDescription:
  'Financial services demand a perfect balance of trust, clarity, and conversion. We build sites that meet rigorous compliance standards while still feeling modern and inviting.',
  challenges: [
  'Regulatory compliance (FINRA, SEC, ADA, GDPR)',
  'Complex product explanations (loans, accounts, investments)',
  'Secure customer portals and account opening flows',
  'Building trust with both retail and institutional audiences'],

  capabilities: [
  {
    title: 'Compliance-ready content',
    description:
    'Workflows and CMS structures designed for legal and compliance review cycles.'
  },
  {
    title: 'Account opening flows',
    description:
    'Frictionless KYC and onboarding flows that convert without sacrificing security.'
  },
  {
    title: 'Calculators & tools',
    description:
    'Mortgage, retirement, and financial planning calculators that engage visitors.'
  },
  {
    title: 'Enterprise security',
    description:
    'SOC 2 hosting, secure form handling, and pen-tested integrations.'
  }],

  stats: [
  { value: '+165%', label: 'Account opens' },
  { value: 'SOC 2', label: 'Compliance' },
  { value: '12+', label: 'FI clients' }]

},
{
  slug: 'healthcare-medical',
  icon: HeartPulseIcon,
  title: 'Healthcare & Medical Web Design',
  tagline: 'Care begins with clarity',
  description:
  'HIPAA-compliant websites for hospitals, practices, medical devices, and digital health.',
  longDescription:
  'Healthcare sites carry real responsibility — they help people find care, providers find patients, and information move where it matters. We build sites that meet the bar.',
  challenges: [
  'HIPAA compliance and PHI security',
  'Provider directories and appointment scheduling',
  'Multi-location practices and health systems',
  'Patient education content and health literacy'],

  capabilities: [
  {
    title: 'HIPAA-compliant infrastructure',
    description:
    'Secure hosting, BAAs, and architecture designed around PHI protection.'
  },
  {
    title: 'Provider & location finders',
    description:
    'Searchable directories with specialty, insurance, and availability filters.'
  },
  {
    title: 'Appointment booking',
    description:
    'Online scheduling integrated with EHRs and practice management systems.'
  },
  {
    title: 'Patient education',
    description:
    'Accessible, clear content that builds trust and supports informed decisions.'
  }],

  stats: [
  { value: '+124%', label: 'Online bookings' },
  { value: 'HIPAA', label: 'Compliant' },
  { value: '4.9★', label: 'Client satisfaction' }]

},
{
  slug: 'law-firm',
  icon: ScaleIcon,
  title: 'Law Firm Web Design',
  tagline: 'Authority, clarity, conversion',
  description:
  'Sophisticated websites for law firms, solo practices, and legal services.',
  longDescription:
  'Prospective clients judge law firms in seconds. We build websites that convey expertise and trust at first glance, then convert visitors into qualified consultations.',
  challenges: [
  'Communicating expertise across diverse practice areas',
  'SEO competition for high-value legal keywords',
  'Attorney profiles and bios that build credibility',
  'Lead capture for consultations and case inquiries'],

  capabilities: [
  {
    title: 'Practice area pages',
    description:
    'Authoritative content that positions your firm for both clients and search engines.'
  },
  {
    title: 'Attorney profiles',
    description:
    'Polished bio templates with credentials, cases, publications, and media mentions.'
  },
  {
    title: 'Local & national SEO',
    description:
    'Strategy for ranking on competitive legal search terms in your jurisdictions.'
  },
  {
    title: 'Consultation flows',
    description:
    'Intake forms and scheduling that qualify and convert prospects effectively.'
  }],

  stats: [
  { value: '+275%', label: 'Consultation requests' },
  { value: 'Top 3', label: 'Avg. SEO ranking' },
  { value: '15+', label: 'Law firm clients' }]

},
{
  slug: 'manufacturing',
  icon: FactoryIcon,
  title: 'Manufacturing Web Design',
  tagline: 'B2B sites that win contracts',
  description:
  'Websites for manufacturers, OEMs, and industrial suppliers that generate qualified leads.',
  longDescription:
  'Manufacturing buyers are technical, deliberate, and high-value. We build sites that speak their language — with detailed product data, capability content, and clear paths to engagement.',
  challenges: [
  'Detailed product catalogs with specs, drawings, and CAD files',
  'Capability content for buyers, engineers, and procurement',
  'Distributor networks and quote request workflows',
  'Long sales cycles and lead nurturing'],

  capabilities: [
  {
    title: 'Product catalogs',
    description:
    'Searchable, filterable catalogs with specs, datasheets, and downloadable assets.'
  },
  {
    title: 'Capability statements',
    description:
    'Detailed capability content that resonates with engineering buyers.'
  },
  {
    title: 'Quote workflows',
    description:
    'RFQ forms with file uploads, smart routing, and CRM integration.'
  },
  {
    title: 'Distributor portals',
    description:
    'Login-protected areas for partners with pricing, training, and resources.'
  }],

  stats: [
  { value: '+210%', label: 'RFQ submissions' },
  { value: '98/100', label: 'Avg. Lighthouse score' },
  { value: '5k+', label: 'SKUs cataloged' }]

},
{
  slug: 'restaurant',
  icon: UtensilsIcon,
  title: 'Restaurant Website Design',
  tagline: 'Sites that fill seats',
  description:
  'Mouth-watering websites for restaurants, hospitality groups, and food brands.',
  longDescription:
  'A great restaurant site makes people hungry and ready to book. We build beautiful, fast sites that showcase your food, drive reservations, and grow your following.',
  challenges: [
  'Showcasing food with stunning imagery and storytelling',
  'Online ordering and reservation integration',
  'Menus that are easy to update and always current',
  'Multi-location chains with consistent brand experience'],

  capabilities: [
  {
    title: 'Editorial-quality design',
    description:
    'Layouts that make your food and atmosphere shine on every device.'
  },
  {
    title: 'Reservation & ordering',
    description:
    'OpenTable, Resy, Toast, and online ordering integrations.'
  },
  {
    title: 'Easy menu management',
    description:
    'CMS workflows that let staff update menus and pricing in seconds.'
  },
  {
    title: 'Multi-location architecture',
    description:
    'Templates that scale from single restaurants to national chains.'
  }],

  stats: [
  { value: '+140%', label: 'Reservations' },
  { value: '+88%', label: 'Online orders' },
  { value: '60+', label: 'Locations served' }]

},
{
  slug: 'real-estate',
  icon: HomeIcon,
  title: 'Real Estate Website Design',
  tagline: 'Listings that move properties',
  description:
  'Websites for brokerages, agents, developers, and property management companies.',
  longDescription:
  'Real estate is a visual, search-heavy, hyper-local business. We build sites with rich listing experiences, IDX/MLS integrations, and lead capture that delivers serious buyers and sellers.',
  challenges: [
  'IDX/MLS feeds with thousands of constantly-updating listings',
  'Map-based search and neighborhood discovery',
  'Agent profile pages and team brokerage models',
  'Lead capture and CRM integration'],

  capabilities: [
  {
    title: 'IDX/MLS integration',
    description:
    'Live listing feeds with rich detail pages, photo galleries, and saved searches.'
  },
  {
    title: 'Map search',
    description:
    'Interactive maps with polygon search, school zones, and neighborhood data.'
  },
  {
    title: 'Agent & team pages',
    description:
    'Beautiful agent profiles with active listings, sold history, and reviews.'
  },
  {
    title: 'CRM-ready leads',
    description:
    'Lead capture flows that route to Follow Up Boss, kvCORE, and major real estate CRMs.'
  }],

  stats: [
  { value: '50k+', label: 'Listings powered' },
  { value: '+195%', label: 'Lead capture' },
  { value: '4.9★', label: 'Agent satisfaction' }]

},
{
  slug: 'software-tech',
  icon: CpuIcon,
  title: 'Software & Tech Web Design',
  tagline: 'Sites that ship',
  description:
  'Marketing sites for SaaS, dev tools, and tech companies that drive sign-ups and demos.',
  longDescription:
  'Tech audiences expect more — they want speed, clarity, and proof. We build SaaS marketing sites that earn the respect of technical buyers while converting decision-makers.',
  challenges: [
  'Communicating complex products to multiple personas',
  'Integration directories, docs, and developer resources',
  'Pricing pages that handle complex tiering and add-ons',
  'Free trial and product-led growth flows'],

  capabilities: [
  {
    title: 'Product-led marketing',
    description:
    'Sites built around interactive demos, free trials, and self-serve sign-ups.'
  },
  {
    title: 'Integration & docs',
    description:
    'Beautiful, searchable integration libraries and developer documentation.'
  },
  {
    title: 'Pricing & comparison',
    description:
    'Clear, conversion-optimized pricing pages with calculators and FAQs.'
  },
  {
    title: 'Customer stories',
    description:
    'Polished case studies with metrics that prove ROI to technical buyers.'
  }],

  stats: [
  { value: '+85%', label: 'Sign-up rate' },
  { value: '95+', label: 'Lighthouse score' },
  { value: '40+', label: 'SaaS clients' }]

},
{
  slug: 'sports-entertainment',
  icon: TrophyIcon,
  title: 'Sports & Entertainment Web Design',
  tagline: 'Sites that fans live on',
  description:
  'Websites for teams, leagues, venues, festivals, and entertainment brands.',
  longDescription:
  'Sports and entertainment fans show up in waves and expect content the moment it drops. We build sites that handle traffic spikes, deliver media beautifully, and turn casual fans into superfans.',
  challenges: [
  'Massive traffic spikes around games, releases, and events',
  'Live scores, schedules, and real-time content updates',
  'Ticket sales and merchandise integration',
  'Rich media (video, photos, highlights) at high volume'],

  capabilities: [
  {
    title: 'Real-time content',
    description:
    'Live scores, schedules, and content updates that stay in sync with events.'
  },
  {
    title: 'Ticket & merch',
    description:
    'Ticketmaster, SeatGeek, and Shopify integrations for events and merchandise.'
  },
  {
    title: 'Media-rich experiences',
    description:
    'Video galleries, highlight reels, and photo libraries optimized for fast delivery.'
  },
  {
    title: 'Spike-ready infrastructure',
    description:
    'Edge caching and CDN strategies that handle game-day and launch-day traffic.'
  }],

  stats: [
  { value: '10M+', label: 'Monthly visits' },
  { value: '0', label: 'Game-day outages' },
  { value: '+92%', label: 'Ticket conversions' }]

}];


export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find((i) => i.slug === slug);
}