import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ARTICLES = [
  { title: 'Anticiper les renouvellements de baux en 2026', category: 'Stratégie', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop' },
  { title: 'Bureaux flexibles vs traditionnels : le choix', category: 'Marché', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop' },
  { title: 'Logistique urbaine : les emplacements gagnants', category: 'Investissement', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop' },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-white py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h3 className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-5">Insights</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0E14] leading-tight tracking-tight">Analyses & tendances</h2>
          </div>
          <Link to="/insights" className="text-sm font-semibold text-[#d4af37] hover:underline inline-flex items-center gap-1">
            Voir tous les articles <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="h-48 overflow-hidden rounded-sm mb-4">
                <img src={a.image} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="text-xs font-semibold text-[#d4af37] tracking-wide uppercase">{a.category}</span>
              <h3 className="text-lg font-semibold text-[#0B0E14] mt-2 group-hover:text-[#d4af37] transition-colors">{a.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
