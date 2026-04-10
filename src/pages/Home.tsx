import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  ArrowRight, 
  Activity,
  Shield,
  Heart,
  Users,
  Target,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center py-32">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute top-20 left-0 right-0 bottom-0 z-0">
          <img 
            src="https://i.imgur.com/4lj7JEj.jpeg" 
            alt="Healthcare in Africa" 
            className="w-full h-full object-cover object-center opacity-80"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay: lighter at top, darker at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
          {/* Bottom fade into background */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-muted/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={item}>
              <Badge className="bg-brand-red text-white border-none mb-6 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                Urgent Mission
              </Badge>
            </motion.div>
            <motion.h1 
              variants={item}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
            >
              Stop the Silent Killer: Join the <span className="text-brand-red">Hepatitis-Free Africa</span> Initiative.
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              With 18 million Nigerians unaware of their status, we are on a mission to bridge the gap through massive awareness, testing, and life-saving care.
            </motion.p>
            <motion.div 
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/impact">
                <Button 
                  size="lg" 
                  className="bg-brand-green hover:bg-brand-green/90 text-white rounded-full px-8 h-14 text-lg shadow-lg w-full sm:w-auto"
                >
                  Our Impact <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-brand-red text-brand-red dark:border-white dark:text-white hover:bg-brand-red hover:text-white dark:hover:bg-white dark:hover:text-brand-black rounded-full px-8 h-14 text-lg w-full sm:w-auto"
                >
                  Learn Our Story
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid - Positioned absolutely or kept in flow? Keeping in flow for now. */}
        <div className="container mx-auto px-6 mt-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Undiagnosed Nigerians', value: '18M+', icon: Search, color: 'text-brand-red' },
              { label: 'Annual Deaths Avoidable', value: '4,000+', icon: Activity, color: 'text-brand-red' },
              { label: 'Project 365 and SDG 3.3 Aligned', value: '100%', icon: Shield, color: 'text-foreground' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className={`inline-flex p-3 rounded-xl bg-muted mb-4 ${stat.color}`}>
                  <stat.icon size={32} />
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="pt-24 pb-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Mission: Eradicating Hepatitis Through Strategic Action
            </h2>
            <p className="text-lg text-muted-foreground">
              We are dedicated to a future where no African dies from preventable liver disease. Our approach is built on four pillars of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Massive Awareness",
                desc: "Breaking the stigma and silence surrounding viral hepatitis through education.",
                icon: Zap,
                color: "bg-brand-red/10 text-brand-red"
              },
              {
                title: "Accessible Testing",
                desc: "Bringing screening services directly to the communities that need them most.",
                icon: Target,
                color: "bg-brand-green/10 text-brand-green"
              },
              {
                title: "Life-Saving Care",
                desc: "Connecting diagnosed individuals with the treatment and support they deserve.",
                icon: Heart,
                color: "bg-brand-red/10 text-brand-red"
              },
              {
                title: "Policy Advocacy",
                desc: "Working with governments to integrate hepatitis care into national health plans.",
                icon: Users,
                color: "bg-brand-green/10 text-brand-green"
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:border-brand-green/30 transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl mb-6 ${value.color}`}>
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
