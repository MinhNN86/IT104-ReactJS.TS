import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import Search, { type SearchProps } from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

// id, name, price, image
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ListProduct_Ex10() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [productData, setProductData] = useState<Product[]>([]);
  useEffect(() => {
    let data: Product[] = JSON.parse(
      localStorage.getItem("productData") || "[]"
    );
    if (!data || data.length === 0) {
      data = [
        {
          id: 1,
          name: "Điện thoại iPhone 15 Pro",
          price: 30000000,
          image:
            "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
        },
        {
          id: 2,
          name: "Điện thoại OPPO Reno11 5G",
          price: 10600000,
          image:
            "https://cdn.tgdd.vn/Products/Images/42/314209/oppo-reno-11-xanh-thumb-600x600.jpg",
        },
        {
          id: 3,
          name: "Điện thoại VIVO Y17s",
          price: 3300000,
          image:
            "https://cdn.nguyenkimmall.com/images/detailed/895/10056423-dien-thoai-vivo-y17s-4gb-128gb-tim-1.jpg",
        },
        {
          id: 4,
          name: "Điện thoại Nokia 8210 4G",
          price: 3300000,
          image:
            "https://cdn.tgdd.vn/Products/Images/42/286060/Nokia%208210-do-thumb-600x600.jpg",
        },
      ];
    }
    setProductData(data);
    localStorage.setItem("productData", JSON.stringify(data));
  }, []);

  const onSearch: SearchProps["onSearch"] = (value) => {
    if (value) {
      setSearchParams({ name: value }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const searchValue = (searchParams.get("name") || "").trim().toLowerCase();
  const filterData: Product[] = searchValue
    ? productData.filter((product) =>
        product.name.trim().toLowerCase().includes(searchValue)
      )
    : productData;

  return (
    <div style={{ minWidth: "90vh" }}>
      <h1>List Product</h1>
      <div style={{ display: "flex", justifyContent: "end", marginTop: 30 }}>
        <Search
          placeholder="Tìm kiếm theo tên"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: 350 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 50,
          justifyContent: "center",
          marginTop: 50,
          flexWrap: "wrap",
        }}
      >
        {filterData.map((product) => (
          <Card
            key={product.id}
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src={product.image}
                style={{ height: 250, width: "100%", objectFit: "cover" }}
              />
            }
          >
            <Meta
              title={product.name}
              description={product.price.toLocaleString("vi-VN") + " VND"}
            />
            <Button color="primary" variant="solid" style={{ marginTop: 20 }}>
              <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
