import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      description:
        "A brief description of the blog post (optional, max 100 characters)",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
      description: "Select an author (optional)",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Description of the image for accessibility",
        }),
      ],
      description: "Add a featured image (optional)",
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
      description: "Select categories (optional)",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      description: "Set publication date (optional)",
    }),
    defineField({
      name: "featuredOnHomepage",
      type: "boolean",
      title: "Show on Homepage",
      description: "Enable to display this post on the homepage (max 4 posts)",
      initialValue: false,
      validation: (Rule) => {
        return Rule.custom(async (value, context) => {
          if (!value) return true; // If not featured, always allow

          // Get the current document ID
          const docId = context.document?._id;

          try {
            // If we have a document ID, check if this document is already featured
            if (docId) {
              const currentDoc = await context
                .getClient({ apiVersion: "2025-07-19" })
                .fetch(`*[_id == $docId][0]`, { docId });

              // If this document is already featured, allow the change
              if (currentDoc?.featuredOnHomepage === true) {
                return true;
              }
            }

            // Count existing featured posts (excluding current document if editing)
            const query = `count(*[_type == "post" && featuredOnHomepage == true${docId ? ` && _id != $docId` : ""}])`;
            const params = docId ? { docId } : {};

            const count = await context
              .getClient({ apiVersion: "2025-07-19" })
              .fetch(query, params);

            if (count >= 4) {
              return "Maximum 4 posts can be featured on homepage. Please unfeature another post first.";
            }
            return true;
          } catch (error) {
            console.error("Validation error:", error);
            return "Error validating featured posts limit";
          }
        });
      },
    }),
    defineField({
      name: "body",
      type: "blockContent",
      description: "Write your blog post content here",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      featured: "featuredOnHomepage",
    },
    prepare(selection) {
      const { author, featured } = selection;
      const subtitle = [
        author && `by ${author}`,
        featured && "⭐ Featured on Homepage",
      ]
        .filter(Boolean)
        .join(" • ");
      return { ...selection, subtitle };
    },
  },
});
