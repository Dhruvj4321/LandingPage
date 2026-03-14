"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

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
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          <span className="text-slate-900">Our </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
            Products
          </span>
        </h1>

        <p className="text-slate-500 text-lg">
          Discover our trusted pediatric formulations designed for safety and effectiveness.
        </p>
      </div>

      {/* FILTER + SEARCH */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">

        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all
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
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-24">

        {filteredProducts.map((product, i) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -8 }}
            onClick={() => setSelectedProduct(product)}
            className="cursor-pointer group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md hover:shadow-2xl transition"
          >

            {/* PRODUCT IMAGE */}
            <div className="relative h-56 w-full bg-slate-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6 group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* PRODUCT CONTENT */}
            <div className="p-6">

              <span className="text-xs font-semibold uppercase text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                {product.category}
              </span>

              <h3 className="text-xl font-bold mt-3 text-slate-900 group-hover:text-blue-600 transition">
                {product.name}
              </h3>

              <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                {product.composition}
              </p>

              <p className="text-sm text-slate-600 mt-3 line-clamp-3">
                {product.description}
              </p>

              <div className="mt-4 text-sm font-semibold text-blue-600">
                View Details →
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* PRODUCT MODAL */}
      <AnimatePresence>
  {selectedProduct && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProduct(null)}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] overflow-hidden"
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">

          {/* PRODUCT IMAGE */}
          <div className="relative bg-slate-50 h-[320px] md:h-full flex items-center justify-center">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              fill
              className="object-contain p-10"
            />
          </div>

          {/* PRODUCT INFO */}
          <div className="p-8 flex flex-col justify-center">

            <span className="inline-block w-fit text-xs font-semibold uppercase tracking-wide text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
              {selectedProduct.category}
            </span>

            <h2 className="text-3xl font-bold text-slate-900 mt-4">
              {selectedProduct.name}
            </h2>

            <div className="mt-4">
              <p className="text-xs uppercase font-semibold text-slate-400 mb-1">
                Composition
              </p>

              <p className="text-slate-700 text-sm">
                {selectedProduct.composition}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase font-semibold text-slate-400 mb-1">
                Description
              </p>

              <p className="text-slate-600 text-sm leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-8 w-fit px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg transition"
            >
              Close
            </button>

          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {filteredProducts.length === 0 && (
        <p className="text-center text-slate-500 pb-24">
          No products found matching your search.
        </p>
      )}
    </div>
  );
}