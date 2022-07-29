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
        <div className="text-[#b5b5b5]">
          <p>{shoeInCart.gender}</p>
          <p>Color: {shoeInCart.color}</p>
          <p>Size: {props.size}</p>
          <p>Qty {/* Qty */}</p>
          <button>Remove</button>
        </div>
      </div>

      <div>
        <p>${shoeInCart.price}</p>
      </div>
    </div>
  );
}

export default CartShoe;
