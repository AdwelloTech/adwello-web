import { client } from "./client";

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
  teamCategory: string;
  order: number;
  slug: { current: string };
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      "image": image.asset->url,
      teamCategory,
      order,
      slug
    }
  `);
}

export async function getTeamMembersByCategory(
  category: string
): Promise<TeamMember[]> {
  return client.fetch(
    `
    *[_type == "teamMember" && teamCategory == $category] | order(order asc) {
      _id,
      name,
      role,
      "image": image.asset->url,
      teamCategory,
      order,
      slug
    }
  `,
    { category }
  );
}

export async function getTeamCategories(): Promise<string[]> {
  return client.fetch(`
    array::distinct(*[_type == "teamMember"].teamCategory)
  `);
}

export async function getTeamMemberBySlug(slug: string) {
  return client.fetch(
    `*[_type == "teamMember" && slug.current == $slug][0] {
      _id,
      name,
      role,
      "image": image.asset->url,
      teamCategory,
      order,
      slug,
      portfolio,
      portfolioType,
      portfolioGallery[]{asset->{url}},
      portfolioDescription,
      portfolioLinks[]{name, url},
      uiuxProjects[]{name, description, link, tools, image{asset->{url}}},
      leadershipExperience[]{title, company, duration, description},
      leadershipAchievements,
      leadershipVision,
      techStack[]{name, image{asset->{url}}},
      github,
      linkedin,
      website,
      portfolioProjects[]{name, description, link, url, image{asset->{url}}},
      portfolioCampaigns
    }`,
    { slug }
  );
}
