import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', website: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.length < 2) e.name = 'Le nom est requis (min. 2 caractères)';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email valide requis';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Le message doit contenir au moins 10 caractères';
    if (form.website) e.website = 'Spam détecté';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (form.website) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), company: form.company.trim(), message: form.message.trim(), website: form.website }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur');
      setStatus('success');
      setForm({ name: '', email: '', company: '', message: '', website: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-[#0B0E14] py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h3 className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-5">Contactez-nous</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">Prêt à trouver votre prochain espace ?</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">Décrivez-nous vos besoins. Notre équipe vous répond sous un jour ouvré avec des options adaptées.</p>
            <div className="space-y-4 text-gray-300 text-sm">
              <p><span className="text-[#d4af37] font-medium">Email :</span> hello@northlinecommercial.com</p>
              <p><span className="text-[#d4af37] font-medium">Horaires :</span> Lun–Ven 9h–17h CST</p>
              <p><span className="text-[#d4af37] font-medium">Siège :</span> North Chicago, Illinois, USA</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-[#162032] rounded-lg p-8 md:p-10 border border-white/5">
            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Message envoyé</h3>
                <p className="text-gray-400">Merci. Nous vous recontacterons très bientôt.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-[#d4af37] hover:underline">Envoyer un autre message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Nom complet <span className="text-[#d4af37]">*</span></label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} autoComplete="name" className={`w-full bg-[#0B0E14] border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors`} placeholder="Jean Dupont" />
                  {errors.name && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email professionnel <span className="text-[#d4af37]">*</span></label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email" className={`w-full bg-[#0B0E14] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors`} placeholder="jean@entreprise.com" />
                  {errors.email && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">Société</label>
                  <input id="company" name="company" type="text" value={form.company} onChange={handleChange} autoComplete="organization" className="w-full bg-[#0B0E14] border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Votre entreprise" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Comment pouvons-nous vous aider ? <span className="text-[#d4af37]">*</span></label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className={`w-full bg-[#0B0E14] border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors resize-none`} placeholder="Je recherche 1 500 m² de bureaux..." />
                  {errors.message && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
                </div>
                {status === 'error' && <p className="text-sm text-red-400 flex items-center gap-2"><AlertCircle size={16} /> Une erreur est survenue. Réessayez ou écrivez-nous directement.</p>}
                <button type="submit" disabled={status === 'submitting'} className="w-full inline-flex items-center justify-center gap-2 bg-[#d4af37] text-[#0B0E14] font-semibold text-sm tracking-wide px-8 py-4 rounded-sm hover:bg-white transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'submitting' ? 'Envoi en cours...' : <>Envoyer le message <Send size={16} /></>}
                </button>
                <p className="text-xs text-gray-500 text-center">Nous ne partageons jamais vos informations. Formulaire sécurisé.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
