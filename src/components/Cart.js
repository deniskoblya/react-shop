function Cart() {
  return (
    <div className="cart-wrapper" style={{ display: "none" }}>
      <div className="cart-block">
        <h3>
          Корзина <img src="/img/btn-remove.svg" alt="close cart" />
        </h3>
        <div className="cart-products">
          <div className="cart-item">
            <div
              style={{ backgroundImage: `url(/img/products/1.jpg)` }}
              className="item-img"
            ></div>
            <div className="txt">
              <a href="">Мужские Кроссовки Nike Air Max 270</a>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/btn-remove.svg" alt="remove" />
            </button>
          </div>
          <div className="cart-item">
            <div
              style={{ backgroundImage: `url(/img/products/2.jpg)` }}
              className="item-img"
            ></div>
            <div className="txt">
              <a href="">Мужские Кроссовки Nike Air Max 270</a>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/btn-remove.svg" alt="remove" />
            </button>
          </div>
        </div>
        <ul>
          <li>
            <span>Итого: </span>
            <div></div>
            <b>21 498 руб. </b>
          </li>
          <li>
            <span>Налог 5%: </span>
            <div></div>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button className="go-cart">
          Оформить заказ <img src="/img/zak.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Cart;
