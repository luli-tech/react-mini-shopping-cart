import { useSelector } from "react-redux";

function Cart() {
  let toggle = useSelector((state) => state.cart.toggle);
  let value = useSelector((state) => state.addcart.cartAmount);
  function getCart() {}
  console.log(value);
  return (
    <>
      {toggle && (
        <div className="toggle-cart">
          <p>Your Shopping Cart</p>

          {value.map((data) => (
            <div
              onClick={getCart}
              key={data.id}
              className="shopping-list-container"
            >
              <div className="cart-title">
                <p>{data.name}</p>
                <p>X{data.quantity}</p>
              </div>
              <div className="cart-amount">
                <p>$ {data.amount}</p>
                <div>
                  <button>-</button>
                  <button>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default Cart;
