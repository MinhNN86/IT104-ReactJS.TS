import React, { useMemo, useState } from "react";

export default function DemoUseMemo() {
  const [price, setPrice] = useState("");
  const [cards, setCards] = useState<number[]>([]);

  const total = useMemo(() => {
    const result = cards.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
    return result;
  }, [cards]);

  const handleAddCard = () => {
    setCards([...cards, +price]);
  };

  return (
    <div>
      <h1>DemoUseMemo</h1>
      <h2>Total: {total}</h2>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleAddCard}>Price</button>
    </div>
  );
}
