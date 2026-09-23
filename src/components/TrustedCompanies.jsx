import { motion } from 'framer-motion';

const COMPANIES = ['Apex Corp', 'Horizon Group', 'Summit Partners', 'Vertex Capital', 'Nexus Holdings', 'Pinnacle RE'];

export default function TrustedCompanies() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-8 border-y border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-10">Ils nous font confiance</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {COMPANIES.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-xl font-bold text-gray-300 tracking-tight"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
