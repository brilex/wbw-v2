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
    title: 'Izrada web stranica',
    tagline: 'Prilagođena izrada web stranica i web aplikacija',
    description:
      'Profesionalna izrada web stranica i web aplikacija — ručno kodirano u Reactu, TypeScriptu i modernim frameworkima. Optimizirano za performanse, skalabilnost i korisničko iskustvo.',
    longDescription:
      'Bavimo se izradom web stranica i web aplikacija koristeći najnovije tehnologije. Od marketing sajtova do složenih platformi — naš razvoj web dizajna je brz, pristupačan i spreman za rast vašeg poslovanja.',
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
          'WCAG 2.1 AA usklađenost po defaultu. Svaka stranica navigabilna tastaturom i screen readerima.',
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
        question: 'Kolika je cijena izrade web stranice?',
        answer:
          'Izrada web stranice kod nas kreće od 750 KM za Starter paket (5 stranica, WordPress/Bricks, SEO temelji). Growth paket sa punom SEO strategijom je 1.300 KM, a Full Partnership sa 6 mjeseci upravljanja je 2.200 KM. Sve cijene su fiksne — pogledajte detalje na stranici cijena.',
      },
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
          'Radimo u iterativnim ciklusima s do tri runde revizija po fazi, uz kontinuiranu asinhronom povratnu informaciju.',
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
    tagline: 'SEO agencija koja vas dovodi pravim ljudima',
    description:
      'Kao SEO agencija poboljšavamo vaše pozicije u pretraživačima i organski promet. Implementiramo tehnički SEO, optimizaciju sadržaja i poboljšanja performansi za povećanje vidljivosti.',
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
        question: 'Šta radi SEO agencija?',
        answer:
          'SEO agencija poput nas analizira vaš sajt i konkurenciju, popravlja tehničke probleme koji sprječavaju Google da vas indeksira, istražuje ključne riječi koje vaši kupci zaista traže, i optimizira sadržaj tako da rankirate za te termine. Za razliku od freelancera, agencija nudi kontinuirano praćenje i izvještavanje.',
      },
      {
        question: 'Kolika je cijena SEO optimizacije?',
        answer:
          'SEO optimizacija je uključena u Growth paket (1.300 KM) i Full Partnership paket (2.200 KM) — obuhvata istraživanje ključnih riječi, on-page optimizaciju i tehničku SEO reviziju. Full Partnership dodaje 6 mjeseci mjesečnog SEO monitoringa. Pogledajte cijene za detalje.',
      },
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
        question: 'Šta ako imam hitno pitanje izvan radnog vremena?',
        answer:
          'Planovi održavanja uključuju hitni odgovor. Kritični problemi dobijaju pažnju 24/7 s ciljevima rješavanja isti dan.',
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
          'U većini slučajeva da. React komponente se čisto migriraju na Next.js. Interaktivne komponente jednostavno dobijaju "use client" direktivu — nije potrebna ponovna izgradnja.',
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
  {
    slug: 'custom-plugin-development',
    title: 'Razvoj prilagođenih WordPress pluginova',
    tagline: 'Kada nijedan postojeći plugin ne radi ono što vam treba',
    description:
      'Prilagođeni WordPress pluginovi izrađeni od nule — automatizacija, API integracije, custom widgeti i admin alati napravljeni prema tome kako vaš biznis zaista radi.',
    longDescription:
      'Većina agencija svaki problem rješava instaliranjem još jednog plugina. To radi dok ne prestane — dok plugin skoro radi ono što treba, ili se pokvari nakon ažuriranja, ili uspori sajt. Mi pišemo custom pluginove u PHP-u koristeći WordPress API-je, tako da funkcionalnost odgovara tačno vašem procesu, ostaje održiva i ne vuče za sobom gomilu funkcija koje nikad nećete koristiti.',
    features: [
      {
        title: 'AI i API integracije',
        description:
          'Izradili smo plugin koji povlači RSS sadržaj, prepisuje ga kroz AI model i objavljuje po rasporedu — uz automatsko rukovanje rate limitima, ponovnim pokušajima i čišćenjem izlaza.',
      },
      {
        title: 'Prilagođena admin sučelja',
        description:
          'Stranice postavki, editabilni promptovi i kontrole koje vaš tim zaista može koristiti — da se ponašanje mijenja bez diranja koda.',
      },
      {
        title: 'Namjenski widgeti i blokovi',
        description:
          'Widgeti sa živim podacima, Gutenberg blokovi i shortcodeovi izrađeni za vaš tačan slučaj upotrebe, a ne iskrivljeni iz generičkog plugina.',
      },
      {
        title: 'Zakazana automatizacija',
        description:
          'WP-Cron zadaci koji pouzdano rade u pozadini — sadržajni pipeline-ovi, sinhronizacija podataka i zakazani uvozi.',
      },
    ],
    deliverables: [
      'Prilagođeni plugin, verzionisan i dokumentovan',
      'Admin sučelje s postavkama',
      'API integracija i rukovanje greškama',
      'Konfiguracija zakazanih zadataka (cron)',
      'Dokumentacija za instalaciju i primopredaju',
      'Period podrške nakon lansiranja',
    ],
    faqs: [
      {
        question: 'Zašto praviti custom plugin umjesto koristiti postojeći?',
        answer:
          'Kada postojeći plugin pokriva vašu potrebu, reći ćemo vam da ga koristite — to je jeftinije za vas. Custom razvoj ima smisla kada ništa ne radi posao, kada bi vam trebala tri plugina koja se međusobno sukobljavaju, ili kada postojeći nosi toliko neiskorištenog tereta da šteti performansama.',
      },
      {
        question: 'Možete li integrisati AI u WordPress sajt?',
        answer:
          'Da. Izradili smo plugin koji prepisuje preuzete članke kroz AI model u originalan, strukturiran sadržaj — uključujući rukovanje API rate limitima, rutiranje modela i čišćenje izlaza prije objave. Pogledajte CryptoLeb studiju slučaja za detalje.',
      },
      {
        question: 'Hoće li plugin preživjeti WordPress ažuriranja?',
        answer:
          'Gradimo koristeći dokumentovane WordPress API-je umjesto zaobilaženja internih mehanizama, što je ono što drži plugin funkcionalnim kroz ažuriranja jezgra. Također predajemo izvorni kod, pa niste vezani za nas.',
      },
      {
        question: 'Da li mi posjedujemo kod?',
        answer:
          'Da. Dobijate kompletan izvorni kod, dokumentovan, i vaš je da ga zadržite, mijenjate ili predate drugom developeru.',
      },
    ],
  },
  {
    slug: 'directory-marketplace-development',
    title: 'Izrada poslovnih direktorija i marketplace platformi',
    tagline: 'Platforme izgrađene da rastu i nakon lansiranja',
    description:
      'Direktorij i marketplace platforme s upravljanjem oglasima, pretragom po kategoriji i lokaciji, recenzijama i arhitekturom koja ostaje brza dok broj oglasa raste u hiljade.',
    longDescription:
      'Direktorij nije prezentacijski sajt s listom na njemu. Živi ili umire na tome koliko brzo ljudi pronađu ono što traže i koliko potpuno oglasi djeluju — a oboje postaje teže kako platforma raste. Gradimo direktorij platforme s unaprijed planiranom strukturom podataka i arhitekturom pretrage, tako da dodavanje hiljada oglasa ne znači ponovnu izgradnju.',
    features: [
      {
        title: 'Strukturirano upravljanje oglasima',
        description:
          'Taksonomije kategorija, nivoi oglasa i polja profila modelirani prema vašem tržištu od početka — a ne naknadno dodani.',
      },
      {
        title: 'Pretraga i filtriranje koji skaliraju',
        description:
          'Brzo filtriranje po kategoriji, lokaciji i atributima koje ostaje responzivno kako broj oglasa raste.',
      },
      {
        title: 'Geolokacija i pretraga po blizini',
        description:
          'Rezultati svjesni lokacije, tako da posjetioci pronađu ono što im je zaista blizu, a ne samo ono što je zadnje dodano.',
      },
      {
        title: 'Recenzije i community funkcije',
        description:
          'Ugrađene povratne informacije korisnika — signali povjerenja zbog kojih ljudi koriste direktorij umjesto da samo guglaju.',
      },
    ],
    deliverables: [
      'Prilagođena direktorij platforma',
      'Tok prijave i upravljanja oglasima',
      'Pretraga po kategoriji i lokaciji',
      'Stranice poslovnih profila',
      'Sistem recenzija i ocjena',
      'Besplatni i premium nivoi oglasa',
      'SEO-spremni URL-ovi i metapodaci oglasa',
    ],
    faqs: [
      {
        question: 'Jeste li zaista već gradili direktorij?',
        answer:
          'Dva. firme.ba je poslovni direktorij za cijelu Bosnu i Hercegovinu s besplatnim i premium nivoima oglasa, a United First je direktorij za cijelu Kanadu s preko 25 kategorija i geolokacijskom pretragom. Obje studije slučaja su na ovom sajtu.',
      },
      {
        question: 'Kako riješiti direktorij koji kreće prazan?',
        answer:
          'Struktura i početno popunjavanje su na lansiranju važniji od funkcija. Planiramo model kategorija oko realnih prvih stotinu oglasa, činimo prijavu jednostavnom i gradimo SEO strukturu tako da pojedinačni oglasi mogu rangirati sami.',
      },
      {
        question: 'Može li podržati plaćene oglase?',
        answer:
          'Da — nivoi oglasa su čest model, i razliku besplatno/premium ugrađujemo u model podataka od početka umjesto da je naknadno dodajemo.',
      },
      {
        question: 'Hoće li ostati brz s hiljadama oglasa?',
        answer:
          'To je glavno arhitektonsko pitanje i planiramo ga unaprijed — indeksirani upiti, razumna paginacija i keširanje. Direktorij koji uspori na skali obično nije ni bio dizajniran kao direktorij.',
      },
    ],
  },
  {
    slug: 'multilingual-websites',
    title: 'Višejezični i međunarodni web sajtovi',
    tagline: 'Jedan sajt, više tržišta, bez kompromisa',
    description:
      'Višejezični sajtovi za firme koje prodaju preko granica — ispravno prebacivanje jezika, tačni hreflang signali i sadržaj strukturiran tako da svako tržište rangira samostalno.',
    longDescription:
      'Vođenje sajta na više jezika je uglavnom SEO i sadržajno-arhitektonski problem, a ne prevodilački. Ako se uradi pogrešno, vaše jezičke verzije se međusobno takmiče u pretrazi umjesto da svaka rangira na svom tržištu. Gradimo višejezične sajtove s unaprijed planiranom URL strukturom, hreflang signalima i uredničkim procesom.',
    features: [
      {
        title: 'Ispravan hreflang i kanonski tagovi',
        description:
          'Pretraživačima se eksplicitno kaže koja stranica služi kojem jeziku i tržištu, pa se verzije međusobno jačaju umjesto da dijele pozicije.',
      },
      {
        title: 'Čista URL struktura po jeziku',
        description:
          'Predvidivi, indeksibilni URL-ovi za svaki jezik — ne query parametri ili prebacivanje koje radi samo kroz JavaScript, a crawleri ga ne mogu pratiti.',
      },
      {
        title: 'Uredivi urednički proces',
        description:
          'Vaš tim uređuje svaki jezik bez straha da će pokvariti ostale, uz jasan pregled šta je prevedeno, a šta nije.',
      },
      {
        title: 'Sadržaj po tržištu, ne samo prijevod',
        description:
          'Istraživanje ključnih riječi po jeziku, jer fraza koju vaši kupci traže na njemačkom rijetko je direktan prijevod one engleske.',
      },
    ],
    deliverables: [
      'Arhitektura višejezičnog sajta',
      'Prebacivanje jezika i rutiranje',
      'Implementacija hreflang i kanonskih tagova',
      'SEO metapodaci po jeziku',
      'Postavljanje prevodilačkog procesa',
      'Istraživanje ključnih riječi po tržištu',
    ],
    faqs: [
      {
        question: 'Jeste li već gradili višejezični sajt?',
        answer:
          'Da — Neimax, proizvođač ambalaže koji izvozi evropskim partnerima, radi na bosanskom, engleskom i njemačkom na custom WordPress temi s besprijekornim prebacivanjem jezika. Također smo izradili CryptoLeb za specifično regionalno tržište. Obje studije slučaja su na ovom sajtu.',
      },
      {
        question: 'Hoće li se jezičke verzije takmičiti na Googleu?',
        answer:
          'Neće ako je hreflang ispravno implementiran — to je signal koji govori Googleu da su ovo jezičke varijante iste stranice, a ne duplikati. Nedostajući ili pogrešan hreflang je najčešći razlog zašto višejezični sajtovi podbace.',
      },
      {
        question: 'Radite li i prijevode?',
        answer:
          'Gradimo strukturu i možemo raditi s vašim prevodiocem ili prevodilačkom agencijom. Za stranice specifične za tržište radimo i istraživanje ključnih riječi po jeziku, jer doslovan prijevod često promaši ono što ljudi zaista traže.',
      },
      {
        question: 'Možemo li dodati jezik kasnije?',
        answer:
          'Da, ako je sajt od početka građen za to — što je upravo razlog zašto je ta arhitektonska odluka važna rano. Naknadno dodavanje višejezičnosti na jednojezični sajt je znatno više posla nego planiranje unaprijed.',
      },
    ],
  },
];

export function getServiceBSBySlug(slug: string): ServiceBSContent | undefined {
  return servicesBS.find((s) => s.slug === slug);
}
