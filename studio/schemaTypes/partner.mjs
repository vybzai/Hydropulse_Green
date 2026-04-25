import {defineField, defineType} from "sanity";

export const partner = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({name: "name", type: "string", validation: (Rule) => Rule.required()}),
    defineField({name: "role", type: "string", title: "Role (e.g. Coordinator, WP2 lead)"}),
    defineField({name: "orgType", type: "string", title: "Organisation type"}),
    defineField({name: "country", type: "string"}),
    defineField({name: "website", type: "url"}),
    defineField({
      name: "logo",
      type: "image",
      options: {hotspot: false},
    }),
    defineField({name: "shortDescription", type: "text", rows: 3}),
  ],
  preview: {
    select: {title: "name", subtitle: "role", media: "logo"},
  },
});
