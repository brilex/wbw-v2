'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function TrustBar() {
  const stats = [
    { value: '7+', label: 'Years experience' },
    { value: '8', label: 'Websites delivered' },
    { value: '+968%', label: 'Search growth (client)' },
    { value: 'Week 1', label: 'First customer for client' },
  ];

  return (
    <section className="py-16 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-zinc-950 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
