export default function PTIT_CNTT1_IT104_Session29_Bai01() {
  const getAllProduct = (): void => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  getAllProduct();
  return <div></div>;
}
