import Product from "./components/Product";
import Cart from "./components/Cart";
import Header from "./components/Header";

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
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </main>
    </div>
  );
}

export default App;
