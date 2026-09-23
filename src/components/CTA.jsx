import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
      >
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Prêt à franchir le pas ?
          </h2>
          <p className="text-gray-300 text-lg max-w-xl">
            Parlons de votre prochain espace. Notre équipe est là pour vous accompagner avec clarté et exigence.
          </p>
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 bg-[#d4af37] text-[#0B0E14] font-semibold text-sm tracking-wide px-8 py-4 rounded-sm hover:bg-white transition-colors duration-300 shrink-0"
        >
          Prendre contact
          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}
