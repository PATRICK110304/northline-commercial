import About from '../components/About';
import Services from '../components/Services';
import TrustedCompanies from '../components/TrustedCompanies';
import CTA from '../components/CTA';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#0B0E14] py-16 px-6 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">À propos de Northline</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Nous accompagnons les entreprises ambitieuses pour sécuriser les espaces qui portent leur croissance.</p>
      </div>
      <About />
      <TrustedCompanies />
      <Services />
      <CTA />
    </div>
  );
}
