import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-[#0B0E14]">
      <video
        autoPlay loop muted playsInline
        poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        aria-hidden="true"
      >
        <source src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/real_estate_bg_hero_1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90" aria-hidden="true" />

      <div className="relative z-10 flex items-center min-h-screen px-6 md:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Espaces premium. Emplacements stratégiques.
          </motion.p>

          <motion.h1
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8"
          >
            Des espaces qui inspirent le succès
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-300 leading-relaxed max-w-xl mb-10"
          >
            Northline Commercial sélectionne des bureaux, commerces et locaux industriels d'exception pour les entreprises qui refusent de se contenter de l'ordinaire. De l'acquisition à l'aménagement, nous gérons chaque détail avec précision.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link
              to="/properties"
              className="group inline-flex items-center gap-2 bg-[#d4af37] text-[#0B0E14] font-semibold text-sm tracking-wide px-8 py-4 rounded-sm hover:bg-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explorer les biens
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-white text-sm font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded"
            >
              <PlayCircle size={20} className="text-[#d4af37] group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
