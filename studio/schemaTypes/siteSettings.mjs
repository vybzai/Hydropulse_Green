import {defineField, defineType} from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "internalNote",
      title: "Label",
      type: "string",
      description: "Use a single document; e.g. type “Global”.",
      initialValue: "Global",
    }),
    defineField({name: "projectTagline", title: "Tagline", type: "string"}),
    defineField({name: "grantLine", title: "Grant / funding line (footer)", type: "text", rows: 2}),
    defineField({name: "cordisUrl", title: "CORDIS project URL", type: "url"}),
    defineField({name: "linkedIn", title: "LinkedIn URL", type: "url"}),
    defineField({name: "youtube", title: "YouTube URL", type: "url"}),
    defineField({name: "twitter", title: "X / Twitter URL", type: "url"}),
    defineField({name: "mastodon", title: "Mastodon URL", type: "url"}),
    defineField({name: "openDataPortalUrl", title: "Open data portal URL", type: "url"}),
    defineField({name: "newsletterSignupUrl", title: "Newsletter signup URL", type: "url"}),
  ],
});
