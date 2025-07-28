import { defineField, defineType } from "sanity";

export default defineType({
  name: "marketingProject",
  title: "Marketing Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "detailPage",
      title: "Detail Page Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    // Case Study Content Fields
    defineField({
      name: "challenge",
      title: "The Challenge",
      type: "text",
      rows: 4,
      description: "Describe the client's challenges and pain points",
    }),
    defineField({
      name: "researchAnalysis",
      title: "Research & Analysis",
      type: "text",
      rows: 3,
      description:
        "Market research, competitor analysis, and audience insights",
    }),
    defineField({
      name: "campaignDevelopment",
      title: "Campaign Development",
      type: "text",
      rows: 3,
      description:
        "Creative strategy, messaging framework, and campaign execution plan",
    }),
    defineField({
      name: "results",
      title: "Results & Impact",
      type: "object",
      fields: [
        { name: "metric1", type: "string", title: "Metric 1 Value" },
        { name: "metric1Label", type: "string", title: "Metric 1 Label" },
        { name: "metric2", type: "string", title: "Metric 2 Value" },
        { name: "metric2Label", type: "string", title: "Metric 2 Label" },
        { name: "metric3", type: "string", title: "Metric 3 Value" },
        { name: "metric3Label", type: "string", title: "Metric 3 Label" },
      ],
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key learnings and insights from the campaign",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});
