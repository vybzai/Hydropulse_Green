import {defineField, defineType} from "sanity";

export const newsOrEvent = defineType({
  name: "newsOrEvent",
  title: "News or event",
  type: "document",
  fields: [
    defineField({
      name: "kind",
      title: "Kind",
      type: "string",
      options: {
        list: [
          {title: "News article", value: "news"},
          {title: "Event / webinar", value: "event"},
        ],
        layout: "radio",
      },
      initialValue: "news",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (for URLs)",
      type: "slug",
      options: {source: "title", maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "e.g. Consortium, Field notes, Policy, Webinar",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "readTimeLabel",
      title: "Reading time or duration label",
      type: "string",
      description: 'e.g. "4 min read", "1h · Online", "Full day"',
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "For events: city or “Online”",
      hidden: ({document}) => document?.kind !== "event",
    }),
    defineField({
      name: "externalUrl",
      title: "External link (registration, stream)",
      type: "url",
      hidden: ({document}) => document?.kind !== "event",
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: {hotspot: true},
      fields: [{name: "alt", type: "string", title: "Alt text"}],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{type: "block"}],
    }),
  ],
  preview: {
    select: {title: "title", kind: "kind", media: "heroImage", date: "publishedAt"},
    prepare({title, kind, media, date}) {
      return {
        title: title || "Untitled",
        subtitle: [kind === "event" ? "Event" : "News", date].filter(Boolean).join(" · "),
        media,
      };
    },
  },
});
