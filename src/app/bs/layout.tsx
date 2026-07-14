import { NavbarBS } from '@/src/components/NavbarBS';
import { FooterBS } from '@/src/components/FooterBS';

export default function BSLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarBS />
      {children}
      <FooterBS />
    </>
  );
}
