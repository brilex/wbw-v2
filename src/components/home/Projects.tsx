'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

export function Projects() {
  const projects = [
    { title: 'ConvertToNext', category: 'Developer Tool · SaaS', color: 'from-emerald-500 to-emerald-600', image: '/ConverttoNext.webp', href: '/work/converttonext' },
    { title: 'Hamada & Co.', category: 'Web Design · SEO', color: 'from-blue-500 to-blue-600', image: '/hamada-co.webp', href: '/work/hamada-co' },
    { title: 'E-commerce Platform', category: 'E-commerce', color: 'from-purple-500 to-purple-600' },
    { title: 'SaaS Marketing Site', category: 'Marketing', color: 'from-emerald-500 to-emerald-600' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
              Selected work
            </h2>
            <p className="text-xl text-zinc-600">Recent projects we're proud of</p>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center text-blue-600 font-medium hover:gap-2 transition-all">
            View all projects
            <ArrowRightIcon className="ml-1 w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                {project.image && project.href ? (
                  <Link href={project.href} className="block w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                ) : (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} group-hover:scale-105 transition-transform duration-500`} />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                  </>
                )}
              </div>
              <div className="flex items-start justify-between">
                <div>
                  {project.href ? (
                    <Link href={project.href}>
                      <h3 className="text-xl font-semibold text-zinc-950 mb-1 group-hover:text-blue-600 transition-colors hover:text-blue-600">
                        {project.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3 className="text-xl font-semibold text-zinc-950 mb-1 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  )}
                  <p className="text-zinc-600">{project.category}</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
