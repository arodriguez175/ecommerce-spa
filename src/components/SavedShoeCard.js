import { useSelector } from "react-redux";
import ShoeCard from "./ShoeCard";

function SavedShoeCard(props) {
  const shoeFromCatalog = useSelector((state) => {
    return state.shoeCatalog.shoes.find((item) => {
      return item.id === props.id;
    });
  });

  return (
    <div>
      <ShoeCard
        id={shoeFromCatalog.id}
        image={shoeFromCatalog.imageURL}
        name={shoeFromCatalog.name}
        price={shoeFromCatalog.price}
        size={props.size}
      />
    </div>
  );
}

export default SavedShoeCard;
