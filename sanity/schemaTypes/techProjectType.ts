import { defineField, defineType } from "sanity";

export default defineType({
  name: "techProject",
  title: "Tech Project",
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
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Project Image/Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web Development", value: "Web Development" },
          { title: "Mobile Development", value: "Mobile Development" },
          { title: "UI/UX Design", value: "UI/UX Design" },
          { title: "E-commerce", value: "E-commerce" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectUrl",
      title: "Project URL",
      type: "url",
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
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    // Detail page fields
    defineField({
      name: "projectName",
      title: "Full Project Name",
      type: "string",
    }),
    defineField({
      name: "uiDesign",
      title: "UI/UX Designer",
      type: "string",
    }),
    defineField({
      name: "developmentTeam",
      title: "Development Team",
      type: "string",
    }),
    defineField({
      name: "dateCompleted",
      title: "Date Completed",
      type: "string",
    }),
    defineField({
      name: "projectDescription",
      title: "Detailed Project Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "role", type: "string", title: "Role" },
            { name: "image", type: "image", title: "Profile Image" },
          ],
        },
      ],
    }),
    defineField({
      name: "screenshots",
      title: "Project Screenshots",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Screenshot Title" },
            { name: "description", type: "string", title: "Description" },
            { name: "image", type: "image", title: "Screenshot Image" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
