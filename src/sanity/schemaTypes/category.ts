import { defineField, defineType } from "sanity";

export const category = defineType({
  type: "document",
  name: "category",
  title: "Category",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
