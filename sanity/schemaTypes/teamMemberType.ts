import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "teamCategory",
      title: "Team Category",
      type: "string",
      options: {
        list: [
          { title: "Leadership Team", value: "leadershipTeam" },
          { title: "Tech Team", value: "techTeam" },
          { title: "Marketing Team", value: "marketingTeam" },
          { title: "HR & Operations", value: "hrOperations" },
          { title: "Design & Video Team", value: "designVideoTeam" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "portfolio",
      title: "Portfolio",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
    defineField({
      name: "portfolioType",
      title: "Portfolio Type",
      type: "string",
      options: {
        list: [
          { title: "Developer", value: "developer" },
          { title: "UI/UX Designer", value: "uiuxDesigner" },
          { title: "Graphic Designer", value: "graphicDesigner" },
          { title: "Marketer", value: "marketer" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "portfolioGallery",
      title: "Portfolio Gallery (Designers only)",
      type: "array",
      of: [{ type: "image" }],
      hidden: ({ parent }) =>
        parent.portfolioType !== "uiuxDesigner" &&
        parent.portfolioType !== "graphicDesigner",
    }),
    defineField({
      name: "portfolioDescription",
      title: "Portfolio Description",
      type: "text",
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack (Developers only)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "image", title: "Logo/Image", type: "image" },
          ],
        },
      ],
      hidden: ({ parent }) => parent.portfolioType !== "developer",
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "website",
      title: "Personal Website",
      type: "url",
    }),
    defineField({
      name: "portfolioProjects",
      title: "Projects (Developers only)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Project Name", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "link", title: "Project Link", type: "url" },
            { name: "image", title: "Project Image", type: "image" },
            { name: "url", title: "Project URL", type: "url" },
          ],
        },
      ],
      hidden: ({ parent }) => parent.portfolioType !== "developer",
    }),
    defineField({
      name: "portfolioLinks",
      title: "Portfolio Links (Designers only)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Link Name", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
      hidden: ({ parent }) =>
        parent.portfolioType !== "uiuxDesigner" &&
        parent.portfolioType !== "graphicDesigner",
    }),
    defineField({
      name: "uiuxProjects",
      title: "UI/UX Projects (UI/UX Designers only)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Project Name", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "image", title: "Project Image", type: "image" },
            { name: "link", title: "Project Link", type: "url" },
            {
              name: "tools",
              title: "Tools Used",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
      hidden: ({ parent }) => parent.portfolioType !== "uiuxDesigner",
    }),
    defineField({
      name: "portfolioCampaigns",
      title: "Campaigns (Marketers only)",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ parent }) => parent.portfolioType !== "marketer",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
