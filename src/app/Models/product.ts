import { Variant } from "./variant";

export class Product {
  id!: number;
  name!: string;
  brand!: string;
  type!: string;
  variants: Variant[] = [];

}
