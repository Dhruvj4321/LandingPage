"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Category =
  | "ALL"
  | "RESPIRATORY"
  | "ANTIBIOTIC"
  | "SUPPLEMENTS"
  | "ANTIPYRETIC";

const categories: Category[] = [
  "ALL",
  "RESPIRATORY",
  "ANTIBIOTIC",
  "SUPPLEMENTS",
  "ANTIPYRETIC",
];

export default function ProductsClient({ products }: { products: any[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "ALL" || product.category === activeCategory;

      const matchesSearch =
        product.name?.toLowerCase().includes(search.toLowerCase()) ||
        product.composition?.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search, products]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
          <span className="text-slate-900">Our </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            Products
          </span>
        </h1>

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-14">
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

          <input
            type="text"
            placeholder="Search product or composition..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <motion.div
              key={product._id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

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

        {filteredProducts.length === 0 && (
          <p className="text-center text-slate-500 mt-20">
            No products found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}