import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

const LINK_COLUMNS = [
  {
    title: 'Biens',
    links: [
      { label: 'Tous les biens', to: '/properties' },
      { label: 'Bureaux', to: '/properties' },
      { label: 'Retail', to: '/properties' },
      { label: 'Industriel', to: '/properties' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Insights', to: '/insights' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Northline Commercial accueil">
      <div className="flex items-end gap-1" aria-hidden="true">
        <span className="w-1.5 h-6 bg-[#d4af37]" />
        <span className="w-1.5 h-8 bg-[#d4af37]" />
        <span className="w-1.5 h-10 bg-[#d4af37]" />
      </div>
      <div className="leading-none">
        <div className="text-white font-bold text-xl tracking-tight">NORTHLINE</div>
        <div className="text-gray-400 text-[10px] font-semibold tracking-[0.3em]">COMMERCIAL</div>
      </div>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0B0E14] border-t border-white/10 pt-16 md:pt-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        <div className="lg:col-span-2">
          <Logo />
          <p className="text-gray-400 text-sm leading-relaxed mt-6 max-w-sm">
            Northline Commercial sélectionne des bureaux, commerces et locaux industriels premium et accompagne les entreprises de la recherche à la signature.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <a href="https://linkedin.com/company/northline-commercial-group" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors duration-300">
              <Linkedin size={17} />
            </a>
            <a href="mailto:hello@northlinecommercial.com" aria-label="Email" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-colors duration-300">
              <Mail size={17} />
            </a>
          </div>
        </div>

        {LINK_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-5">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-400 text-sm hover:text-white transition-colors duration-200 focus:outline-none focus-visible:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Northline Commercial. Tous droits réservés.</p>
        <div className="flex items-center gap-6">
          <Link to="/contact" className="text-gray-500 text-xs hover:text-white transition-colors duration-200">Politique de confidentialité</Link>
          <Link to="/contact" className="text-gray-500 text-xs hover:text-white transition-colors duration-200">Conditions d’utilisation</Link>
        </div>
      </div>
    </footer>
  );
}
