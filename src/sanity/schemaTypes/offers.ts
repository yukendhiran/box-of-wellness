import { defineField, defineType } from "sanity";

export const offer = defineType({
  type: "document",
  name: "offer",
  title: "Offer",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "name",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "description",
      title: "description",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "",
      validation: (e) => e.required(),
      options: { source: "name" },
    }),
  ],
});
