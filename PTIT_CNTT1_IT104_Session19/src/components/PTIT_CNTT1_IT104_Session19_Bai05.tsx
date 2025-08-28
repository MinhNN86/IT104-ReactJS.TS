import { useState } from "react";

const quotes: string[] = [
  "Học, học nữa, học mãi.",
  "Thất bại là mẹ thành công.",
  "Không gì là không thể.",
  "Kiến tha lâu đầy tổ.",
  "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
];
const getRandomQuote = (currentQuote) => {
  const filtered: string[] = quotes.filter((q) => q !== currentQuote);
  return filtered[Math.floor(Math.random() * filtered.length)];
};

export default function PTIT_CNTT1_IT104_Session19_Bai05() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const handleNewQuote = () => {
    setQuote((prev) => getRandomQuote(prev));
  };
  return (
    <div>
      <h1>Câu nói truyền cảm hứng hôm nay</h1>
      <div>"{quote}"</div>
      <button onClick={handleNewQuote}>Lấy câu nói mới</button>
    </div>
  );
}
