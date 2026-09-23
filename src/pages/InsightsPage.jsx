import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';

const ARTICLES = [
  { id: 1, title: 'Comment anticiper les renouvellements de baux en 2026', excerpt: 'Les auto-renouvellements silencieux coûtent cher. Voici comment reprendre le contrôle.', date: '15 sept. 2026', category: 'Stratégie', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Bureaux flexibles vs traditionnels : le choix en 2026', excerpt: 'Les entreprises revisient leurs besoins d’espace. Analyse des tendances et des coûts.', date: '2 sept. 2026', category: 'Marché', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Logistique urbaine : les emplacements qui gagnent', excerpt: 'Les centres de distribution de proximité deviennent stratégiques.', date: '20 août 2026', category: 'Investissement', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'ESG et immobilier commercial : ce que les locataires exigent', excerpt: 'Certifications et performance énergétique deviennent des critères majeurs.', date: '5 août 2026', category: 'Tendances', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
];

export default function InsightsPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#0B0E14] py-16 md:py-24 px-6 md:px-8 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-4">Insights</motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Analyses, tendances et conseils pour les décideurs de l’immobilier commercial.</p>
      </div>
      <section className="bg-white py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {ARTICLES.map((a, i) => (
            <motion.article key={a.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group">
              <div className="relative h-56 overflow-hidden rounded-sm mb-5">
                <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 text-xs font-semibold tracking-wide px-3 py-1 rounded-sm bg-[#d4af37] text-[#0B0E14]">{a.category}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3"><Calendar size={14} />{a.date}</div>
              <h2 className="text-xl font-bold text-[#0B0E14] mb-3 group-hover:text-[#d4af37] transition-colors">{a.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{a.excerpt}</p>
              <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#d4af37] hover:underline">Lire la suite <ArrowRight size={14} /></Link>
            </motion.article>
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
}
