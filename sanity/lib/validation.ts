import { client } from "./client";

// Check if we can feature another post
export async function canFeaturePost(
  excludeId?: string
): Promise<{ canFeature: boolean; currentCount: number; maxAllowed: number }> {
  const query = `count(*[_type == "post" && featuredOnHomepage == true${excludeId ? ` && _id != $excludeId` : ""}])`;
  const params = excludeId ? { excludeId } : {};

  try {
    const count = await client.fetch(query, params);
    return {
      canFeature: count < 4,
      currentCount: count,
      maxAllowed: 4,
    };
  } catch (error) {
    console.error("Error checking featured posts count:", error);
    return {
      canFeature: false,
      currentCount: 0,
      maxAllowed: 4,
    };
  }
}

// Get all featured posts
export async function getFeaturedPostsCount(): Promise<number> {
  const query = `count(*[_type == "post" && featuredOnHomepage == true])`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error getting featured posts count:", error);
    return 0;
  }
}

// Get featured posts with details
export async function getFeaturedPostsDetails() {
  const query = `*[_type == "post" && featuredOnHomepage == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error getting featured posts details:", error);
    return [];
  }
}
