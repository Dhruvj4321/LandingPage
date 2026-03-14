"use client";

import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Pill, Stethoscope, HeartPulse, FlaskConical } from "lucide-react";

const formulations = [
  { name: "Antipyretic", icon: HeartPulse },
  { name: "Respiratory", icon: Stethoscope },
  { name: "Supplements", icon: FlaskConical },
  { name: "Antibiotic", icon: Pill },
];

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="HM Pharmaceuticals" width={44} height={44} />
            <span className="font-extrabold text-xl tracking-tight">HM Pharmaceuticals LLP</span>
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
              FSSAI Licensed
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
            <Image src="/images/hero.png" alt="Healthcare" width={520} height={420} className="rounded-[2.5rem] shadow-2xl" />
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

  <div className="text-center mb-16">
    <h2 className="text-4xl font-extrabold">
      Featured <span className="text-cyan-600">Formulations</span>
    </h2>
    <p className="text-slate-500 mt-3">
      Explore our key pediatric therapeutic categories
    </p>
  </div>

  <div className="grid md:grid-cols-4 gap-8">

    {formulations.map((item, i) => {
      const Icon = item.icon;

      return (
        <Link key={i} href="/products">

          <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            className="group cursor-pointer p-10 rounded-3xl bg-white border shadow-md hover:shadow-cyan-300/30 transition flex flex-col items-center text-center"
          >
            <div className="mb-5 p-4 rounded-full bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition">
              <Icon size={30} />
            </div>

            <h3 className="text-lg font-semibold text-slate-800 group-hover:text-cyan-600 transition">
              {item.name}
            </h3>

          </motion.div>

        </Link>
      );
    })}

  </div>
</section>

      {/* Mission & Values - Redesigned */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Mission & Values</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Founded in Mulund, Mumbai, HM Pharmaceuticals was built on the belief that pediatric care deserves precision, compassion, and trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Our Mission",
              text: "To provide premium-quality pediatric liquid medicines that balance safety, efficacy, and affordability."
            },
            {
              title: "Our Vision",
              text: "To become a trusted global benchmark in pediatric pharmaceutical innovation and safety."
            },
            {
              title: "Our Values",
              text: "Integrity, scientific excellence, and compassionate care guide every formulation we create."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-xl hover:shadow-cyan-300/40 transition-all"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 blur-xl group-hover:opacity-20 transition" />

              <h3 className="relative text-2xl font-extrabold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="relative text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Quality */}
<section
  id="quality"
  className="max-w-7xl mx-auto px-6 py-28 text-center"
>
  <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
    Quality & Certifications
  </h2>

  <p className="max-w-2xl mx-auto text-slate-500 mb-16 text-lg">
    Our products follow strict regulatory and quality standards to
    ensure safety, reliability, and global compliance.
  </p>

  <div className="grid gap-10 md:grid-cols-3">

    {/* FSSAI */}
    <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-10 flex flex-col items-center text-center">

      {/* Badge */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-50 text-cyan-600 text-xl font-bold">
        ✓
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        FSSAI
      </h3>

      <p className="text-sm text-slate-500 mt-1">
        Food Safety and Standards Authority of India
      </p>

      <div className="w-10 h-[2px] bg-cyan-400 my-6"></div>

      <p className="text-slate-600 text-sm leading-relaxed">
        Ensures compliance with national food safety regulations,
        maintaining strict standards for safe and reliable healthcare
        formulations.
      </p>

      <span className="mt-6 text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
        Government Approved
      </span>

    </div>

    {/* MSME */}
    <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-10 flex flex-col items-center text-center">

      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 text-xl font-bold">
        ✓
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        MSME
      </h3>

      <p className="text-sm text-slate-500 mt-1">
        Micro, Small & Medium Enterprises
      </p>

      <div className="w-10 h-[2px] bg-indigo-400 my-6"></div>

      <p className="text-slate-600 text-sm leading-relaxed">
        Recognized under the MSME framework supporting innovation,
        sustainable manufacturing, and responsible industry practices.
      </p>

      <span className="mt-6 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
        Government Recognized
      </span>

    </div>

    {/* FDA */}
    <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-10 flex flex-col items-center text-center">

      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xl font-bold">
        ✓
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        FDA
      </h3>

      <p className="text-sm text-slate-500 mt-1">
        Food and Drug Administration
      </p>

      <div className="w-10 h-[2px] bg-blue-400 my-6"></div>

      <p className="text-slate-600 text-sm leading-relaxed">
        Aligns with internationally recognized pharmaceutical safety
        standards ensuring global regulatory compliance.
      </p>

      <span className="mt-6 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
        Global Standard
      </span>

    </div>

  </div>
</section>
      

{/* Contact */}
<section id="contact" className="bg-slate-50 py-24">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-extrabold mb-14 text-center">
      Contact <span className="text-cyan-600">Us</span>
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* Address */}
      <div className="p-8 rounded-3xl bg-white shadow-md hover:shadow-cyan-300/30 transition text-center flex flex-col items-center">
        <div className="mb-4 p-3 rounded-full bg-cyan-100 text-cyan-600">
          <MapPin size={28} />
        </div>

        <h3 className="font-semibold text-lg mb-2">Office Address</h3>

        <p className="text-slate-600 text-sm leading-relaxed">
          Gala No. 109, KK Gupta Industrial Estate<br/>
          Jawahar Talkies, Mulund West<br/>
          Mumbai – 400080
        </p>

        <a
          href="https://maps.google.com/?q=KK+Gupta+Industrial+Estate+Mulund+West+Mumbai"
          target="_blank"
          className="mt-4 text-cyan-600 text-sm font-semibold hover:underline"
        >
          View on Map
        </a>
      </div>

      {/* Phone */}
      <div className="p-8 rounded-3xl bg-white shadow-md hover:shadow-cyan-300/30 transition text-center flex flex-col items-center">
        <div className="mb-4 p-3 rounded-full bg-cyan-100 text-cyan-600">
          <Phone size={28} />
        </div>

        <h3 className="font-semibold text-lg mb-2">Phone</h3>

        <a
          href="tel:+919323137664"
          className="text-slate-700 font-medium hover:text-cyan-600 transition"
        >
          +91 9323137664
        </a>
      </div>

      {/* Email */}
      <div className="p-8 rounded-3xl bg-white shadow-md hover:shadow-cyan-300/30 transition text-center flex flex-col items-center">
        <div className="mb-4 p-3 rounded-full bg-cyan-100 text-cyan-600">
          <Mail size={28} />
        </div>

        <h3 className="font-semibold text-lg mb-2">Email</h3>

        <a
          href="mailto:hmpharmaceuticalsmulund@gmail.com"
          className="text-slate-700 font-medium hover:text-cyan-600 transition"
        >
          hmpharmaceuticalsmulund@gmail.com
        </a>
      </div>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 text-center">
        © {new Date().getFullYear()} HM Pharmaceuticals. Crafted with care.
      </footer>
    </div>
  );
}