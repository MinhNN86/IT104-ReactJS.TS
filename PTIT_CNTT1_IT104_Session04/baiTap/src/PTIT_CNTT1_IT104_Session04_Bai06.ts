type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
};

const listProduct: Product[] = [
  {
    id: "P001",
    name: "Áo sơ mi",
    price: 300000,
    category: { id: "C001", name: "Thời trang nam" },
    discount: 0.2,
  },
  {
    id: "P002",
    name: "Giày thể thao",
    price: 1500000,
    category: { id: "C002", name: "Giày dép" },
    discount: 0.1,
  },
  {
    id: "P003",
    name: "Điện thoại",
    price: 10000000,
    category: { id: "C003", name: "Điện tử" },
  },
];

const getFinalPrice = (product: Product): number => {
  if (product.discount) {
    return product.price * (1 - product.discount);
  } else {
    return product.price;
  }
};

const printProductInfo = (product: Product): void => {
  console.log(`
    Tên: ${product.name}
    Giá gốc: ${product.price} VND
    Giá sau giảm: ${getFinalPrice(product)} VND
    Danh mục: ${product.category.name}
    ----------------------------------------
    `);
};

listProduct.forEach((e: Product) => printProductInfo(e));
