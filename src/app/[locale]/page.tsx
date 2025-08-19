import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Hero from '@/components/homePage/hero';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Hero />
    </div>
  );
}