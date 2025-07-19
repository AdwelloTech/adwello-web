import { groq } from "next-sanity";

// Query to get all blog posts
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "author": author->name,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    featuredOnHomepage,
    "categories": categories[]->title,
    body
  }
`;

// Query to get only featured posts for homepage (max 4)
export const featuredPostsQuery = groq`
  *[_type == "post" && featuredOnHomepage == true] | order(publishedAt desc) [0...4] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "author": author->name,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    featuredOnHomepage,
    "categories": categories[]->title,
    body
  }
`;

// Query to get a single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "author": author->name,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    featuredOnHomepage,
    "categories": categories[]->title,
    body
  }
`;

// Query to get all post slugs for static generation
export const allPostSlugsQuery = groq`
  *[_type == "post"] {
    "slug": slug.current
  }
`;
