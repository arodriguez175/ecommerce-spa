import { useSelector } from "react-redux";
import Turnstone from "turnstone";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function Search(props) {
  // state for what goes in the search bar
  const [searchQuery, setSearchQuery] = useState("");

  const shoeCatalog = useSelector((state) => state.shoeCatalog.shoes);
  const navigate = useNavigate();
  const turnstoneRef = useRef();

  const listBox = {
    displayField: "name",
    data: shoeCatalog,
    searchType: "contains",
  };

  const styles = {
    input:
      "border border-lightgrayBorder shadow 1px 2px 3px rounded p-3 w-full focus:outline-none",
    listbox:
      "w-full border border-[#f6f6f6] bg-secondary rounded text-left mt-2 p-3 [&>*]:leading-8 drop-shadow-xl",
    highlightedItem:
      "cursor-pointer bg-[#f6f6f6] overflow-ellipsis overflow-hidden",
  };

  return (
    <div className={`flex mt-3 md:m-3 ${props.className}`}>
      <Turnstone
        listbox={listBox}
        typeahead={true}
        ref={turnstoneRef}
        styles={styles}
        id="turnstoneId"
        value={searchQuery}
        onChange={(e) =>
          setSearchQuery(document.querySelector("#turnstoneId").value)
        }
        onSelect={(selectedItem) => {
          if (selectedItem) {
            navigate(`/shoes/${selectedItem.id}`);
            turnstoneRef.current?.clear();
          }
        }}
        placeholder="Search for..."
      />
      <button
        className="bg-primary text-secondary ml-1 rounded p-3 hover:bg-darkgray"
        disabled={!searchQuery}
        onClick={() => {
          navigate(
            `/search?query=${document.querySelector("#turnstoneId").value}`
          );
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
