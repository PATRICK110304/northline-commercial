import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROPERTIES = [
  { id: 1, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop', title: 'The Meridian Tower', location: 'Downtown Financial District', specs: '23 200 m²', type: 'Bureaux', status: 'Disponible' },
  { id: 2, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop', title: 'Harbor Point Plaza', location: 'Waterfront Business Park', specs: '16 700 m²', type: 'Retail', status: 'Disponible' },
  { id: 3, image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop', title: 'Ironwood Logistics Center', location: 'North Industrial Corridor', specs: '38 100 m²', type: 'Industriel', status: 'Sous offre' },
  { id: 4, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop', title: 'Summit Corporate Campus', location: 'West Suburban Corridor', specs: '8 800 m²', type: 'Bureaux', status: 'Disponible' },
  { id: 5, image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop', title: 'Gateway Retail Hub', location: 'Central Transit District', specs: '6 000 m²', type: 'Retail', status: 'Disponible' },
  { id: 6, image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop', title: 'Apex Distribution Park', location: 'East Logistics Zone', specs: '48 300 m²', type: 'Industriel', status: 'Disponible' },
];

const FILTERS = ['Tous', 'Bureaux', 'Retail', 'Industriel'];

export default function FeaturedProperties() {
  const [filter, setFilter] = useState('Tous');
  const filtered = filter === 'Tous' ? PROPERTIES : PROPERTIES.filter((p) => p.type === filter);

  return (
    <section id="properties" className="bg-[#0B0E14] py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h3 className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-5">Biens à la une</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">Des espaces prêts pour votre prochain mouvement</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center border border-gray-600 text-white text-sm font-semibold tracking-wide px-6 py-3 rounded-sm hover:border-[#d4af37] hover:text-[#d4af37] transition-colors duration-300 shrink-0">
            Demander l'inventaire <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
        <div className="flex flex-wrap gap-3 mb-12" role="tablist">
          {FILTERS.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)} className={`px-5 py-2 text-sm font-medium rounded-sm transition-colors ${filter === f ? 'bg-[#d4af37] text-[#0B0E14]' : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'}`}>{f}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((property, i) => (
            <motion.article key={property.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="group">
              <Link to={`/properties/${property.id}`}>
                <div className="relative h-64 md:h-72 overflow-hidden rounded-sm bg-[#162032]">
                  <img src={property.image} alt={property.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4"><span className={`text-xs font-semibold tracking-wide px-3 py-1 rounded-sm ${property.status === 'Disponible' ? 'bg-[#d4af37] text-[#0B0E14]' : 'bg-white/90 text-[#0B0E14]'}`}>{property.status}</span></div>
                  <div className="absolute top-4 right-4"><span className="text-xs font-medium tracking-wide px-3 py-1 rounded-sm bg-black/60 text-white backdrop-blur-sm">{property.type}</span></div>
                </div>
                <div className="pt-5">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#d4af37] transition-colors">{property.title}</h3>
                  <p className="flex items-center gap-1.5 text-gray-400 text-sm mb-2"><MapPin size={14} className="text-[#d4af37] shrink-0" />{property.location}</p>
                  <p className="flex items-center gap-1.5 text-gray-500 text-sm"><Maximize2 size={14} className="shrink-0" />{property.specs}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#d4af37]">Voir le bien <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
