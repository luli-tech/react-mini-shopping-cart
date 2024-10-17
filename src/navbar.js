import { useDispatch, useSelector } from "react-redux";
import { actions } from "./useStore";
function Nav() {
  let dispatch = useDispatch();
  let value = useSelector((state) => state.addcart.cartAmount);
  let cartLength = value.length;
  function isfalse() {
    dispatch(actions.toggle());
  }
  let merry = value.map((d) => d.quantity).reduce((a, b) => a + b, 0);
  console.log(merry);

  return (
    <>
      <nav>
        <div className="nav-inherit">
          <div className="cart-logo">
            <p>ReduxCart</p>
          </div>
          <div onClick={isfalse} className="cart-container">
            <p>My Cart</p>
            <span>{cartLength}</span>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
