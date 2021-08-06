import Product from "./components/Product";
import Cart from "./components/Cart";
import Header from "./components/Header";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12400,
    imageUrl: "/img/products/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 9800,
    imageUrl: "/img/products/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 19800,
    imageUrl: "/img/products/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8900,
    imageUrl: "/img/products/4.jpg",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 12400,
    imageUrl: "/img/products/5.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 9800,
    imageUrl: "/img/products/6.jpg",
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 19800,
    imageUrl: "/img/products/7.jpg",
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 8900,
    imageUrl: "/img/products/8.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
      <main>
        <div className="top-bar">
          <h2>Все кроссовки</h2>
          <div className="search-block">
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="products">
          {arr.map((obj) => (
            <Product
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
