import { Product } from "./product";

export class Variant {
  id!: number;
  color!: string;
  specification!: string;
  size!: string;
  productId!: number;
  product!: Product;
}


export enum Size {
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small'
}

export class EnumHelper {
  static getEnumArray(enumObj: any): { key: string, value: string }[] {
    return Object.keys(enumObj).map(key => ({ key, value: enumObj[key] }));
  }
}
