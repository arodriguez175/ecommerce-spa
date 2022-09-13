import { useSelector } from "react-redux";
import SavedShoeCard from "./SavedShoeCard";

function SavedShoePage() {
  const savedItems = useSelector((state) => {
    return state.saveItem.savedItems;
  });

  return (
    <div>
      <h2 className="text-center text-2xl m-5">Saved Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 md:mx-20">
        {savedItems.map((item, index) => (
          <SavedShoeCard
            key={index}
            id={item.id}
            size={item.size}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default SavedShoePage;
