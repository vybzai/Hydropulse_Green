import {defineField, defineType} from "sanity";

export const resourceItem = defineType({
  name: "resourceItem",
  title: "Resource / deliverable",
  type: "document",
  fields: [
    defineField({name: "code", type: "string", title: "Code (e.g. D1.1)"}),
    defineField({name: "title", type: "string", validation: (Rule) => Rule.required()}),
    defineField({name: "resourceType", type: "string", title: "Type"}),
    defineField({name: "publishedLabel", type: "string", title: "Date (display)"}),
    defineField({name: "sizeLabel", type: "string", title: "Size label"}),
    defineField({name: "formatLabel", type: "string", title: "Format"}),
    defineField({name: "file", type: "file"}),
    defineField({name: "externalUrl", type: "url", title: "Or external URL"}),
  ],
  preview: {
    select: {title: "title", subtitle: "code"},
  },
});
