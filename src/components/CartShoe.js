import { useSelector } from "react-redux";

function CartShoe(props) {
  const shoeInCart = useSelector((state) => {
    return state.shoeCatalog.shoes.find((item) => {
      return item.id === props.id;
    });
  });

  return (
    <div className="flex mb-8">
      <img src={shoeInCart.imageURL} className="w-[200px]" />

      <div className="ml-8 w-[500px]">
        <p className="font-bold">{shoeInCart.name}</p>
        <p>{shoeInCart.gender}</p>
        <p>{shoeInCart.color}</p>
        <p>{props.size}</p>
        <p>Qty {/* Qty */}</p>
        <button>Remove</button>
      </div>

      <div>
        <p>${shoeInCart.price}</p>
      </div>
    </div>
  );
}

export default CartShoe;
