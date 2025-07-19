import { client } from "./client";
import {
  allPostsQuery,
  featuredPostsQuery,
  postBySlugQuery,
  allPostSlugsQuery,
} from "./queries";

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  author?: string;
  mainImage?: string;
  mainImageAlt?: string;
  featuredOnHomepage: boolean;
  categories?: string[];
  body?: any;
}

// Get all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  return await client.fetch(allPostsQuery);
}

// Get featured posts for homepage (max 4)
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  return await client.fetch(featuredPostsQuery);
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return await client.fetch(postBySlugQuery, { slug });
}

// Get all post slugs for static generation
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return await client.fetch(allPostSlugsQuery);
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Extract text from Portable Text blocks
export function extractTextFromPortableText(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (block._type === "block") {
        return (
          block.children?.map((child: any) => child.text || "").join(" ") || ""
        );
      }
      return "";
    })
    .join(" ");
}

// Calculate read time based on content length
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(" ").length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
