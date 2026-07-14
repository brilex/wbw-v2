export interface ServiceBSContent {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: { title: string; description: string }[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesBS: ServiceBSContent[] = [
  {
    slug: 'web-development',
    title: 'Razvoj web stranica',
    tagline: 'Prilagođene web stranice i web aplikacije',
    description:
      'Prilagođene web stranice i web aplikacije izrađene u Reactu, TypeScriptu i modernim frameworkima. Optimizirane za performanse, skalabilnost i korisničko iskustvo.',
    longDescription:
      'Gradimo produkcijske web stranice i web aplikacije koristeći najnovije tehnologije. Od marketing sajtova do složenih SaaS platformi — naš razvoj je brz, pristupačan i spreman za rast vašeg poslovanja.',
    features: [
      {
        title: 'Moderan tech stack',
        description:
          'React, TypeScript, Next.js i Tailwind CSS — provjereni alati koji garantuju brzinu i dugoročnu održivost.',
      },
      {
        title: 'Performanse na prvom mjestu',
        description:
          'Učitavanje ispod sekunde, savršeni Lighthouse rezultati i Core Web Vitals prilagođeni za SEO.',
      },
      {
        title: 'Pristupačnost ugrađena',
        description:
          'WCAG 2.1 AA usklađenost po defaultu. Svaka stranica navigabilna tipkovnicom i screen readerima.',
      },
      {
        title: 'API integracije',
        description:
          'Besprijekorno povezivanje s vašim CRM-om, platnim procesorima, analitikom i bilo kojim vanjskim servisom.',
      },
    ],
    deliverables: [
      'Prilagođeno responzivno kodirani sajt',
      'CMS integracija',
      'Analitika i praćenje',
      'Optimizacija performansi',
      'Dokumentacija i obuka',
      '30 dana podrške nakon lansiranja',
    ],
    faqs: [
      {
        question: 'Koliko dugo traje tipičan projekt?',
        answer:
          'Većina marketing sajtova traje 6–8 sedmica. Složene web aplikacije od 12 do 20 sedmica, zavisno od obima.',
      },
      {
        question: 'Pružate li kontinuiranu podršku?',
        answer:
          'Da — nudimo mjesečne planove održavanja i dedicirane pakete podrške nakon lansiranja.',
      },
    ],
  },
  {
    slug: 'wordpress-development',
    title: 'Prilagođeni WordPress razvoj',
    tagline: 'Prilagođena WordPress rješenja',
    description:
      'Prilagođena WordPress rješenja s custom temama, pluginovima i integracijama. Idealno za sajtove vođene sadržajem koji trebaju fleksibilnost i jednostavno upravljanje.',
    longDescription:
      'Gradimo prilagođena WordPress iskustva od nule — bez debelih tema, bez plugin kaosa. Samo čisti, brzi, sigurni WordPress sajtovi kojima će vaš tim zaista voljeti upravljati.',
    features: [
      {
        title: 'Prilagođene teme',
        description:
          'Ručno kodirane teme prema vašim tačnim specifikacijama — bez page buildera koji vas usporavaju.',
      },
      {
        title: 'Prilagođeni pluginovi',
        description:
          'Besprijekorno integrirani pluginovi za jedinstvenu funkcionalnost unutar WordPress ekosistema.',
      },
      {
        title: 'Headless WordPress',
        description:
          'Koristite WordPress kao CMS uz moderan React/Next.js frontend za najbolje od oba svijeta.',
      },
      {
        title: 'Sigurnosno ojačavanje',
        description:
          'Ojačavanje servera, redovne revizije i proaktivno praćenje za vašu zaštitu.',
      },
    ],
    deliverables: [
      'Prilagođena WordPress tema',
      'Prilagođeni Gutenberg blokovi',
      'Konfiguracija pluginova',
      'Obuka urednika i dokumentacija',
      'Preporuke za hosting',
      'Sigurnosno ojačavanje i optimizacija',
    ],
    faqs: [
      {
        question: 'Možete li migrirati moj postojeći WordPress sajt?',
        answer:
          'Apsolutno. Upravljamo punim migracijama uključujući sadržaj, medije, preusmjeravanja i SEO.',
      },
      {
        question: 'Nudite li hosting?',
        answer:
          'Ne hostujemo direktno, ali preporučujemo i konfiguriramo managed WordPress hostove poput WP Engine i Kinsta.',
      },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Dizajn',
    tagline: 'Lijepa, intuitivna sučelja',
    description:
      'Lijepa, intuitivna sučelja dizajnirana s vašim korisnicima na umu. Kreiramo iskustva koja oduševljavaju i konvertuju kroz promišljeni dizajn i istraživanja.',
    longDescription:
      'Sjajan dizajn je nevidljiv. Naš UI/UX rad kombinuje istraživanje korisnika, moderan vizualni dizajn i rigorozno testiranje kako bi stvorio proizvode koji se koriste bez napora i nepogrešivo su vaši.',
    features: [
      {
        title: 'Istraživanje korisnika',
        description:
          'Intervjui, ankete i testiranje upotrebljivosti za donošenje odluka temeljenih na stvarnom ponašanju korisnika.',
      },
      {
        title: 'Informacijska arhitektura',
        description:
          'Jasne, pregledne strukture koje pomažu korisnicima da pronađu šta trebaju bez razmišljanja.',
      },
      {
        title: 'Vizualni dizajn sistemi',
        description:
          'Kohezivne biblioteke komponenti i dizajn tokeni koji rastu s vašim proizvodom.',
      },
      {
        title: 'Interaktivni prototipi',
        description:
          'Figma prototipi visoke vjernosti koje možete kliknuti, testirati i iterirati prije kodiranja.',
      },
    ],
    deliverables: [
      'Izvještaj o istraživanju korisnika',
      'Wireframeovi i korisnički tokovi',
      'Mockupovi visoke vjernosti',
      'Interaktivni Figma prototip',
      'Dizajn sistem i komponente',
      'Dokumentacija za predaju developerima',
    ],
    faqs: [
      {
        question: 'Radite li dizajn bez razvoja?',
        answer:
          'Da — često preuzimamo angažmane samo za dizajn i predajemo vašem dev timu.',
      },
      {
        question: 'Koliko revizija je uključeno?',
        answer:
          'Radimo u iterativnim ciklusima s do tri runde revizija po fazi, uz kontinuiranu asinhrohu povratnu informaciju.',
      },
    ],
  },
  {
    slug: 'ecommerce-development',
    title: 'E-commerce razvoj',
    tagline: 'Online prodavnice koje konvertuju',
    description:
      'Kompletna e-commerce rješenja koja povećavaju prodaju. Od kataloga proizvoda do tokova naplate, gradimo online kupovinska iskustva koja pretvaraju posjetitelje u kupce.',
    longDescription:
      'Gradimo online prodavnice s visokom stopom konverzije na Shopifyu, Hydrogenu i headless platformama. Lijepe stranice proizvoda, friction-free naplata i tehnički temelji za rast vašeg biznisa.',
    features: [
      {
        title: 'Prilagođene Shopify teme',
        description:
          'Ručno izrađene Shopify teme optimizirane za konverziju i vaš jedinstveni brend.',
      },
      {
        title: 'Headless commerce',
        description:
          'Shopify Hydrogen, Medusa ili BigCommerce — moderni stackovi za ambiciozne prodavnice.',
      },
      {
        title: 'Optimizacija konverzije',
        description:
          'A/B testiranje, poboljšanja naplate i analitičko iteriranje za povećanje prodaje.',
      },
      {
        title: 'Plaćanje i dostava',
        description:
          'Stripe, PayPal, Apple Pay, plus integracije dostave i ispunjenja narudžbi.',
      },
    ],
    deliverables: [
      'Prilagođeni storefront',
      'Konfiguratori proizvoda',
      'Optimiziran tok naplate',
      'Postavljanje plaćanja i dostave',
      'Analitika i praćenje',
      'Plan lansiranja fokusiran na konverziju',
    ],
    faqs: [
      {
        question: 'Možete li migrirati s druge platforme?',
        answer:
          'Da — upravljamo migracijama s WooCommerce, Magento, BigCommerce i drugih platformi uz puno očuvanje podataka i SEO-a.',
      },
      {
        question: 'Gradite li prilagođene tokove naplate?',
        answer:
          'Na Shopify Plus i headless setupima, apsolutno. Možemo u potpunosti prilagoditi naplatu za maksimalnu konverziju.',
      },
    ],
  },
  {
    slug: 'seo-optimization',
    title: 'SEO optimizacija',
    tagline: 'Budite pronađeni od pravih ljudi',
    description:
      'Poboljšajte svoje pozicije u pretraživačima i organski promet. Implementiramo tehnički SEO, optimizaciju sadržaja i poboljšanja performansi za povećanje vidljivosti.',
    longDescription:
      'SEO je dijelom tehnički, dijelom sadržajni, dijelom strpljenje. Pokrivamo sve tri dimenzije — popravljamo tehničke temelje, optimiziramo vaš sadržaj i dajemo vam mapu puta za održivi organski rast.',
    features: [
      {
        title: 'Tehnička SEO revizija',
        description:
          'Kompletna revizija crawlabilnosti, indeksiranja, schema markupa, preusmjeravanja i Core Web Vitalsa.',
      },
      {
        title: 'On-page optimizacija',
        description:
          'Title tagovi, meta opisi, naslovi, interne veze i struktura sadržaja.',
      },
      {
        title: 'Strategija sadržaja',
        description:
          'Istraživanje ključnih riječi i mape puta sadržaja koje ciljaju pravu publiku i namjeru.',
      },
      {
        title: 'Performanse i Core Web Vitals',
        description:
          'Popravke brzine, mobilne upotrebljivosti i CLS-a koji poboljšavaju i korisnike i pozicije.',
      },
    ],
    deliverables: [
      'Sveobuhvatna SEO revizija',
      'Izvještaj o istraživanju ključnih riječi',
      'On-page optimizacija',
      'Implementacija schema markupa',
      'Sitemap i robots.txt',
      'Mjesečni izvještaji o performansama',
    ],
    faqs: [
      {
        question: 'Koliko dugo dok ne vidim rezultate?',
        answer:
          'Tehnički dobici mogu se vidjeti za sedmice. Održivi rast pozicija tipično traje 3–6 mjeseci dosljednog rada.',
      },
      {
        question: 'Garantujete li pozicije?',
        answer:
          'Nijedna ozbiljna agencija to ne garantuje. Mi garantujemo proces, transparentnost i mjerljivo poboljšanje metrika koje su važne.',
      },
    ],
  },
  {
    slug: 'website-maintenance',
    title: 'Održavanje web stranice',
    tagline: 'Kontinuirana briga za vaš sajt',
    description:
      'Kontinuirana podrška i održavanje kako bi vaš sajt funkcionisao glatko. Redovna ažuriranja, sigurnosne zakrpe, praćenje performansi i ažuriranja sadržaja.',
    longDescription:
      'Web stranice trebaju kontinuiranu brigu. Naši planovi održavanja drže vaš sajt sigurnim, brzim i ažuriranim kako biste se mogli fokusirati na vođenje posla — a ne na krpanje CMS-a.',
    features: [
      {
        title: 'Sigurnost i ažuriranja',
        description:
          'Pluginovi, teme i ažuriranja core-a primijenjena pažljivo prema rasporedu, sa sigurnosnim net-om za povratak.',
      },
      {
        title: 'Praćenje performansi',
        description:
          'Praćenje dostupnosti u realnom vremenu i mjesečni izvještaji o performansama za rano otkrivanje problema.',
      },
      {
        title: 'Ažuriranja sadržaja',
        description:
          'Banke mjesečnih sati za sadržaj, tekst i manje dizajnerske izmjene — bez iznenađenja po zadatku.',
      },
      {
        title: 'Backup i oporavak',
        description:
          'Dnevni backupi pohranjeni na vanjskim lokacijama, s povratkom jednim klikom ako nešto pođe po zlu.',
      },
    ],
    deliverables: [
      'Mjesečni sati održavanja',
      '24/7 praćenje dostupnosti',
      'Dnevni vanjski backupi',
      'Sigurnosne zakrpe',
      'Izvještaji o performansama',
      'Prioritetni odgovor na podršku',
    ],
    faqs: [
      {
        question: 'Što ako imam hitno pitanje izvan radnog vremena?',
        answer:
          'Planovi održavanja uključuju hitni odgovor. Kritični problemi dobivaju pažnju 24/7 s ciljevima rješavanja isti dan.',
      },
      {
        question: 'Mogu li otkazati u bilo koje vrijeme?',
        answer:
          'Da — svi planovi održavanja su od mjeseca do mjeseca bez dugoročne obaveze.',
      },
    ],
  },
  {
    slug: 'csr-to-ssr-migration',
    title: 'CSR u SSR / SSG Migracija',
    tagline: 'Brže React aplikacije, vidljive Googleu',
    description:
      'Pretvorite vaš spori, nevidljivi Vite ili Create React App sajt u potpuno server-renderovanu ili statički generisanu Next.js aplikaciju — bez ponovne izgradnje od nule.',
    longDescription:
      'Većina React aplikacija izrađenih u Viteu ili Create React Appu koristi Client-Side Rendering (CSR). To znači da browser preuzima praznu HTML datoteku, pa čeka da JavaScript učita sadržaj. Pretraživači se bore s indeksiranjem takvih sajtova, korisnici na sporim vezama ne vide ništa sekundama, a Lighthouse rezultati pate. Migriramo vaš postojeći CSR projekt na Next.js sa SSR ili SSG — čuvajući sve vaše komponente, logiku i dizajn dok otključavamo performanse i SEO koji vaš sajt zaslužuje.',
    features: [
      {
        title: 'Problem s CSR-om',
        description:
          'S CSR-om, Google i drugi crawleri često vide praznu stranicu. Vaš sadržaj živi unutar JavaScript bundelova koji se učitavaju nakon početnog zahtjeva — čineći ga nevidljivim za pretraživače i sporim za prave korisnike.',
      },
      {
        title: 'SSG: Najbolje za većinu sajtova',
        description:
          'Static Site Generation pre-renderuje svaku stranicu u vrijeme buildanja. Stranice se serviraju kao čisti HTML — trenutno učitavanje, potpuno indeksibilno i cacheable na globalnom CDN-u.',
      },
      {
        title: 'SSR: Najbolje za dinamički sadržaj',
        description:
          'Server-Side Rendering generira stranice na serveru za svaki zahtjev. Idealno za dashboarde, korisnički specifičan sadržaj ili podatke koji se često mijenjaju.',
      },
      {
        title: 'Hibrid: Najbolje od oba svijeta',
        description:
          'Next.js vam omogućava miješanje SSG-a i SSR-a po stranici. Statično gdje ima smisla, dinamično gdje mora biti — bez kompromisa.',
      },
    ],
    deliverables: [
      'Kompletna Next.js App Router migracija',
      'SSG / SSR strategija po ruti',
      'SEO metapodaci i kanonski tagovi',
      'Sitemap i robots.txt',
      'Optimizacija Core Web Vitalsa',
      'Postavljanje Vercel deploymenta',
      'Lighthouse izvještaj prije/poslije',
    ],
    faqs: [
      {
        question: 'Hoće li moje postojeće komponente još uvijek raditi?',
        answer:
          'U većini slučajeva da. React komponente se čisto migriraju na Next.js. Interaktivne komponente jednostavno dobivaju "use client" direktivu — nije potrebna ponovna izgradnja.',
      },
      {
        question: 'Koliko dugo traje migracija?',
        answer:
          'Tipičan Vite ili CRA sajt s 5–15 ruta traje 1–2 sedmice. Veće aplikacije sa složenim state managementom ili routingom traju 3–4 sedmice.',
      },
      {
        question: 'Kakvo povećanje performansi mogu očekivati?',
        answer:
          'Većina sajtova vidi skok Lighthouse rezultata s 40–60 na 95–100 nakon migracije. Time to First Byte dramatično pada i Google konačno može indeksirati vaš sadržaj.',
      },
      {
        question: 'Upravljate li i deploymentom?',
        answer:
          'Da — postavljamo vaš Vercel projekt, konfiguriramo environment varijable i osiguravamo da CI/CD radi prije predaje.',
      },
    ],
  },
];

export function getServiceBSBySlug(slug: string): ServiceBSContent | undefined {
  return servicesBS.find((s) => s.slug === slug);
}
