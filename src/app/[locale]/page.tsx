import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Hero from '@/components/homePage/hero';
import Navbar from '@/components/homePage/navbar';
import AboutSection from '@/components/homePage/aboutSection';
import ServicesSection from '@/components/homePage/servicesSection';
import ProductsSection from '@/components/homePage/productsSection';
import ContactSection from '@/components/homePage/contactSection';
import SmoothScroll from '@/components/homePage/smoothScroll';
import ScrollInstructions from '@/components/homePage/scrollInstructions';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <div className="overflow-y-auto scroll-smooth">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        {/* <ContactSection /> */}
      </div>
    </div>
  );
}