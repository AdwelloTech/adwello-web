import { client } from "./client";

export interface DesignVideoProject {
  _id: string;
  title: string;
  image: string;
  order: number;
}

export async function getAllDesignVideoProjects(): Promise<
  DesignVideoProject[]
> {
  return client.fetch(`
    *[_type == "designVideoProject"] | order(order asc) {
      _id,
      title,
      "image": image.asset->url,
      order
    }
  `);
}
