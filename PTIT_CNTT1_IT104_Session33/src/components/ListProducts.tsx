import { Button, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";

type ProductType = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

export default function ListProducts() {
  const products = useSelector((state) => state.shopping);
  const dispatch = useDispatch();

  const handleAddCart = (product: ProductType) => {
    if (product.quantity <= 1) {
      notification.error({ message: "Số lượng sản phẩm không đủ" });
      return;
    }
    dispatch({
      type: "addCart",
      payload: product,
    });
    notification.success({ message: "Thêm vào giỏ hàng thành công" });
  };

  return (
    <div className="border-blue-500 border w-[45%] rounded-md">
      <header className="h-10 bg-blue-500 ">
        <div className="h-full text-start flex items-center ml-3 text-white text-xl  ">
          List Product
        </div>
      </header>
      <div className="p-5 flex flex-col gap-10">
        {products.map((product: ProductType) => (
          <div className="flex justify-between mr-5" key={product.id}>
            <div className="flex gap-4">
              <img
                src={product.image}
                alt=""
                style={{
                  width: 200,
                  height: 140,
                  objectFit: "cover",
                  borderRadius: 8,
                  flexShrink: 0,
                }}
              />
              <div className="text-start">
                <h2 className="text-3xl">{product.name}</h2>
                <p>{product.description}</p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="border w-20 font-bold">{product.quantity}</div>
              <Button
                color="volcano"
                variant="solid"
                onClick={() => handleAddCart(product)}
              >
                {product.price} USD
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
