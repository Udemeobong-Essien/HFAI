import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  CheckCircle2,
  Heart
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GetInvolved() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: 'Community Awareness',
    reason: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.reason.trim()) newErrors.reason = 'Please tell us why you want to volunteer';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('https://formspree.io/f/xzdklyjd', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ fullName: '', email: '', phone: '', areaOfInterest: 'Community Awareness', reason: '' });
          setErrors({});
        } else {
          alert('There was an error submitting your application. Please try again.');
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert('There was an error submitting your application. Please try again.');
      }
    }
  };

  return (
    <div className="pt-32 pb-24">
      {/* ... (rest of the component up to Volunteer Section) */}
      
      {/* Volunteer Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-brand-green/10 p-12 rounded-3xl border border-brand-green/20">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex p-4 rounded-full bg-brand-green/20 text-brand-green mb-6">
                  <Heart size={48} fill="currentColor" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Thank You for Joining Us!</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Your application has been received. Our team will review it and get back to you shortly. Together, we can make Africa Hepatitis-free!
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-xl px-8"
                >
                  Submit Another Application
                </Button>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Become a Volunteer</h2>
                  <p className="text-lg text-muted-foreground">
                    Passionate about making a difference? Join our team of dedicated volunteers and help us bring life-saving hepatitis awareness and testing to communities in need.
                  </p>
                </div>
                <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input 
                      name="fullName"
                      placeholder="Jane Doe" 
                      className="rounded-xl h-12" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      name="email"
                      type="email" 
                      placeholder="jane@example.com" 
                      className="rounded-xl h-12" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input 
                      name="phone"
                      type="tel" 
                      placeholder="+234 800 000 0000" 
                      className="rounded-xl h-12" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Area of Interest</label>
                    <select 
                      name="areaOfInterest"
                      className="w-full h-12 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({...formData, areaOfInterest: e.target.value})}
                    >
                      <option>Community Awareness</option>
                      <option>Testing & Screening</option>
                      <option>Administrative Support</option>
                      <option>Event Planning</option>
                    </select>
                  </div>
                  <div className="col-span-full space-y-2">
                    <label className="text-sm font-medium text-foreground">Why do you want to volunteer?</label>
                    <textarea 
                      name="reason"
                      className="w-full h-32 px-3 py-2 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring text-foreground" 
                      placeholder="Tell us about yourself and why you're passionate about HFAI..." 
                      value={formData.reason}
                      onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    />
                    {errors.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}
                  </div>
                  <Button type="submit" className="col-span-full bg-brand-green hover:bg-brand-green/90 text-white rounded-xl h-14 text-lg font-bold mt-4">
                    Submit Volunteer Application
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
