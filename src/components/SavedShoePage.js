import { useSelector } from "react-redux";
import SavedShoeCard from "./SavedShoeCard";

function SavedShoePage() {
  const savedItems = useSelector((state) => {
    return state.saveItem.savedItems;
  });

  return (
    <div>
      {savedItems.length ? (
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
      ) : (
        <p className="text-center m-10 text-[30px]">
          There are no items saved.
        </p>
      )}
    </div>
  );
}

export default SavedShoePage;
