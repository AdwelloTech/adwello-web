import { client } from "./client";

export interface MarketingProjectResults {
  metric1?: string;
  metric1Label?: string;
  metric2?: string;
  metric2Label?: string;
  metric3?: string;
  metric3Label?: string;
}

export interface MarketingProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  featured: boolean;
  detailPage: string;
  order: number;
  // Case study fields
  challenge?: string;
  researchAnalysis?: string;
  campaignDevelopment?: string;
  results?: MarketingProjectResults;
  keyTakeaways?: string[];
}

export async function getAllMarketingProjects(): Promise<MarketingProject[]> {
  return client.fetch(`
    *[_type == "marketingProject"] | order(order asc) {
      _id,
      title,
      description,
      "image": image.asset->url,
      featured,
      "detailPage": detailPage.current,
      order,
      challenge,
      researchAnalysis,
      campaignDevelopment,
      results,
      keyTakeaways
    }
  `);
}

export async function getFeaturedMarketingProjects(): Promise<
  MarketingProject[]
> {
  return client.fetch(`
    *[_type == "marketingProject" && featured == true] | order(order asc) {
      _id,
      title,
      description,
      "image": image.asset->url,
      featured,
      "detailPage": detailPage.current,
      order,
      challenge,
      researchAnalysis,
      campaignDevelopment,
      results,
      keyTakeaways
    }
  `);
}

export async function getMarketingProjectBySlug(
  slug: string
): Promise<MarketingProject | null> {
  const projects = await client.fetch(
    `
    *[_type == "marketingProject" && detailPage.current == $slug] {
      _id,
      title,
      description,
      "image": image.asset->url,
      featured,
      "detailPage": detailPage.current,
      order,
      challenge,
      researchAnalysis,
      campaignDevelopment,
      results,
      keyTakeaways
    }
  `,
    { slug }
  );

  return projects[0] || null;
}
