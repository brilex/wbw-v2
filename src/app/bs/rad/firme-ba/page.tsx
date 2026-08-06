import type { Metadata } from 'next';
import { CaseStudyFirmeBaBS } from '@/src/views/bs/CaseStudyFirmeBaBS';

export const metadata: Metadata = {
  title: 'firme.ba — Programski poslovni direktorij | WBW studija slučaja',
  description:
    'Kako smo 88.000 sirovih zapisa iz FIA registra pretvorili u pretraživ i indeksabilan direktorij bosanskih firmi — generisanje stranica s pragom, vlastiti pSEO audit CLI i 93,9% manje duplikata meta opisa.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/rad/firme-ba' },
  openGraph: {
    title: 'firme.ba — Programski poslovni direktorij | WBW studija slučaja',
    description:
      'Pretvaranje 88.000 sirovih zapisa iz državnog registra u pretraživ direktorij — bez ijedne stranice tankog sadržaja.',
    url: 'https://www.webuildsites.net/bs/rad/firme-ba',
    images: ['/firme-ba.webp'],
  },
};

export default function FirmeBaCaseStudyBSPage() {
  return <CaseStudyFirmeBaBS />;
}
