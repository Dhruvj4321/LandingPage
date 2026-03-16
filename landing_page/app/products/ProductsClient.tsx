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

const categoryMeta: Record<Category, { label: string; accent: string }> = {
  ALL: { label: "All Products", accent: "#1a3a5c" },
  RESPIRATORY: { label: "Respiratory", accent: "#1e6a8e" },
  ANTIBIOTIC: { label: "Antibiotic", accent: "#0d4f6e" },
  SUPPLEMENTS: { label: "Supplements", accent: "#2a7a4f" },
  ANTIPYRETIC: { label: "Antipyretic", accent: "#6b2d5e" },
};

export default function ProductsClient({ products }: { products: any[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f5f0",
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

        .hm-nav-pill {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 8px 20px;
          border: 1px solid #c8bfaf;
          background: transparent;
          color: #6b6056;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .hm-nav-pill::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #1a3a5c;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
          z-index: 0;
        }
        .hm-nav-pill:hover::before,
        .hm-nav-pill.active::before {
          transform: scaleX(1);
        }
        .hm-nav-pill span {
          position: relative;
          z-index: 1;
        }
        .hm-nav-pill:hover span,
        .hm-nav-pill.active span {
          color: #fff;
        }
        .hm-nav-pill.active {
          border-color: #1a3a5c;
        }

        .hm-search {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.08em;
          border: none;
          border-bottom: 1px solid #c8bfaf;
          background: transparent;
          color: #2c2420;
          padding: 10px 0 10px 32px;
          outline: none;
          width: 280px;
          transition: border-color 0.3s;
        }
        .hm-search::placeholder { color: #b0a898; }
        .hm-search:focus { border-bottom-color: #1a3a5c; }

        .product-card {
          background: #fff;
          border: 1px solid #e8e0d4;
          cursor: pointer;
          transition: box-shadow 0.4s ease, transform 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .product-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #1a3a5c, #2a7a8e);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .product-card:hover::after { transform: scaleX(1); }
        .product-card:hover {
          box-shadow: 0 20px 60px rgba(26,58,92,0.12);
          transform: translateY(-4px);
        }

        .cat-badge {
          font-family: 'Montserrat', sans-serif;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .view-link {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #1a3a5c;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: gap 0.2s ease;
        }
        .product-card:hover .view-link { gap: 14px; }
        .view-link::after {
          content: '→';
          font-size: 12px;
        }

        .modal-close {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: #1a3a5c;
          color: #fff;
          border: none;
          padding: 12px 28px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .modal-close:hover { background: #0d2540; }

        .divider-line {
          width: 40px;
          height: 1px;
          background: #c8bfaf;
          margin: 20px 0;
        }

        .meta-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b0a898;
          margin-bottom: 8px;
        }

        .scroll-hint {
          animation: scrollBounce 2s ease-in-out infinite;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }

        /* Grain overlay */
        .grain-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 128px;
        }
      `}</style>

      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      {/* ── PAGE HEADER ── */}
      <div
        style={{
          position: "relative",
          background: "#1a3a5c",
          padding: "100px 48px 80px",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 300, height: 300,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: -40, right: -40,
          width: 200, height: 200,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.08)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: "50%",
          width: 600, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(200,191,175,0.3), transparent)",
          transform: "translateX(-50%)",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#c8bfaf",
              marginBottom: 20,
            }}
          >
            HM Pharmaceuticals — Product Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontSize: "clamp(42px, 6vw, 80px)",
              fontWeight: 300,
              color: "#f7f5f0",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Trusted Formulations
            <br />
            <em style={{ fontStyle: "italic", color: "#a8d4e0" }}>
              Built for Care
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 13,
              fontWeight: 300,
              color: "#9ab0c2",
              marginTop: 28,
              maxWidth: 480,
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            A curated range of pediatric pharmaceuticals — designed with rigorous
            standards, delivered with precision.
          </motion.p>
        </div>
      </div>

      {/* ── FILTER + SEARCH BAR ── */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8e0d4",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            minHeight: 68,
            flexWrap: "wrap",
          }}
        >
          {/* Category pills */}
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`hm-nav-pill ${activeCategory === cat ? "active" : ""}`}
                style={{ marginRight: 1 }}
              >
                <span>{categoryMeta[cat].label}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div style={{ position: "relative" }}>
            <svg
              style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", color: "#b0a898" }}
              width={14} height={14} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
            >
              <circle cx={11} cy={11} r={8} /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or composition…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="hm-search"
            />
          </div>
        </div>
      </div>

      {/* ── RESULTS COUNT ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 48px 8px" }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#b0a898",
        }}>
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          {activeCategory !== "ALL" && ` in ${categoryMeta[activeCategory].label}`}
        </p>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "24px 48px 100px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 1,
          background: "#e8e0d4",
          border: "1px solid #e8e0d4",
        }}
      >
        {filteredProducts.map((product, i) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.04, duration: 0.5 }}
            className="product-card"
            onClick={() => setSelectedProduct(product)}
            onMouseEnter={() => setHoveredId(product._id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image area */}
            <div
              style={{
                height: 220,
                background: "#f7f5f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle watermark circle */}
              <div style={{
                position: "absolute",
                width: 200, height: 200,
                borderRadius: "50%",
                border: "1px solid rgba(26,58,92,0.06)",
              }} />
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{
                  objectFit: "contain",
                  padding: 32,
                  transition: "transform 0.5s ease",
                  transform: hoveredId === product._id ? "scale(1.06)" : "scale(1)",
                }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: "28px 28px 32px" }}>
              {/* Category badge */}
              <span
                className="cat-badge"
                style={{
                  color: "#6b8fa8",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{
                  width: 5, height: 5,
                  borderRadius: "50%",
                  background: "#6b8fa8",
                  display: "inline-block",
                  flexShrink: 0,
                }} />
                {product.category}
              </span>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 26,
                  fontWeight: 600,
                  color: "#1a2c3d",
                  margin: "12px 0 4px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                {product.name}
              </h3>

              {/* Composition */}
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11,
                  color: "#9ab0c2",
                  fontWeight: 400,
                  letterSpacing: "0.03em",
                  lineHeight: 1.6,
                  marginBottom: 16,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {product.composition}
              </p>

              <div className="divider-line" />

              {/* Description preview */}
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  color: "#6b6056",
                  lineHeight: 1.75,
                  fontWeight: 300,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  marginBottom: 24,
                }}
              >
                {product.description}
              </p>

              <span className="view-link">View Product Details</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── EMPTY STATE ── */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            textAlign: "center",
            padding: "100px 48px",
            maxWidth: 400,
            margin: "0 auto",
          }}
        >
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 28,
            fontWeight: 400,
            color: "#1a3a5c",
            fontStyle: "italic",
            marginBottom: 12,
          }}>
            No products found.
          </p>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 11,
            color: "#b0a898",
            letterSpacing: "0.06em",
            lineHeight: 1.8,
          }}>
            Try adjusting your search or selecting a different category.
          </p>
        </motion.div>
      )}

      {/* ── PRODUCT MODAL ── */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProduct(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(10,20,35,0.7)",
              backdropFilter: "blur(10px)",
              padding: 24,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                width: "100%",
                maxWidth: 900,
                maxHeight: "90vh",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Left — image */}
              <div
                style={{
                  background: "#f7f5f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  minHeight: 420,
                }}
              >
                {/* Corner accents */}
                <div style={{ position: "absolute", top: 16, left: 16, width: 24, height: 24, borderTop: "2px solid #c8bfaf", borderLeft: "2px solid #c8bfaf" }} />
                <div style={{ position: "absolute", bottom: 16, right: 16, width: 24, height: 24, borderBottom: "2px solid #c8bfaf", borderRight: "2px solid #c8bfaf" }} />

                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  style={{ objectFit: "contain", padding: 48 }}
                />
              </div>

              {/* Right — info */}
              <div
                style={{
                  padding: "52px 44px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflowY: "auto",
                  maxHeight: "90vh",
                }}
              >
                <div>
                  {/* Close */}
                  <button
                    onClick={() => setSelectedProduct(null)}
                    style={{
                      position: "absolute",
                      top: 20, right: 20,
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      background: "none",
                      border: "1px solid #e8e0d4",
                      color: "#9ab0c2",
                      padding: "7px 14px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLButtonElement).style.borderColor = "#1a3a5c";
                      (e.target as HTMLButtonElement).style.color = "#1a3a5c";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLButtonElement).style.borderColor = "#e8e0d4";
                      (e.target as HTMLButtonElement).style.color = "#9ab0c2";
                    }}
                  >
                    ✕ Close
                  </button>

                  {/* Category */}
                  <span
                    className="cat-badge"
                    style={{
                      color: "#6b8fa8",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 20,
                    }}
                  >
                    <span style={{
                      width: 5, height: 5,
                      borderRadius: "50%",
                      background: "#6b8fa8",
                      display: "inline-block",
                    }} />
                    {selectedProduct.category}
                  </span>

                  {/* Name */}
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 38,
                      fontWeight: 600,
                      color: "#1a2c3d",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                      margin: "0 0 8px",
                    }}
                  >
                    {selectedProduct.name}
                  </h2>

                  <div className="divider-line" style={{ marginTop: 24 }} />

                  {/* Composition */}
                  <div style={{ marginTop: 24 }}>
                    <p className="meta-label">Composition</p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 12,
                        color: "#3d5a6b",
                        lineHeight: 1.7,
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {selectedProduct.composition}
                    </p>
                  </div>

                  {/* Description */}
                  <div style={{ marginTop: 28 }}>
                    <p className="meta-label">Description</p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 12,
                        color: "#5a534a",
                        lineHeight: 1.85,
                        fontWeight: 300,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {selectedProduct.description}
                    </p>
                  </div>
                </div>

                {/* CTA row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    marginTop: 40,
                    paddingTop: 28,
                    borderTop: "1px solid #e8e0d4",
                  }}
                >
                  <button
                    className="modal-close"
                    onClick={() => setSelectedProduct(null)}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      background: "#1a3a5c",
                      color: "#fff",
                      border: "none",
                      padding: "14px 32px",
                      cursor: "pointer",
                    }}
                  >
                    Close Product
                  </button>

                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 10,
                      color: "#b0a898",
                      letterSpacing: "0.1em",
                    }}
                  >
                    HM Pharmaceuticals
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
