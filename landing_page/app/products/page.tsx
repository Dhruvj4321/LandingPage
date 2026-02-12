"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Category = "ALL" | "RESPIRATORY" | "ANTIBIOTIC" | "SUPPLEMENTS" | "ANTIPYRETIC";

const products = [
  {
    id: 1,
    name: "Low-Temp",
    composition: "Mefenamic Acid + Paracetamol",
    category: "ANTIPYRETIC",
    description: "Effective liquid relief for managing fever and body ache in children.",
    image: "/images/products/syrup.png",
  },
  {
    id: 2,
    name: "ACEBRO Syrup",
    composition: "Acebrophylline + Terbutaline Sulphate + Guaifenesin",
    category: "RESPIRATORY",
    description: "Mucolytic, bronchodilator and expectorant for productive cough relief.",
    image: "/images/products/drops.png",
  },
  {
    id: 3,
    name: "DOXOP CV Dry Syrup",
    composition: "Cefpodoxime Proxetil + Potassium Clavulanate",
    category: "ANTIBIOTIC",
    description: "Broad-spectrum antibiotic for treating bacterial infections.",
    image: "/images/products/tablets.png",
  },
  {
    id: 4,
    name: "HM CLAV 457 Dry Syrup",
    composition: "Amoxycillin + Potassium Clavulanate",
    category: "ANTIBIOTIC",
    description: "Proven antibiotic combination for ENT and skin infections.",
    image: "/images/products/gut.png",
  },
];

const categories: Category[] = ["ALL", "RESPIRATORY", "ANTIBIOTIC", "SUPPLEMENTS", "ANTIPYRETIC"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "ALL" || product.category === activeCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.composition.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
          <span className="text-slate-900">Our </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            Products
          </span>
        </h1>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition
                  ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search product or composition..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 caret-blue-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-br from-blue-400/10 to-cyan-500/10" />

              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>

                <h3 className="text-lg font-bold mb-1 text-slate-900 group-hover:text-blue-600 transition">
                  {product.name}
                </h3>

                <p className="text-xs text-slate-500 mb-3">
                  {product.composition}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-slate-500 mt-20">
            No products found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}