import "./App.css";
import ListProducts from "./components/ListProducts";
import YourCart from "./components/YourCart";

function App() {
  return (
    <div className="w-[95vw] m-5">
      <h1 className="text-start text-2xl font-bold mb-2">Shopping Cart</h1>
      <hr />
      <div className="flex justify-around mt-2">
        <ListProducts />
        <YourCart />
      </div>
    </div>
  );
}

export default App;
