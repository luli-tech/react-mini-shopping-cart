import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "./useStore";

function Addcart() {
  let dispatch = useDispatch();
  let value = useSelector((state) => state.addcart.cartAmount);

  let mapMe = [
    {
      id: 1,
      name: "first-Product",
      price: "50",
      description: "this is the first product",
    },
    {
      id: 2,
      name: "second-Product",
      price: "20",
      description: "this is the second product",
    },
    {
      id: 3,
      name: "third-Product",
      price: "30",
      description: "this is the third product",
    },
  ];

  function toggleCart(id, name, price) {
    dispatch(addCartItems({ id, name, price }));
    console.log(name, id, price);
  }
  console.log(value);
  return (
    <>
      <div className="cart-title">CART ITEMS LIST</div>
      {mapMe.map((data) => (
        <div key={data.id} className="cart-control-container">
          <div className="cart-control">
            <div>
              <p>{data.name}</p>
              <p>{data.description}</p>
            </div>
            <div>
              <p>${data.price}</p>
            </div>
          </div>
          <div className="btn">
            <button onClick={() => toggleCart(data.id, data.name, data.price)}>
              Add-to-cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
export default Addcart;
