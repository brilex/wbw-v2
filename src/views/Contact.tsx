'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, LinkedinIcon } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Server error');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Let's build together
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Have a project in mind? We'd love to hear about it. Get in touch
              and let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-bold text-zinc-950 mb-8">
                Get in touch
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-950 mb-1">Email</h3>
                    <a
                      href="mailto:info@webuildsites.net"
                      className="text-zinc-600 hover:text-blue-600 transition-colors">
                      info@webuildsites.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-950 mb-1">Phone</h3>
                    <a
                      href="tel:+38762827306"
                      className="text-zinc-600 hover:text-blue-600 transition-colors">
                      +387 62 827 306
                    </a>
                  </div>
                </div>

              </div>

              <div>
                <h3 className="font-semibold text-zinc-950 mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/armin-sehic-046394b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-600 hover:text-blue-600 hover:border-blue-600 transition-all"
                    aria-label="LinkedIn">
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-zinc-950 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${errors.name ? 'border-red-500' : 'border-zinc-200'}`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-zinc-950 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all ${errors.email ? 'border-red-500' : 'border-zinc-200'}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-zinc-950 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-semibold text-zinc-950 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all">
                      <option value="">Select a project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="wordpress">WordPress</option>
                      <option value="csr-to-ssr-migration">CSR to SSR / SSG Migration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-zinc-950 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none ${errors.message ? 'border-red-500' : 'border-zinc-200'}`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-600/20">
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-green-600 font-medium">
                      Message sent! We'll be in touch soon.
                    </motion.p>
                  )}

                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-red-600 font-medium">
                      Something went wrong. Please try again or email us directly.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
