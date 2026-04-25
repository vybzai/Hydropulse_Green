import {defineField, defineType} from "sanity";

export const relatedProject = defineType({
  name: "relatedProject",
  title: "Related project",
  type: "document",
  fields: [
    defineField({name: "name", type: "string", validation: (Rule) => Rule.required()}),
    defineField({name: "url", type: "url", validation: (Rule) => Rule.required()}),
    defineField({name: "summary", type: "text", rows: 3}),
  ],
  preview: {
    select: {title: "name", subtitle: "url"},
  },
});
