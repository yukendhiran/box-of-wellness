import { defineArrayMember, defineField, defineType } from "sanity";

export const plans = defineType({
  type: "document",
  name: "plans",
  title: "Plans",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "price",
      title: "Price",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "array",
      name: "details",
      title: "details",
      of: [
        defineArrayMember({
          type: "string",
          name: "detail", // Provide a name
          title: "Detail", // Provide a title
        }),
      ],
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "slug",
      options: { source: "name" },
    }),
  ],
});
