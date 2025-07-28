import { client } from "./client";

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
  teamCategory: string;
  order: number;
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      "image": image.asset->url,
      teamCategory,
      order
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
      order
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
