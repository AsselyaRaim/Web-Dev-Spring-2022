import { Product, products, apple_products, huawei_products, xiaomi_products } from "./products";

export class Category {
    name: string;
    items: Product[];

    constructor(name: string, items: Product[]){
        this.name = name;
        this.items = items;
    }
}

export const categories = [
    new Category('Samsung', products),
    new Category('Apple', apple_products),
    new Category('Huawei', huawei_products),
    new Category('Xiaomi', xiaomi_products)
]
  