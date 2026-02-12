"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="HM Pharmaceuticals" width={44} height={44} />
            <span className="font-extrabold text-xl tracking-tight">HM Pharmaceuticals</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#about" className="hover:text-cyan-600 transition">About</a>
            <a href="#formulations" className="hover:text-cyan-600 transition">Formulations</a>
            <a href="#quality" className="hover:text-cyan-600 transition">Quality</a>
            <a href="#contact" className="hover:text-cyan-600 transition">Contact</a>
            <Link href="/products" className="text-cyan-600">Products</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 px-6 py-28 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold tracking-wide">
              FSSAI Licensed • WHO-GMP Certified
            </span>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Gentle Care for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Every Tiny Step
              </span>
            </h1>

            <p className="mt-6 text-slate-600 text-lg max-w-xl">
              Specializing in pediatric syrups, suspensions, and nasal sprays designed for children’s sensitive needs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products" className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-300/40 transition">
                Explore Catalog
              </Link>
              <a href="#about" className="px-7 py-3 rounded-xl border border-slate-300 hover:bg-white transition">
                Our Story
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <Image src="/images/hero.jpg" alt="Healthcare" width={520} height={420} className="rounded-[2.5rem] shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-[2.5rem] blur-2xl opacity-20" />
            <Image
              src="/images/pediatric.jpg"
              alt="Pediatric Care"
              width={520}
              height={420}
              className="relative rounded-[2.5rem] shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold tracking-wide">
              About HM Pharmaceuticals
            </span>

            <h2 className="text-4xl font-extrabold leading-tight">
              Building Trust in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Pediatric Healthcare
              </span>
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              HM Pharmaceuticals is committed to delivering safe, effective, and child-friendly pharmaceutical formulations.
              With a focus on pediatric syrups, suspensions, and nasal solutions, we ensure every product meets the highest
              standards of quality and care.
            </p>

            <p className="mt-4 text-slate-600">
              Our mission is simple: to support healthy childhoods by combining science, compassion, and innovation.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/products"
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-300/40 transition"
              >
                View Products
              </Link>
              <a
                href="#contact"
                className="px-7 py-3 rounded-xl border border-slate-300 hover:bg-white transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Formulations */}
      <section id="formulations" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold">Featured Formulations</h2>
          <p className="text-slate-500 mt-3">Our most trusted pediatric solutions</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {["Antipyretic", "Respiratory", "Supplements", "Antibiotic"].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-cyan-300/30 transition border"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-cyan-600">{cat}</span>
              <h3 className="mt-3 text-xl font-bold">Premium Pediatric Care</h3>
              <p className="mt-2 text-slate-600 text-sm">
                Formulated for safety, taste, and clinical effectiveness.
              </p>
              <Link href="/products" className="inline-block mt-4 text-cyan-600 font-semibold">
                View Products →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Values */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        {/* (unchanged) */}
      </section>

      {/* Quality */}
      <section id="quality" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold text-center mb-14">Quality & Certifications</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {["FSSAI", "GMP", "PURE"].map((q, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-10 rounded-3xl bg-slate-900 text-white shadow-xl hover:shadow-cyan-500/30 transition"
            >
              <h3 className="text-3xl font-black text-cyan-400">{q}</h3>
              <p className="mt-3 text-slate-300 text-sm">
                Highest manufacturing and pediatric safety standards.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-10 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["contact@hmpharma.com", "+91 98765 43210", "Mumbai, Maharashtra"].map((info, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white shadow-md hover:shadow-cyan-300/30 transition text-center">
              <p className="font-semibold text-slate-700">{info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 text-center">
        © {new Date().getFullYear()} HM Pharmaceuticals. Crafted with care.
      </footer>
    </div>
  );
}