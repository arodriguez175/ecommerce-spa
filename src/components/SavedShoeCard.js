import { useSelector, useDispatch } from "react-redux";
import { removeSavedItem } from "../features/saveItem/saveItemSlice";
import ShoeCard from "./ShoeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function SavedShoeCard(props) {
  const shoeFromCatalog = useSelector((state) => {
    return state.shoeCatalog.shoes.find((item) => {
      return item.id === props.id;
    });
  });

  const dispatch = useDispatch();
  const index = props.index;

  return (
    <div className="relative">
      <ShoeCard
        id={shoeFromCatalog.id}
        image={shoeFromCatalog.imageURL}
        name={shoeFromCatalog.name}
        price={shoeFromCatalog.price}
        size={props.size}
        gender={
          shoeFromCatalog.gender.length > 1 ? "Unisex" : shoeFromCatalog.gender
        }
      />
      <button className="absolute top-0 right-0 p-4 md:p-2 lg:p-4">
        <FontAwesomeIcon
          icon={faXmark}
          className="text-[20px] text-lightgrayText"
          onClick={() => dispatch(removeSavedItem(index))}
        />
      </button>
    </div>
  );
}

export default SavedShoeCard;
