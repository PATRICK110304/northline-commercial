import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Biens', to: '/properties' },
  { label: 'Services', to: '/services' },
  { label: 'À propos', to: '/about' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Northline Commercial accueil">
      <div className="flex items-end gap-1" aria-hidden="true">
        <span className="w-1.5 h-6 bg-[#d4af37] transition-transform duration-300 group-hover:scale-y-125 origin-bottom" />
        <span className="w-1.5 h-8 bg-[#d4af37] transition-transform duration-300 delay-75 group-hover:scale-y-125 origin-bottom" />
        <span className="w-1.5 h-10 bg-[#d4af37] transition-transform duration-300 delay-150 group-hover:scale-y-125 origin-bottom" />
      </div>
      <div className="leading-none">
        <div className="text-white font-bold text-xl tracking-tight">NORTHLINE</div>
        <div className="text-gray-400 text-[10px] font-semibold tracking-[0.3em]">COMMERCIAL</div>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-[#0B0E14]/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5" aria-label="Navigation principale">
        <Logo />
        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded ${
                  location.pathname === link.to ? 'text-[#d4af37]' : 'text-gray-200 hover:text-[#d4af37]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center border border-[#d4af37] text-[#d4af37] text-sm font-semibold tracking-wide px-6 py-2.5 rounded-sm hover:bg-[#d4af37] hover:text-[#0B0E14] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
        >
          Nous contacter
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden text-white p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0B0E14]/98 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-base font-medium text-gray-200 hover:text-[#d4af37] transition-colors block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center border border-[#d4af37] text-[#d4af37] text-sm font-semibold tracking-wide px-6 py-2.5 rounded-sm hover:bg-[#d4af37] hover:text-[#0B0E14] transition-colors duration-300 mt-2"
                >
                  Nous contacter
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
