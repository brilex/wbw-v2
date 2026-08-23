'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full">
                WordPress &amp; Next.js
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-950 mb-6 leading-[1.1]">
              Web development with SEO built in from day one.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl">
              Most agencies build something that looks good and hope search
              traffic follows. We're an SEO-friendly web design company —
              WordPress and Next.js, hand-written, no templates, fixed price.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center">
                Start a project
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 bg-white border-2 border-zinc-200 text-zinc-950 font-semibold rounded-xl hover:border-zinc-300 transition-colors inline-flex items-center justify-center">
                View our work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual - Animated SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative hidden lg:block">
            <HeroSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroSVG() {
  const nodes = [
    { id: 1, cx: 80, cy: 100, r: 6, delay: 0 },
    { id: 2, cx: 220, cy: 60, r: 8, delay: 0.3 },
    { id: 3, cx: 360, cy: 110, r: 6, delay: 0.6 },
    { id: 4, cx: 140, cy: 220, r: 10, delay: 0.2 },
    { id: 5, cx: 300, cy: 240, r: 7, delay: 0.5 },
    { id: 6, cx: 80, cy: 360, r: 6, delay: 0.4 },
    { id: 7, cx: 240, cy: 380, r: 9, delay: 0.7 },
    { id: 8, cx: 380, cy: 340, r: 6, delay: 0.1 },
  ];

  const connections = [
    { from: nodes[0], to: nodes[1], delay: 0.2 },
    { from: nodes[1], to: nodes[2], delay: 0.4 },
    { from: nodes[0], to: nodes[3], delay: 0.6 },
    { from: nodes[1], to: nodes[3], delay: 0.8 },
    { from: nodes[1], to: nodes[4], delay: 1.0 },
    { from: nodes[2], to: nodes[4], delay: 1.2 },
    { from: nodes[3], to: nodes[4], delay: 1.4 },
    { from: nodes[3], to: nodes[5], delay: 1.6 },
    { from: nodes[3], to: nodes[6], delay: 1.8 },
    { from: nodes[4], to: nodes[6], delay: 2.0 },
    { from: nodes[4], to: nodes[7], delay: 2.2 },
    { from: nodes[5], to: nodes[6], delay: 2.4 },
    { from: nodes[6], to: nodes[7], delay: 2.6 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Floating browser frame */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 right-0 z-20 w-56 bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-50 border-b border-zinc-100">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="ml-3 flex-1 h-4 bg-white rounded-md border border-zinc-200" />
        </div>
        <div className="p-4 space-y-2">
          <motion.div
            animate={{ width: ['40%', '70%', '40%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 bg-blue-600 rounded"
          />
          <div className="h-2 bg-zinc-200 rounded w-full" />
          <div className="h-2 bg-zinc-200 rounded w-5/6" />
          <div className="h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mt-3" />
        </div>
      </motion.div>

      {/* Animated network SVG */}
      <svg viewBox="0 0 460 460" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </radialGradient>
        </defs>

        {connections.map((conn, i) => (
          <motion.line
            key={`line-${i}`}
            x1={conn.from.cx} y1={conn.from.cy}
            x2={conn.to.cx} y2={conn.to.cy}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: conn.delay, ease: 'easeOut' }}
          />
        ))}

        {connections.slice(0, 6).map((conn, i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="3"
            fill="#2563eb"
            initial={{ cx: conn.from.cx, cy: conn.from.cy, opacity: 0 }}
            animate={{
              cx: [conn.from.cx, conn.to.cx],
              cy: [conn.from.cy, conn.to.cy],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2.5, delay: conn.delay + 1.5 + i * 0.4, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
          />
        ))}

        {nodes.map((node) => (
          <g key={node.id}>
            <motion.circle cx={node.cx} cy={node.cy} r={node.r * 3} fill="url(#nodeGlow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle cx={node.cx} cy={node.cy} r={node.r} fill="none" stroke="#2563eb" strokeWidth="1.5"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
              transition={{ duration: 2.5, delay: node.delay + 0.5, repeat: Infinity, ease: 'easeOut' }}
              style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            />
            <motion.circle cx={node.cx} cy={node.cy} r={node.r} fill="#2563eb"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: node.delay, ease: 'backOut' }}
              style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            />
            <circle cx={node.cx - node.r * 0.3} cy={node.cy - node.r * 0.3} r={node.r * 0.3} fill="white" opacity="0.5" />
          </g>
        ))}
      </svg>

      {/* Floating geometric accents */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-4 w-16 h-16 rounded-2xl bg-white shadow-xl border border-zinc-100 flex items-center justify-center">
        <div className="w-8 h-8 rounded-lg bg-blue-600" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-32 left-0 px-3 py-1.5 rounded-full bg-white shadow-lg border border-zinc-100 text-xs font-semibold text-blue-600">
        ⚡ 99 PageSpeed
      </motion.div>
    </div>
  );
}
