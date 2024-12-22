import { type SchemaTypeDefinition } from "sanity";
import { about } from "./about";
import { category } from "./category";
import { offer } from "./offers";
import { plans } from "./plans";
import { product } from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [plans, category, product, offer, about],
};
