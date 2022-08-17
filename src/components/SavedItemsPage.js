import { useSelector } from "react-redux";
import SavedItemsCard from "./SavedItemsCard";

function SavedItemsPage() {
  const savedItems = useSelector((state) => {
    return state.saveItem.savedItems;
  });

  return (
    <div>
      {savedItems.map((item, index) => (
        <SavedItemsCard key={index} id={item.id} size={item.size} />
      ))}
    </div>
  );
}

export default SavedItemsPage;
