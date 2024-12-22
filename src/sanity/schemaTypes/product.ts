import { defineField, defineType } from "sanity";

export const product = defineType({
  type: "document",
  name: "product",
  title: "Product",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "text",
      name: "description",
      title: "Description",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      type: "number",
      name: "price",
      title: "Price",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Image",
      options: {
        hotspot: true, // Enables image cropping in the Sanity Studio
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "reference",
      name: "category",
      title: "Category",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "string",
      name: "dietType",
      title: "Diet Type",
      options: {
        list: [
          { title: "Vegetarian", value: "veg" },
          { title: "Non-Vegetarian", value: "non-veg" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "number",
      name: "calories",
      title: "Calories",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
