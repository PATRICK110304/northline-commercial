import Contact from '../components/Contact';
import CTA from '../components/CTA';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#0B0E14] py-16 px-6 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Parlez-nous de vos besoins immobiliers. Nous vous répondons sous un jour ouvré.</p>
      </div>
      <Contact />
      <CTA />
    </div>
  );
}
