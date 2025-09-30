export type ProductStatus = "active" | "inactive";

export type ProductRow = {
  id?: string;
  code: string;
  name: string;
  category: string;
  price: number;
  image: string;
  status: ProductStatus;
};

export interface ProductFormValues {
  code: string;
  name: string;
  category: string;
  price: number | string;
  imageFile?: File;
  status: ProductStatus;
}
