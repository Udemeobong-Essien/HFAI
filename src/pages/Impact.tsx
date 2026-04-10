import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Impact() {
  return (
    <div className="pt-32 pb-24">
      <section id="impact" className="bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-6">
              Taking Action: Awareness, Testing, and Vaccination.
            </h2>
            <p className="text-lg text-gray-600">
              Showcasing our alignment with the Federal Government’s "Project 365" and our tangible results on the ground.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rural Testing Drives",
                desc: "Reaching underserved communities in Nasarawa State with free screening and diagnosis.",
                image: "https://picsum.photos/seed/testing/600/400",
                tag: "Nasarawa"
              },
              {
                title: "Nationwide Awareness",
                desc: "Breaking the silence through media campaigns and community education programs.",
                image: "https://picsum.photos/seed/awareness/600/400",
                tag: "Nationwide"
              },
              {
                title: "Vaccination Programs",
                desc: "Providing essential protection to those most at risk of contracting viral hepatitis.",
                image: "https://picsum.photos/seed/vaccine/600/400",
                tag: "Prevention"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative h-64 overflow-hidden cursor-pointer">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-brand-green text-white border-none">{item.tag}</Badge>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-auto"
                        referrerPolicy="no-referrer"
                      />
                    </DialogContent>
                  </Dialog>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-brand-black mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
                    <Button variant="link" className="p-0 text-brand-green font-bold hover:text-brand-green/80">
                      Read More <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-brand-black text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Turning the Tide Against Liver Disease</h3>
                <p className="text-lg text-gray-400 mb-8">
                  Our programs are designed to stop the spread and provide care to those most at risk. Together, we are realizing a healthier, hepatitis-free continent.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Award className="text-brand-green" />
                    <span>Project 365 Certified</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <p className="text-3xl font-bold text-brand-green mb-1">10k</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Reached</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <p className="text-3xl font-bold text-brand-red mb-1">1k+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Tested</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <p className="text-3xl font-bold text-white mb-1">1k+</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Vaccinated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
