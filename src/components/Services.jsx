import { motion } from 'framer-motion';
import { Key, FileSignature, Briefcase, HardHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  { icon: Key, title: 'Location', description: 'Trouvez l’espace adapté avec des baux structurés pour votre croissance.' },
  { icon: FileSignature, title: 'Acquisitions', description: 'Accompagnement complet de la prospection à la closing.' },
  { icon: Briefcase, title: 'Gestion', description: 'Gestion locative et opérationnelle qui préserve la valeur de vos actifs.' },
  { icon: HardHat, title: 'Aménagement', description: 'Conception et pilotage des travaux pour un espace sur-mesure.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h3 className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-5">Ce que nous faisons</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0E14] leading-tight tracking-tight">
            Des services complets pour chaque étape
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-sm bg-[#0B0E14] flex items-center justify-center mb-5">
                <s.icon className="text-[#d4af37]" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-[#0B0E14] mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.description}</p>
              <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#d4af37] hover:underline">
                En savoir plus <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
