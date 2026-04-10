import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('https://formspree.io/f/mkoplkpv', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
        } else {
          alert('There was an error sending your message. Please try again.');
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert('There was an error sending your message. Please try again.');
      }
    }
  };

  return (
    <div className="pt-32 pb-24">
      <section id="contact" className="bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-6">
              Reach Out to the HFAI Team.
            </h2>
            <p className="text-lg text-gray-600">
              Transparency and direct communication are key to our mission. We are ready to provide information on vaccination and partnership opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-gray-50 p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-brand-green/10 text-brand-green mb-6">
                <MapPin size={32} />
              </div>
              <h4 className="text-xl font-bold text-brand-black mb-2">Visit Us</h4>
              <p className="text-gray-600">Luvu road, Masaka Area 1,<br />Karu LGA, Nasarawa State.</p>
            </Card>
            <Card className="border-none shadow-lg bg-gray-50 p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-brand-red/10 text-brand-red mb-6">
                <Phone size={32} />
              </div>
              <h4 className="text-xl font-bold text-brand-black mb-2">Call Us</h4>
              <p className="text-gray-600">+234 903 628 1782</p>
              <p className="text-sm text-gray-400 mt-2">Mon - Fri, 9am - 5pm</p>
            </Card>
            <Card className="border-none shadow-lg bg-gray-50 p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-brand-black/10 text-brand-black mb-6">
                <Mail size={32} />
              </div>
              <h4 className="text-xl font-bold text-brand-black mb-2">Email Us</h4>
              <p className="text-gray-600">hfai.info@gmail.com</p>
              <p className="text-sm text-gray-400 mt-2">We respond within 24 hours</p>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-10 bg-brand-green text-white">
                  <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                  <p className="mb-8 opacity-80">Have questions about hepatitis testing or want to support our mission? Our team is ready to help.</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Twitter size={20} />
                      </div>
                      <span>@official_HFAI</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Linkedin size={20} />
                      </div>
                      <span>Hepatitis-Free Africa Initiative</span>
                    </div>
                  </div>
                </div>
                <div className="p-10 bg-white">
                  {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 h-full flex flex-col justify-center items-center"
                    >
                      <div className="inline-flex p-3 rounded-full bg-brand-green/20 text-brand-green mb-4">
                        <Heart size={32} fill="currentColor" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-black mb-2">Thank You!</h3>
                      <p className="text-gray-600 mb-6">
                        Your message has been sent successfully. We'll get back to you as soon as possible.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white rounded-xl"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="space-y-1">
                        <Input 
                          name="name"
                          placeholder="Your Name" 
                          className="rounded-xl h-12" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                      </div>
                      <div className="space-y-1">
                        <Input 
                          name="email"
                          type="email" 
                          placeholder="Your Email" 
                          className="rounded-xl h-12" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                      </div>
                      <div className="space-y-1">
                        <Textarea 
                          name="message"
                          placeholder="Your Message" 
                          className="rounded-xl min-h-[150px]" 
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                        {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                      </div>
                      <Button type="submit" className="w-full bg-brand-green hover:bg-brand-green/90 text-white rounded-xl h-12 font-bold">
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
