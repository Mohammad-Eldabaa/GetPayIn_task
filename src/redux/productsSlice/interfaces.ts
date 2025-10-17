export interface productsInitialStateTypes {
  products: productstypes[];
}
export interface productstypes {
  id: number | null;
  title: string | null;
  brand: string | null;
  thumbnail: string | null;
}
export const productsInitialState: productsInitialStateTypes = {
  products: [],
};
