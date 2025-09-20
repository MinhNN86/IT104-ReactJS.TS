import { Button, Modal, notification, Space, Table } from "antd";
import type { TableProps } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface DataType {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function YourCart() {
  const [isModalRemoveOpen, setIsModalRemoveOpen] = useState<boolean>(false);
  const [cartRemove, setCartRemove] = useState<DataType | null>(null);
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //   console.log(carts);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button color="primary" variant="solid">
            Update
          </Button>
          <Button
            color="danger"
            variant="solid"
            onClick={() => openModalDelete(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  //! Xoá cart
  const openModalDelete = (cart: DataType) => {
    console.log(cart);
    setCartRemove(cart);
    setIsModalRemoveOpen(true);
  };

  const handleDelete = () => {
    dispatch({
      type: "removeCart",
      payload: cartRemove,
    });
    setIsModalRemoveOpen(false);
    setCartRemove(null);
    notification.success({ message: "Xoá sản phẩm trong giỏ hàng thành công" });
  };
  return (
    <div className="border-red-300 border w-[45%] rounded-md h-[340px]">
      <header className="h-10 bg-red-300 ">
        <div className="h-full text-start flex items-center ml-3 text-red-600 text-xl  ">
          Your Cart
        </div>
      </header>
      <div className="p-5">
        <Table<DataType>
          columns={columns}
          dataSource={carts}
          rowKey="id"
          pagination={false}
        />
      </div>
      <div className="flex justify-around ">
        <div>
          There are <b>{carts.length}</b> items in your shopping cart
        </div>
        <div className="text-red-500 font-bold">
          {carts.reduce(
            (sum: number, item: DataType) => sum + item.price * item.quantity,
            0
          )}{" "}
          USD
        </div>
      </div>

      <Modal
        title="Xác nhận xoá"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalRemoveOpen}
        onCancel={() => setIsModalRemoveOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalRemoveOpen(false)}>
            Huỷ
          </Button>,
          <Button key="delete" type="primary" danger onClick={handleDelete}>
            Xác nhận xoá
          </Button>,
        ]}
      >
        <p>Bạn có chắc chắn muốn xoá sản phẩm này khỏi giỏ hàng?</p>
      </Modal>
    </div>
  );
}
