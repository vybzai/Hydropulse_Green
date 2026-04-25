import {defineField, defineType} from "sanity";

export const demoSite = defineType({
  name: "demoSite",
  title: "Demonstration site",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "ID / slug",
      type: "slug",
      options: {source: "name", maxLength: 64},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: "name", type: "string", validation: (Rule) => Rule.required()}),
    defineField({name: "country", type: "string"}),
    defineField({name: "region", type: "string"}),
    defineField({name: "river", type: "string"}),
    defineField({name: "lead", type: "string", title: "Lead partners line"}),
    defineField({name: "focus", type: "array", of: [{type: "string"}]}),
    defineField({name: "summary", type: "text", rows: 5}),
    defineField({
      name: "kpis",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {name: "label", type: "string"},
            {name: "value", type: "string"},
          ],
        },
      ],
    }),
    defineField({
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {hotspot: true},
      fields: [{name: "alt", type: "string"}],
    }),
    defineField({
      name: "mapCoord",
      title: "Map position (0–1, optional)",
      type: "object",
      fields: [
        {name: "x", type: "number"},
        {name: "y", type: "number"},
      ],
    }),
  ],
  preview: {
    select: {title: "name", subtitle: "country", media: "heroImage"},
  },
});
