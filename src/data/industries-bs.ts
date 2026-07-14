export interface IndustryBSContent {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  challenges: string[];
  capabilities: { title: string; description: string }[];
  stats: { value: string; label: string }[];
}

export const industriesBS: IndustryBSContent[] = [
  {
    slug: 'before-after-redesigns',
    title: 'Redizajn web stranica — Prije i Poslije',
    tagline: 'Transformacije koje vrijedi pokazati',
    description:
      'Pogledajte kako pretvaramo zastarjele, slaboperformantne sajtove u moderne, konverzijski fokusirane prezentacije.',
    longDescription:
      'Redizajn je više od novog izgleda — to je prilika da preispitate kako vaš sajt radi za vaš biznis. Kombinujemo strategiju, dizajn i inženjering kako bismo isporučili redizajne koji pomijeraju mjerne podatke koji su važni.',
    challenges: [
      'Zastarjeli vizualni identitet koji više ne odgovara brendu',
      'Sporo učitavanje koje šteti SEO-u i korisničkom iskustvu',
      'Zbunjujuća informacijska arhitektura i slabi konverzijski tokovi',
      'Legacy CMS koji je bolno koristiti za marketing tim',
    ],
    capabilities: [
      {
        title: 'Revizija i strategija',
        description:
          'Heuristički pregled, analiza analitike i intervjui s dionicima za utemeljenje redizajna u stvarnim podacima.',
      },
      {
        title: 'Moderni vizualni identitet',
        description:
          'Osvježavanje dizajna koje izgleda suvremeno bez gubitka kapitala vašeg postojećeg brenda.',
      },
      {
        title: 'Optimizacija konverzije',
        description:
          'Restrukturirani korisnički tokovi i CTA-ovi koji pretvaraju više posjetitelja u kupce.',
      },
      {
        title: 'Besprijekornom migracijom',
        description:
          'Strategija sadržaja, SEO-a i preusmjeravanja koja štiti postojeće pozicije tokom tranzicije.',
      },
    ],
    stats: [
      { value: '+220%', label: 'Prosj. povećanje konverzije' },
      { value: '3.2x', label: 'Brže učitavanje' },
      { value: '0', label: 'Izgubljenih SEO pozicija' },
    ],
  },
  {
    slug: 'automotive-transportation',
    title: 'Automobilski i Transportni web dizajn',
    tagline: 'Sajtovi koji pokreću posao',
    description:
      'Visoko-performantne web stranice za auto saloni, prijevoznička preduzeća i fleet operatere.',
    longDescription:
      'Od inventara auto salona do logističkih platformi, gradimo sajtove koji upravljaju složenim podacima, integriraju se s industrijskim alatima i konvertuju posjetitelje u kupce.',
    challenges: [
      'Live feedovi inventara i stranice detalja po vozilu',
      'Multi-lokacijske dealer mreže s konzistentnim brendingom',
      'Integracija s DMS, CRM i finansijskim aplikacijama',
      'Kvalitetne slike vozila i 360° obilaski u velikom obimu',
    ],
    capabilities: [
      {
        title: 'Integracije inventara',
        description: 'Live feedovi iz DMS-a i glavnih auto podatkovnih provajdera.',
      },
      {
        title: 'Alati za lead capture i finansiranje',
        description:
          'Kalkulatori trade-ina, finansijske aplikacije i zakazivanje test vožnji.',
      },
      {
        title: 'Multi-lokacijska arhitektura',
        description:
          'Skalabilni predlošci za dealer grupe s lokacijski specifičnim sadržajem i SEO-om.',
      },
      {
        title: 'Performanse na velikom obimu',
        description:
          'Brza isporuka slika i server-side rendering za inventare s hiljadama vozila.',
      },
    ],
    stats: [
      { value: '50k+', label: 'Vozila opsluživano' },
      { value: '+185%', label: 'Popunjeni lead formi' },
      { value: '<1s', label: 'Vrijeme učitavanja stranice' },
    ],
  },
  {
    slug: 'corporate',
    title: 'Korporativni web dizajn',
    tagline: 'Ugledni sajtovi za ozbiljna preduzeća',
    description:
      'Premium korporativne web stranice koje grade povjerenje, jasno komuniciraju i predstavljaju vaš brend na najvišem nivou.',
    longDescription:
      'Vaš korporativni sajt je ulaz u vaše poslovanje. Dizajniramo i gradimo sajtove koji odražavaju kalibar vaše organizacije — sofisticirani, pouzdani i ugodni za korišćenje.',
    challenges: [
      'Jasno komuniciranje složenih usluga i vrijednosnih prijedloga',
      'Održavanje konzistentnosti brenda u globalnim timovima i regijama',
      'Upravljanje sadržajem za odnose s investitorima i usklađenost',
      'Strategije sadržaja za više jezika i regija',
    ],
    capabilities: [
      {
        title: 'Dizajn vođen brendom',
        description:
          'Vizualni sistemi usklađeni s korporativnim identitetom koji se lijepo prevode u digitalno.',
      },
      {
        title: 'Globalno upravljanje sadržajem',
        description:
          'CMS arhitekture za više regija i jezika koje rastu s vašim poslovanjem.',
      },
      {
        title: 'Sekcije za investitore',
        description:
          'Sigurne, usklađene stranice za investitorske komunikacije, izvještaje i objave.',
      },
      {
        title: 'Enterprise integracije',
        description:
          'Besprijekorne veze sa Salesforceom, Marketom, HubSpotom i drugim enterprise alatima.',
      },
    ],
    stats: [
      { value: '40+', label: 'Enterprise klijenata' },
      { value: '15', label: 'Podržanih jezika' },
      { value: '99.9%', label: 'SLA dostupnost' },
    ],
  },
  {
    slug: 'construction',
    title: 'Građevinski web dizajn',
    tagline: 'Izgradite povjerenje prije nego što kopate',
    description:
      'Projektno orijentirani sajtovi za generalnih izvođače i građevinske firme koji osvajaju više poslova.',
    longDescription:
      'Vaš portfolio je vaš dokaz. Gradimo građevinske sajtove koji snažno prikazuju prethodne radove, pojednostavljuju upite za projekte i pomažu vam da osvajate vrstu posla koji zaista želite.',
    challenges: [
      'Prikazivanje prošlih projekata s bogatim slikama i studijama slučaja',
      'Prikupljanje kvalificiranih lead-ova i upita za projekte',
      'Stranice za zapošljavanje koje privlače kvalificirane radnike',
      'Sigurnosne akreditacije, certifikati i izjave o sposobnostima',
    ],
    capabilities: [
      {
        title: 'Projektni portfoliji',
        description:
          'Filtrirani prikazi projekata bogatih slikama s detaljnim studijama slučaja i metrikama.',
      },
      {
        title: 'Formi za kvalifikaciju lead-ova',
        description:
          'Pametne forme koje unaprijed prikupljaju obim projekta, budžet i rokove.',
      },
      {
        title: 'Karijere i zapošljavanje',
        description:
          'Oglasi za posao, tokovi prijava i stranice kulture koje privlače top talente.',
      },
      {
        title: 'Izjave o sposobnostima',
        description:
          'Ugledne akreditacije, certifikati i sadržaj sposobnosti za predkvalifikacije.',
      },
    ],
    stats: [
      { value: '+340%', label: 'Upiti za projekte' },
      { value: '120+', label: 'Prikazanih projekata' },
      { value: '4.2x', label: 'Prijava na karijere' },
    ],
  },
  {
    slug: 'consumer-goods',
    title: 'Potrošačka roba i Proizvodi',
    tagline: 'Gdje se proizvodi pretvaraju u brendove',
    description:
      'Web stranice za CPG brendove koje pretvaraju karakteristike proizvoda u priče i posjetitelje u lojalne kupce.',
    longDescription:
      'Sajtovi potrošačke robe trebaju raditi više od prodaje — trebaju graditi afinitet prema brendu. Kreiramo imerzivna iskustva proizvoda koja maloprodavači poštuju, a kupci vole.',
    challenges: [
      'Ispričavanje priče o brendu koja se ističe na prepunim policama',
      'Funkcionalnost pronalaženja prodajnih mjesta i maloprodavača',
      'Stranice detalja proizvoda s bogatim sadržajem i asset-ima',
      'Besprijekorno povezivanje D2C i maloprodajnih kanala',
    ],
    capabilities: [
      {
        title: 'Brendovsko pripovijedanje',
        description:
          'Ureditorski kvalitetan sadržaj koji gradi emocionalnu vezu s vašim proizvodima.',
      },
      {
        title: 'Pronalaženje prodajnih mjesta',
        description:
          'Lokacijski svjesni pronalazači maloprodavača s online i offline dostupnošću.',
      },
      {
        title: 'Bogate stranice proizvoda',
        description:
          'Lijepe PDP stranice sa slikama, specifikacijama, sastojcima, certifikatima i recenzijama.',
      },
      {
        title: 'D2C integracija',
        description:
          'Povezivanje Shopifya ili other commerce platformi bez kompromisa iskustva brenda.',
      },
    ],
    stats: [
      { value: '+92%', label: 'Angažovanje s brendom' },
      { value: '2.4x', label: 'Klikovi na prodajna mjesta' },
      { value: '50+', label: 'Izgrađenih SKU stranica' },
    ],
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce web dizajn',
    tagline: 'Online prodavnice inžinjerisane za konverziju',
    description:
      'Visoko-performantni e-commerce sajtovi na Shopifyu, Hydrogenu i headless platformama.',
    longDescription:
      'Gradimo online prodavnice koje se brzo učitavaju, prekrasno izgledaju i konvertuju posjetitelje u kupce po stopama koje vode industriju. Od butik brendova do prodavnica s visokim obimom — naš e-commerce rad pomiče iglu.',
    challenges: [
      'Prilagođena iskustva naplate koja maksimiziraju konverziju',
      'Konfiguratori proizvoda i alati za prilagodbu',
      'Mehanike pretplate, bundle-a i upsell-a',
      'Performanse pod visokim prometom i opterećenjem inventara',
    ],
    capabilities: [
      {
        title: 'Prilagođene Shopify teme',
        description:
          'Ručno kodirane teme optimizirane za brzinu, SEO i konverziju — bez debelih buildera.',
      },
      {
        title: 'Headless arhitektura',
        description:
          'Shopify Hydrogen i headless setups za najbrže, najfleksibilnije storefrontove.',
      },
      {
        title: 'Optimizacija konverzije',
        description: 'A/B testiranje, poboljšanja naplate i analitičko iteriranje.',
      },
      {
        title: 'Pretplate i lojalnost',
        description:
          'Recharge, Yotpo, Klaviyo integracije za izgradnju ponavljajućih prihoda i ljubavi prema brendu.',
      },
    ],
    stats: [
      { value: '+312%', label: 'Povećanje konverzije' },
      { value: '98/100', label: 'PageSpeed rezultat' },
      { value: '$50M+', label: 'GMV pokrenut' },
    ],
  },
  {
    slug: 'education',
    title: 'Obrazovni web dizajn',
    tagline: 'Sajtovi koji regrutuju i inspirišu',
    description:
      'Moderni sajtovi za škole, fakultete i online platforme za učenje.',
    longDescription:
      'Obrazovni sajtovi služe svima, od potencijalnih studenata do trenutnih roditelja i nastavnog osoblja. Dizajniramo pristupačne, sadržajem bogate sajtove koji pomažu institucijama da napreduju na konkurentnom tržištu.',
    challenges: [
      'Služenje više publika (kandidati, studenti, roditelji, nastavnici)',
      'Ogromne biblioteke sadržaja i imenici programa',
      'Usklađenost s pristupačnošću (WCAG)',
      'Optimizacija toka prijava i upisa',
    ],
    capabilities: [
      {
        title: 'Informacijska arhitektura za publiku',
        description:
          'Struktura informacija koja svakoj publici omogućava da brzo pronađe šta treba.',
      },
      {
        title: 'Imenici programa',
        description:
          'Filtrirani, pretraživi katalozi programa i kurseva s bogatim stranicama detalja.',
      },
      {
        title: 'Izvrsna pristupačnost',
        description:
          'WCAG 2.1 AA usklađenost ugrađena od prvog dana, ne naknadno dodana.',
      },
      {
        title: 'Tokovi upisa',
        description:
          'Optimizirani tokovi prijava i iskustva njegovivanja kandidata.',
      },
    ],
    stats: [
      { value: '+58%', label: 'Pokrenute prijave' },
      { value: '500+', label: 'Katalogovanih programa' },
      { value: 'AA', label: 'WCAG usklađenost' },
    ],
  },
  {
    slug: 'energy',
    title: 'Energetski web dizajn',
    tagline: 'Pojačajte vaš brend online',
    description:
      'Web stranice za energetske kompanije, obnovljive izvore i clean tech inovatore.',
    longDescription:
      'Od komunalnih preduzeća koja služe milionima do clean tech startupa koji mijenjaju svijet, gradimo sajtove koji objašnjavaju složene ponude, podržavaju klijente i prikazuju utjecaj.',
    challenges: [
      'Portali za samouslugu klijenata (naplata, karte kvarova)',
      'Izvještavanje o održivosti i ESG pripovijedanje',
      'Objašnjenja tarifa, programa i popusta',
      'Visoki skokovi prometa tokom nestanaka i događaja',
    ],
    capabilities: [
      {
        title: 'Portali za klijente',
        description:
          'Sigurna samousluga za naplatu, potrošnju, nestanke i upravljanje uslugama.',
      },
      {
        title: 'Pripovijedanje o održivosti',
        description:
          'Vizualni, podacima vođeni sadržaj koji komunicira ESG utjecaj i napredak.',
      },
      {
        title: 'Stranice programa i popusta',
        description:
          'Jasna objašnjenja tarifa, poticaja i klijentskih programa.',
      },
      {
        title: 'Infrastruktura visoke dostupnosti',
        description:
          'Arhitektura koja podnosi skokove prometa tokom nestanaka ili vremenskih nepogoda.',
      },
    ],
    stats: [
      { value: '2M+', label: 'Opsluživanih klijenata' },
      { value: '99.99%', label: 'Postignuta dostupnost' },
      { value: '+71%', label: 'Korišćenje samousluge' },
    ],
  },
  {
    slug: 'finance-banking',
    title: 'Finansije i Bankarstvo — web dizajn',
    tagline: 'Povjerenje kroz dizajn',
    description:
      'Sigurni, usklađeni, konverzijski fokusirani sajtovi za banke, fintech i finansijske savjetnike.',
    longDescription:
      'Finansijske usluge zahtijevaju savršenu ravnotežu povjerenja, jasnoće i konverzije. Gradimo sajtove koji ispunjavaju rigorozne standarde usklađenosti dok i dalje izgledaju moderno i privlačno.',
    challenges: [
      'Regulatorna usklađenost (FINRA, SEC, GDPR)',
      'Složena objašnjenja proizvoda (krediti, računi, investicije)',
      'Sigurni portali za klijente i tokovi otvaranja računa',
      'Izgradnja povjerenja s maloprodajnom i institucionalnom publikom',
    ],
    capabilities: [
      {
        title: 'Sadržaj spreman za usklađenost',
        description:
          'Tokovi rada i CMS strukture dizajnirane za cikluse pravne i revizorske provjere.',
      },
      {
        title: 'Tokovi otvaranja računa',
        description:
          'Friction-free KYC i onboarding tokovi koji konvertuju bez žrtvovanja sigurnosti.',
      },
      {
        title: 'Kalkulatori i alati',
        description:
          'Kalkulatori za hipoteke, penzije i finansijsko planiranje koji angažuju posjetitelje.',
      },
      {
        title: 'Enterprise sigurnost',
        description:
          'SOC 2 hosting, sigurno rukovanje formama i pen-testirane integracije.',
      },
    ],
    stats: [
      { value: '+165%', label: 'Otvaranja računa' },
      { value: 'SOC 2', label: 'Usklađenost' },
      { value: '12+', label: 'FI klijenata' },
    ],
  },
  {
    slug: 'healthcare-medical',
    title: 'Zdravstvo i Medicina — web dizajn',
    tagline: 'Briga počinje jasnošću',
    description:
      'HIPAA-usklađeni sajtovi za bolnice, ordinacije, medicinske uređaje i digitalno zdravlje.',
    longDescription:
      'Zdravstveni sajtovi nose pravu odgovornost — pomažu ljudima da pronađu zdravstvenu zaštitu, pružaocima da pronađu pacijente i informacijama da se kreću tamo gdje su potrebne.',
    challenges: [
      'HIPAA usklađenost i PHI sigurnost',
      'Imenici pružalaca i zakazivanje termina',
      'Multi-lokacijske prakse i zdravstveni sistemi',
      'Sadržaj edukacije pacijenata i zdravstvena pismenost',
    ],
    capabilities: [
      {
        title: 'HIPAA-usklađena infrastruktura',
        description:
          'Sigurni hosting, BAA i arhitektura dizajnirana oko zaštite PHI-ja.',
      },
      {
        title: 'Pronalazači pružalaca i lokacija',
        description:
          'Pretraživi imenici sa filterima za specijalnost, osiguranje i dostupnost.',
      },
      {
        title: 'Online zakazivanje',
        description:
          'Online zakazivanje termina integrirano s EHR-om i sistemima upravljanja praksom.',
      },
      {
        title: 'Edukacija pacijenata',
        description:
          'Pristupačan, jasan sadržaj koji gradi povjerenje i podržava informirane odluke.',
      },
    ],
    stats: [
      { value: '12k/mj', label: 'Zakazanih termina' },
      { value: 'HIPAA', label: 'Usklađeno' },
      { value: '4.8/5', label: 'Zadovoljstvo pacijenata' },
    ],
  },
  {
    slug: 'law-firm',
    title: 'Advokatske kancelarije — web dizajn',
    tagline: 'Autoritet, jasnoća, konverzija',
    description:
      'Sofisticirani sajtovi za advokatske kancelarije i pravne usluge koji privlače kvalificirane klijente.',
    longDescription:
      'Potencijalni klijenti procjenjuju advokatske firme za sekunde. Gradimo sajtove koji prenose stručnost i povjerenje na prvi pogled, a zatim konvertuju posjetitelje u kvalificirane konsultacije.',
    challenges: [
      'Komuniciranje stručnosti u raznim pravnim oblastima',
      'SEO konkurencija za visoko-vrijedne pravne ključne riječi',
      'Profili advokata i biografije koje grade kredibilitet',
      'Lead capture za konsultacije i upite za predmete',
    ],
    capabilities: [
      {
        title: 'Stranice pravnih oblasti',
        description:
          'Autoritativan sadržaj koji pozicionira vašu firmu i za klijente i za pretraživače.',
      },
      {
        title: 'Profili advokata',
        description:
          'Uglađeni predlošci biografija s akreditacijama, predmetima, publikacijama i medijskim spominjanjima.',
      },
      {
        title: 'Lokalni i nacionalni SEO',
        description:
          'Strategija za rangiranje na konkurentnim pravnim ključnim riječima u vašim jurisdikcijama.',
      },
      {
        title: 'Tokovi konsultacija',
        description:
          'Forme za intake i zakazivanje koje kvalificiraju i konvertuju kandidate.',
      },
    ],
    stats: [
      { value: '+275%', label: 'Zahtjevi za konsultacije' },
      { value: 'Top 3', label: 'Prosj. SEO pozicija' },
      { value: '60+', label: 'Pravnih oblasti' },
    ],
  },
  {
    slug: 'manufacturing',
    title: 'Industrijalni i Proizvodni web dizajn',
    tagline: 'B2B sajtovi koji osvajaju ugovore',
    description:
      'Sajtovi za proizvođače, OEM-ove i industrijske dobavljače koji generiraju kvalificirane lead-ove.',
    longDescription:
      'Industrijski kupci su tehnički, promišljeni i visoko-vrijedni. Gradimo sajtove koji govore njihovim jezikom — s detaljnim podacima o proizvodima, sadržajem sposobnosti i jasnim putevima do angažmana.',
    challenges: [
      'Detaljni katalozi proizvoda s tehničkim specifikacijama i CAD fajlovima',
      'Sadržaj sposobnosti za kupce, inženjere i nabavku',
      'Mreže distributera i tokovi zahtjeva za ponudama',
      'Dugi prodajni ciklusi i njegovanje lead-ova',
    ],
    capabilities: [
      {
        title: 'Katalozi proizvoda',
        description:
          'Pretraživi, filtrirani katalozi s tehničkim specifikacijama, listovima podataka i preuzimljiv asset-ima.',
      },
      {
        title: 'Izjave o sposobnostima',
        description:
          'Detaljni sadržaj sposobnosti koji rezonuje s inženjerskim kupcima.',
      },
      {
        title: 'Tokovi za ponude',
        description:
          'RFQ forme s uploadom fajlova, pametnim rutiranjem i CRM integracijom.',
      },
      {
        title: 'Portali za distributere',
        description:
          'Zaštićena područja za partnere s cijenama, obukama i resursima.',
      },
    ],
    stats: [
      { value: '+210%', label: 'RFQ zahtjevi' },
      { value: '5k+', label: 'Katalogovanih SKU-ova' },
      { value: '85%', label: 'Usvajanje distributera' },
    ],
  },
  {
    slug: 'restaurant',
    title: 'Web dizajn za Restorane i Ugostiteljstvo',
    tagline: 'Sajtovi koji pune stolove',
    description:
      'Ukusne web stranice za restorane, ugostiteljske grupe i prehrambene brendove.',
    longDescription:
      'Odličan restoranski sajt izaziva apetit i sprema ljude za rezervaciju. Gradimo lijepe, brze sajtove koji prikazuju vašu hranu, povećavaju rezervacije i šire vašu bazu pratitelja.',
    challenges: [
      'Prikazivanje hrane s impresivnim slikama i pripovijedanjem',
      'Integracija online naručivanja i rezervacija',
      'Meniji koji se lako ažuriraju i uvijek su ažurirani',
      'Multi-lokacijski lanci s konzistentnim iskustvom brenda',
    ],
    capabilities: [
      {
        title: 'Ureditorski kvalitetan dizajn',
        description:
          'Rasporedi koji ističu vašu hranu i atmosferu na svakom uređaju.',
      },
      {
        title: 'Rezervacije i naručivanje',
        description:
          'OpenTable, Resy i integracije online naručivanja.',
      },
      {
        title: 'Lako upravljanje menijem',
        description:
          'CMS tokovi rada koji osoblju omogućavaju ažuriranje menija i cijena za sekunde.',
      },
      {
        title: 'Multi-lokacijska arhitektura',
        description:
          'Predlošci koji se skaliraju od jednog restorana do nacionalnih lanaca.',
      },
    ],
    stats: [
      { value: '+140%', label: 'Rezervacije' },
      { value: '+88%', label: 'Online narudžbe' },
      { value: '60+', label: 'Opsluživanih lokacija' },
    ],
  },
  {
    slug: 'real-estate',
    title: 'Web dizajn za Nekretnine',
    tagline: 'Listinzi koji prodaju nekretnine',
    description:
      'Sajtovi za agencije za nekretnine, agente, developere i kompanije za upravljanje nekretninama.',
    longDescription:
      'Nekretnine su vizualan, pretraživački intenzivan, hiper-lokalni biznis. Gradimo sajtove s bogatim iskustvima listinga, IDX/MLS integracijama i lead captureom koji isporučuje ozbiljne kupce i prodavce.',
    challenges: [
      'IDX/MLS feedovi s hiljadama konstantno ažuriranih listinga',
      'Pretraga bazirana na mapi i otkrivanje četvrti',
      'Stranice profila agenata i timski modeli agencija',
      'Lead capture i CRM integracija',
    ],
    capabilities: [
      {
        title: 'IDX/MLS integracija',
        description:
          'Live feedovi listinga s bogatim stranicama detalja, galerijama fotografija i sačuvanim pretragama.',
      },
      {
        title: 'Pretraga na mapi',
        description:
          'Interaktivne mape s poligonalnom pretragom, školskim zonama i podacima o četvrtima.',
      },
      {
        title: 'Stranice agenata i timova',
        description:
          'Lijepi profili agenata s aktivnim listinzima, historijom prodaje i recenzijama.',
      },
      {
        title: 'Lead-ovi spremni za CRM',
        description:
          'Tokovi lead capturea koji se rutiraju u Follow Up Boss, kvCORE i glavne real estate CRM-ove.',
      },
    ],
    stats: [
      { value: '50k+', label: 'Listinga opsluživano' },
      { value: '+195%', label: 'Lead capture' },
      { value: '4.9★', label: 'Zadovoljstvo agenata' },
    ],
  },
  {
    slug: 'software-tech',
    title: 'Softver i Tehnologija — web dizajn',
    tagline: 'Sajtovi koji isporučuju',
    description:
      'Marketing sajtovi za SaaS, dev alate i tech kompanije koji povećavaju prijave i demo zahtjeve.',
    longDescription:
      'Tech publika očekuje više — žele brzinu, jasnoću i dokaz. Gradimo SaaS marketing sajtove koji zaslužuju poštovanje tehničkih kupaca dok konvertuju doniosioce odluka.',
    challenges: [
      'Komuniciranje složenih proizvoda više personama',
      'Imenici integracija, dokumentacija i resursi za developere',
      'Stranice cijena koje rukuju složenim nivoima i dodacima',
      'Tokovi besplatnog probnog perioda i rasta vođenog proizvodom',
    ],
    capabilities: [
      {
        title: 'Marketing vođen proizvodom',
        description:
          'Sajtovi izgrađeni oko interaktivnih dema, besplatnih probnih perioda i samouslužnih prijava.',
      },
      {
        title: 'Integracija i dokumentacija',
        description:
          'Lijepe, pretražive biblioteke integracija i dokumentacija za developere.',
      },
      {
        title: 'Cijene i poređenje',
        description:
          'Jasne, konverzijski optimizirane stranice cijena s kalkulatorima i FAQ-ovima.',
      },
      {
        title: 'Priče korisnika',
        description:
          'Uglađene studije slučaja s metrikama koje dokazuju ROI tehničkim kupcima.',
      },
    ],
    stats: [
      { value: '+85%', label: 'Stopa prijava' },
      { value: '95+', label: 'Lighthouse rezultat' },
      { value: '40+', label: 'SaaS klijenata' },
    ],
  },
  {
    slug: 'sports-entertainment',
    title: 'Sport i Zabava — web dizajn',
    tagline: 'Sajtovi na kojima navijači žive',
    description:
      'Sajtovi za timove, ligve, mjesta, festivale i zabavne brendove.',
    longDescription:
      'Navijači sporta i zabave dolaze u valovima i očekuju sadržaj u trenutku kad se pojavi. Gradimo sajtove koji podnose skokove prometa, lijepo isporučuju medije i pretvaraju slučajne posjetitelje u superfanove.',
    challenges: [
      'Masovni skokovi prometa oko utakmica, objava i događaja',
      'Živi rezultati, rasporedi i ažuriranja sadržaja u realnom vremenu',
      'Integracija prodaje karata i merchandisea',
      'Bogati mediji (video, fotografije, highlight reel-ovi) u velikom obimu',
    ],
    capabilities: [
      {
        title: 'Sadržaj u realnom vremenu',
        description:
          'Živi rezultati, rasporedi i ažuriranja sadržaja sinhronizovana s događajima.',
      },
      {
        title: 'Karte i merch',
        description:
          'Ticketmaster, SeatGeek i Shopify integracije za događaje i merchandising.',
      },
      {
        title: 'Iskustva bogata medijima',
        description:
          'Video galerije, highlight reelovi i foto biblioteke optimizirane za brzu isporuku.',
      },
      {
        title: 'Infrastruktura spremna za skokove',
        description:
          'Edge caching i CDN strategije koje podnose promet na dan utakmica i lansiranja.',
      },
    ],
    stats: [
      { value: '10M+', label: 'Mjesečnih posjeta' },
      { value: '0', label: 'Zastoja na dan utakmica' },
      { value: '+92%', label: 'Konverzije karata' },
    ],
  },
];

export function getIndustryBSBySlug(slug: string): IndustryBSContent | undefined {
  return industriesBS.find((i) => i.slug === slug);
}
