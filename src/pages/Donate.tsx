import React from 'react';
import { motion } from 'motion/react';

export default function Donate() {
  return (
    <div className="pt-32 pb-24 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-card p-12 rounded-3xl shadow-xl border border-border text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8">Support Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Your contribution directly funds our testing, vaccination, and awareness programs. Thank you for your generosity.
          </p>
          <div className="space-y-6 text-left bg-muted/50 p-8 rounded-2xl">
            <h4 className="font-bold text-xl text-foreground">Bank Donation Details</h4>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Account Number:</span>
              <span>0672392163</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Account Name:</span>
              <span>Ochigbo Sunday</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Bank Name:</span>
              <span>Guarantee Trust Bank</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-12 rounded-3xl shadow-lg border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-10 text-center">How Your Donation Helps</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Rural Testing Drives", desc: "Provides free screening kits and diagnostic support for underserved communities." },
              { title: "Vaccination Programs", desc: "Funds essential vaccines for individuals at high risk of hepatitis infection." },
              { title: "Public Awareness", desc: "Supports media campaigns and community education to break the silence." },
              { title: "Patient Care & Support", desc: "Assists with treatment costs and long-term care for those diagnosed." }
            ].map((item, i) => (
              <div key={i} className="bg-muted/30 p-6 rounded-2xl border border-border">
                <h4 className="font-bold text-lg text-brand-green mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
