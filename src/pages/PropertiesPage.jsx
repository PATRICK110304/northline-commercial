import FeaturedProperties from '../components/FeaturedProperties';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

export default function PropertiesPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#0B0E14] py-16 px-6 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nos biens</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Parcourez notre portefeuille d'espaces commerciaux premium prêts à être occupés.</p>
      </div>
      <FeaturedProperties />
      <CTA />
      <Contact />
    </div>
  );
}
