import { type SchemaTypeDefinition } from "sanity";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import teamMemberType from "./teamMemberType";
import techProjectType from "./techProjectType";
import designVideoProjectType from "./designVideoProjectType";
import marketingProjectType from "./marketingProjectType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    authorType,
    blockContentType,
    categoryType,
    postType,
    teamMemberType,
    techProjectType,
    designVideoProjectType,
    marketingProjectType,
  ],
};
