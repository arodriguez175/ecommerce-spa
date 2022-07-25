import { useSelector } from "react-redux";

function CartShoe(props) {
  const shoeInCart = useSelector((state) => {
    return state.shoeCatalog.shoes.find((item) => {
      return item.id === props.id;
    });
  });

  return (
    <div>
      <img src={shoeInCart.imageURL} className="w-[300px]" />
      <p>{shoeInCart.name}</p>
      <p>{shoeInCart.gender}</p>
      <p>{shoeInCart.color}</p>
      <p>{props.size}</p>
      <p>Qty {/* Qty */}</p>
      <p>${shoeInCart.price}</p>
      <button>Remove</button>
    </div>
  );
}

export default CartShoe;
