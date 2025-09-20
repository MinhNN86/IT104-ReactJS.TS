type ProductType = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

type CartType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ActionType = {
  type: string;
  payload: ProductType | CartType;
};

const initialState: ProductType[] = [
  {
    id: "1",
    name: "Pizza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
    description: "Pizza Ý truyền thống với phô mai và sốt cà chua.",
    price: 30,
    quantity: 2,
  },
  {
    id: "2",
    name: "Hamburger",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/1200px-NCI_Visuals_Food_Hamburger.jpg",
    description: "Hamburger bò Mỹ với rau và sốt đặc biệt.",
    price: 15,
    quantity: 4,
  },
  {
    id: "3",
    name: "Bread",
    image:
      "https://ichef.bbc.co.uk/ace/standard/1600/food/recipes/paul_hollywoods_crusty_83536_16x9.jpg.webp",
    description: "Bánh mì nướng giòn thơm, phù hợp cho bữa sáng.",
    price: 20,
    quantity: 1,
  },
  {
    id: "4",
    name: "Cake",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF_4I3r7kvHwf5kYCGsM0gE-0GFVBeFCW4A&s",
    description: "Bánh kem ngọt nhẹ, trang trí đẹp mắt cho tiệc sinh nhật.",
    price: 10,
    quantity: 1,
  },
];
export const shoppingReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "addCart":
      return state.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product
      );
    case "removeCart": {
      return state.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            }
          : product
      );
    }
    default:
      break;
  }
  return state;
};
