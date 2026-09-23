import { motion } from 'framer-motion';

const STATS = [
  { value: '20+', label: 'Années d’expérience' },
  { value: '150+', label: 'Projets réussis' },
  { value: '2M+', label: 'm² placés' },
  { value: '98%', label: 'Clients satisfaits' },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-5">À propos</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0E14] leading-tight tracking-tight mb-6">
            L’immobilier commercial avec exigence et clarté
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Northline Commercial accompagne les entreprises ambitieuses dans la recherche, l’acquisition et la gestion d’espaces de bureaux, retail et industriels. Notre approche combine expertise de marché, rigueur contractuelle et service personnalisé.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Chaque projet est traité avec la même attention : comprendre vos besoins, identifier les meilleures options et vous accompagner jusqu’à la signature — et au-delà.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0B0E14] rounded-lg p-6 text-center"
            >
              <div className="text-3xl font-bold text-[#d4af37] mb-2">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
