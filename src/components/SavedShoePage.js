import { useSelector } from "react-redux";
import SavedShoeCard from "./SavedShoeCard";

function SavedShoePage() {
  const savedItems = useSelector((state) => {
    return state.saveItem.savedItems;
  });

  return (
    <div>
      {savedItems.map((item, index) => (
        <SavedShoeCard key={index} id={item.id} size={item.size} />
      ))}
    </div>
  );
}

export default SavedShoePage;
