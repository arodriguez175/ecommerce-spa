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
    /* The "name" field from my shoe catalog will be the data Turnstone will look at */
    displayField: "name",
    data: shoeCatalog,
    // Auto suggest results that contain a character or word being typed
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
      {/* Turnstone makes an input field with autofill feature */}
      <Turnstone
        listbox={listBox}
        typeahead={true}
        ref={turnstoneRef} // References Turnstone search bar
        styles={styles}
        id="turnstoneId"
        value={searchQuery} // Initial state
        onChange={(e) =>
          /* Set the state for the search query to be 
          what is being typed in the serch bar */
          setSearchQuery(document.querySelector("#turnstoneId").value)
        }
        onSelect={(selectedItem) => {
          /* If a user clicks on an auto suggested name, it will
          take them to that specific shoe page and clear the input field if it has
          a value */
          if (selectedItem) {
            navigate(`/shoes/${selectedItem.id}`);
            turnstoneRef.current?.clear();
          }
        }}
        placeholder="Search for..."
      />
      <button
        className="bg-primary text-secondary ml-1 rounded p-3 hover:bg-darkgray"
        disabled={!searchQuery} // disabled until my searchbar is not an empty string
        onClick={() => {
          // Takes you to the search results page
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
