import { motion } from 'framer-motion';
import { Building2, Shield, TrendingUp, Users } from 'lucide-react';

const FEATURES = [
  { icon: Building2, title: 'Espaces premium', desc: 'Sélection rigoureuse de biens d’exception dans les meilleurs emplacements.' },
  { icon: Shield, title: 'Sécurité & conformité', desc: 'Contrats clairs, due diligence complète et protection de vos intérêts.' },
  { icon: TrendingUp, title: 'Optimisation des coûts', desc: 'Négociation experte pour maximiser la valeur de chaque transaction.' },
  { icon: Users, title: 'Accompagnement dédié', desc: 'Un interlocuteur unique du premier contact jusqu’à la signature.' },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-sm bg-[#0B0E14] flex items-center justify-center">
              <f.icon className="text-[#d4af37]" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-[#0B0E14] mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
