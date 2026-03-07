import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "composition",
      title: "Composition",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Respiratory", value: "RESPIRATORY" },
          { title: "Antibiotic", value: "ANTIBIOTIC" },
          { title: "Supplements", value: "SUPPLEMENTS" },
          { title: "Antipyretic", value: "ANTIPYRETIC" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});