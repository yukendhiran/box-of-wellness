import { defineField, defineType } from "sanity";

export const about = defineType({
  type: "document",
  name: "about",
  title: "About",
  fields: [
    defineField({
      type: "string",
      name: "about",
      title: "about",
      validation: (e) => e.required(),
    }),
  ],
});
