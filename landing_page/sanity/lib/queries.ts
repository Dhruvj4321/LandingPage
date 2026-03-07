import { groq } from "next-sanity";

export const PRODUCTS_QUERY = groq`
  *[_type == "product"]{
    _id,
    name,
    composition,
    category,
    description,
    "image": image.asset->url
  }
`;