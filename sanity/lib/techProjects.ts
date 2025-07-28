import { client } from "./client";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Screenshot {
  title: string;
  description: string;
  image: string;
}

export interface TechProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  projectUrl?: string;
  detailPage: string;
  featured: boolean;
  order: number;
  // Detail page fields
  projectName?: string;
  uiDesign?: string;
  developmentTeam?: string;
  dateCompleted?: string;
  projectDescription?: string;
  teamMembers?: TeamMember[];
  screenshots?: Screenshot[];
}

export async function getAllTechProjects(): Promise<TechProject[]> {
  return client.fetch(`
    *[_type == "techProject"] | order(order asc) {
      _id,
      title,
      description,
      "image": image.asset->url,
      category,
      technologies,
      projectUrl,
      "detailPage": detailPage.current,
      featured,
      order,
      projectName,
      uiDesign,
      developmentTeam,
      dateCompleted,
      projectDescription,
      "teamMembers": teamMembers[]{
        name,
        role,
        "image": image.asset->url
      },
      "screenshots": screenshots[]{
        title,
        description,
        "image": image.asset->url
      }
    }
  `);
}

export async function getFeaturedTechProjects(): Promise<TechProject[]> {
  return client.fetch(`
    *[_type == "techProject" && featured == true] | order(order asc) {
      _id,
      title,
      description,
      "image": image.asset->url,
      category,
      technologies,
      projectUrl,
      "detailPage": detailPage.current,
      featured,
      order,
      projectName,
      uiDesign,
      developmentTeam,
      dateCompleted,
      projectDescription,
      "teamMembers": teamMembers[]{
        name,
        role,
        "image": image.asset->url
      },
      "screenshots": screenshots[]{
        title,
        description,
        "image": image.asset->url
      }
    }
  `);
}

export async function getTechProjectsByCategory(
  category: string
): Promise<TechProject[]> {
  return client.fetch(
    `
    *[_type == "techProject" && category == $category] | order(order asc) {
      _id,
      title,
      description,
      "image": image.asset->url,
      category,
      technologies,
      projectUrl,
      "detailPage": detailPage.current,
      featured,
      order,
      projectName,
      uiDesign,
      developmentTeam,
      dateCompleted,
      projectDescription,
      "teamMembers": teamMembers[]{
        name,
        role,
        "image": image.asset->url
      },
      "screenshots": screenshots[]{
        title,
        description,
        "image": image.asset->url
      }
    }
  `,
    { category }
  );
}

export async function getTechProjectBySlug(
  slug: string
): Promise<TechProject | null> {
  const projects = await client.fetch(
    `
    *[_type == "techProject" && detailPage.current == $slug] {
      _id,
      title,
      description,
      "image": image.asset->url,
      category,
      technologies,
      projectUrl,
      "detailPage": detailPage.current,
      featured,
      order,
      projectName,
      uiDesign,
      developmentTeam,
      dateCompleted,
      projectDescription,
      "teamMembers": teamMembers[]{
        name,
        role,
        "image": image.asset->url
      },
      "screenshots": screenshots[]{
        title,
        description,
        "image": image.asset->url
      }
    }
  `,
    { slug }
  );

  return projects[0] || null;
}
