import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <section id="about" className="bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-8 leading-tight">
                Our Vision for a <span className="text-brand-green">Healthy Africa</span>.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  The Hepatitis-Free Africa Initiative (HFAI) was born from the real-life experience of Sunday Ochigbo. Witnessing the devastating impact of viral hepatitis firsthand, Sunday recognized a critical gap in public health: millions were dying simply because they didn't know their status.
                </p>
                <p>
                  Driven by passion and a commitment to public health, HFAI works tirelessly to ensure every African knows their status. Our "Prevent. Detect. Protect." mandate is the cornerstone of our strategy to eliminate the scourge of viral hepatitis.
                </p>
                <p>
                  We are partnering with stakeholders, from government bodies to local communities, to implement strategic advocacy and life-saving interventions across the continent.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-green mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-black">Prevent</h4>
                    <p className="text-sm text-gray-500">Massive vaccination campaigns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-green mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-black">Detect</h4>
                    <p className="text-sm text-gray-500">Widespread testing and screening.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-green mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-black">Protect</h4>
                    <p className="text-sm text-gray-500">Life-saving care and support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-green mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-brand-black">Advocate</h4>
                    <p className="text-sm text-gray-500">Policy change and awareness.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/africa-health/800/800" 
                  alt="HFAI Community Work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-green text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                <p className="text-2xl font-bold mb-1">SDG Goal 3</p>
                <p className="text-sm opacity-90">Committed to ensuring healthy lives and promoting well-being for all at all ages.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission & Values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Our Mission",
                desc: "To stop the spread of hepatitis through awareness, testing, vaccination, and care.",
                icon: Target,
                color: "bg-brand-red/10 text-brand-red"
              },
              {
                title: "Our Vision",
                desc: "A Hepatitis-Free Africa where everyone knows their status and live healthy.",
                icon: CheckCircle2,
                color: "bg-brand-green/10 text-brand-green"
              },
              {
                title: "Integrity",
                desc: "We operate with transparency and honesty in all our partnerships and interventions.",
                icon: Shield,
                color: "bg-brand-green/10 text-brand-green"
              },
              {
                title: "Community-Centric",
                desc: "We prioritize the needs of the communities we serve, ensuring our solutions are culturally relevant and accessible.",
                icon: Users,
                color: "bg-brand-red/10 text-brand-red"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-brand-green/30 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl mb-6 ${item.color}`}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
