import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Maximize2, ArrowLeft, Building2 } from 'lucide-react';
import Contact from '../components/Contact';

const PROPERTIES = {
  1: { title: 'The Meridian Tower', location: 'Downtown Financial District', specs: '23 200 m²', type: 'Bureaux', status: 'Disponible', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop', description: 'Tour emblématique au cœur du quartier financier. Espaces de bureaux de standing avec vues panoramiques.', features: ['Certification LEED Gold', 'Lobby 24/7', 'Terrasse privée', 'Parking souterrain', 'Fibre optique', 'Espaces collaboratifs'] },
  2: { title: 'Harbor Point Plaza', location: 'Waterfront Business Park', specs: '16 700 m²', type: 'Retail', status: 'Disponible', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop', description: 'Ensemble commercial moderne en front de mer, idéal pour les enseignes premium.', features: ['Visibilité exceptionnelle', 'Accès piéton fort', 'Parkings abondants', 'Terrasses extérieures'] },
  3: { title: 'Ironwood Logistics Center', location: 'North Industrial Corridor', specs: '38 100 m²', type: 'Industriel', status: 'Sous offre', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1600&auto=format&fit=crop', description: 'Plateforme logistique dernière génération avec quais de chargement multiples.', features: ['Hauteur libre 12 m', 'Quais à niveau', 'Cour de manœuvre large', 'Sécurité 24/7'] },
};

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = PROPERTIES[id] || PROPERTIES[1];

  return (
    <div className="pt-20">
      <div className="relative h-[50vh] md:h-[60vh]">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
          <Link to="/properties" className="inline-flex items-center gap-2 text-white/80 hover:text-[#d4af37] text-sm mb-4">
            <ArrowLeft size={16} /> Retour aux biens
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{property.title}</h1>
          <p className="flex items-center gap-2 text-gray-300"><MapPin size={16} className="text-[#d4af37]" /> {property.location}</p>
        </div>
      </div>

      <section className="bg-white py-16 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-[#d4af37] text-[#0B0E14] text-sm font-semibold rounded-sm">{property.status}</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-sm flex items-center gap-1"><Building2 size={14} /> {property.type}</span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-sm flex items-center gap-1"><Maximize2 size={14} /> {property.specs}</span>
            </div>
            <h2 className="text-2xl font-bold text-[#0B0E14] mb-4">Description</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{property.description}</p>
            <h3 className="text-xl font-bold text-[#0B0E14] mb-4">Caractéristiques</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-700"><span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />{f}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0B0E14] rounded-lg p-8 text-white h-fit">
            <h3 className="text-xl font-bold mb-4">Intéressé par ce bien ?</h3>
            <p className="text-gray-400 text-sm mb-6">Contactez-nous pour une visite ou recevoir le dossier complet.</p>
            <Link to="/contact" className="block w-full text-center bg-[#d4af37] text-[#0B0E14] font-semibold py-3 rounded-sm hover:bg-white transition-colors">Demander une visite</Link>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}
