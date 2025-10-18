export interface productsInitialStateTypes {
  products: productstypes[];
  categories: categoriesTypes[];
}
export interface productstypes {
  id: number | null;
  title: string | null;
  brand: string | null;
  thumbnail: string | null;
  category: string | null;
}

export interface categoriesTypes {
  slug: string | null;
  name: string | null;
  url: string | null;
}

export const productsInitialState: productsInitialStateTypes = {
  products: [],
  categories: [],
};
