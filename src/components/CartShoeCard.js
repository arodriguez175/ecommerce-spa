import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function CartShoeCard(props) {
  const shoeInCart = useSelector((state) => {
    return state.shoeCatalog.shoes.find((item) => {
      return item.id === props.id;
    });
  });

  const dispatch = useDispatch();
  const index = props.index;

  return (
    <div className="md:flex mb-8 p-4 border border-lightgrayBorder shadow-md rounded-lg">
      <img src={shoeInCart.imageURL} className="md:w-[200px]" />

      <div className="md:ml-8 md:w-[204px] lg:w-[600px]">
        <p className="font-bold">{shoeInCart.name}</p>
        <div className="text-lightgrayText">
          <p>{shoeInCart.gender}</p>
          <p>Color: {shoeInCart.color}</p>
          <p>Size: {props.size}</p>
          <p>Qty: {props.qty}</p>
          <button onClick={() => dispatch(removeFromCart(index))}>
            Remove
          </button>
        </div>
      </div>

      <div className="text-[15pt] mt-[12px] md:text-[12pt] md:mt-0">
        <p>${shoeInCart.price}</p>
      </div>
    </div>
  );
}

export default CartShoeCard;
