import { motion } from 'framer-motion';
import { Key, FileSignature, Briefcase, HardHat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

const SERVICES = [
  {
    icon: Key,
    title: 'Location & Bail',
    description: 'Nous trouvons l’espace adapté à votre croissance et structurons des baux clairs, flexibles et avantageux.',
    details: ['Recherche ciblée', 'Négociation des termes', 'Analyse comparative de marché', 'Accompagnement jusqu’à la signature'],
  },
  {
    icon: FileSignature,
    title: 'Acquisitions',
    description: 'Accompagnement complet de la prospection à la closing pour l’achat de biens commerciaux.',
    details: ['Sourcing exclusif', 'Due diligence technique et financière', 'Négociation d’achat', 'Coordination des intervenants'],
  },
  {
    icon: Briefcase,
    title: 'Gestion de patrimoine',
    description: 'Gestion opérationnelle et locative qui maximise la valeur de vos actifs tout en garantissant la satisfaction des occupants.',
    details: ['Relation locataires', 'Entretien préventif', 'Reporting transparent', 'Optimisation des charges'],
  },
  {
    icon: HardHat,
    title: 'Aménagement & Fit-out',
    description: 'Conception et pilotage des travaux pour transformer un espace brut en lieu de travail performant et inspirant.',
    details: ['Programmation des besoins', 'Coordination architectes & entreprises', 'Suivi de chantier', 'Réception et mise en service'],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#0B0E14] py-16 md:py-24 px-6 md:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Nos services
        </motion.h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Une offre complète pour accompagner les entreprises ambitieuses à chaque étape de leur projet immobilier.
        </p>
      </div>

      <section className="bg-gray-50 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-sm bg-[#0B0E14] flex items-center justify-center mb-6">
                <s.icon className="text-[#d4af37]" size={22} />
              </div>
              <h2 className="text-2xl font-bold text-[#0B0E14] mb-3">{s.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{s.description}</p>
              <ul className="space-y-2 mb-6">
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-[#d4af37] hover:underline">
                Discuter de ce service <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
      <Contact />
    </div>
  );
}
