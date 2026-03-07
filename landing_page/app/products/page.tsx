export const dynamic = "force-dynamic";

import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";
import ProductsClient from "./ProductsClient";

export default async function ProductsPage() {
  const products = await client.fetch(PRODUCTS_QUERY);

  console.log("SANITY DATA:", products);

  return <ProductsClient products={products} />;
}