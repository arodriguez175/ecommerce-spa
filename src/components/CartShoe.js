import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function CartShoe(props) {
  const shoeInCart = useSelector((state) => {
    return state.shoeCatalog.shoes.find((item) => {
      return item.id === props.id;
    });
  });

  const dispatch = useDispatch();

  return (
    <div className="flex mb-8 p-4 border border-lightgrayBorder shadow-md rounded-lg">
      <img src={shoeInCart.imageURL} className="w-[200px]" />

      <div className="ml-8 w-[600px]">
        <p className="font-bold">{shoeInCart.name}</p>
        <div className="text-lightgrayText">
          <p>{shoeInCart.gender}</p>
          <p>Color: {shoeInCart.color}</p>
          <p>Size: {props.size}</p>
          <p>Qty: {props.qty}</p>
          <button onClick={(index) => dispatch(removeFromCart(index))}>
            Remove
          </button>
        </div>
      </div>

      <div>
        <p>${shoeInCart.price}</p>
      </div>
    </div>
  );
}

export default CartShoe;
