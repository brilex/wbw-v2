'use client';

import React from 'react';
import { motion } from 'framer-motion';
export function TrustBar() {
  const clients = [
  'Acme Corp',
  'TechFlow',
  'Innovate',
  'Nexus',
  'Quantum',
  'Zenith'];

  return (
    <section className="py-16 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          className="text-center text-sm font-medium text-zinc-500 mb-8">
          
          Trusted by teams at
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) =>
          <motion.div
            key={client}
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}
            className="flex items-center justify-center">
            
              <span className="text-xl font-bold text-zinc-400 hover:text-zinc-600 transition-colors">
                {client}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}