import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import TrustedCompanies from '../components/TrustedCompanies';
import About from '../components/About';
import Services from '../components/Services';
import FeaturedProperties from '../components/FeaturedProperties';
import Insights from '../components/Insights';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <TrustedCompanies />
      <About />
      <Services />
      <FeaturedProperties />
      <Insights />
      <CTA />
      <Contact />
    </>
  );
}
