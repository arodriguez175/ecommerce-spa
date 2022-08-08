import { useSelector } from "react-redux";
import Turnstone from "turnstone";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Search() {
  const shoeCatalog = useSelector((state) => state.shoeCatalog.shoes);
  const navigate = useNavigate();
  const turnstoneRef = useRef();
  const listBox = {
    displayField: "name",
    data: shoeCatalog,
  };

  return (
    <div className="search">
      <span>
        <Turnstone
          listbox={listBox}
          typeahead={true}
          ref={turnstoneRef}
          onSelect={(selectedItem) => {
            if (selectedItem) {
              navigate(`/shoes/${selectedItem.id}`);
              turnstoneRef.current?.clear();
            }
          }}
          className="border border-lightgrayBorder shadow 1px 2px 3px gainsboro-100 rounded p-3 w-[600px]"
          placeholder="Search for..."
        />
        <button className="bg-primary text-secondary ml-1 rounded p-3 hover:bg-darkgray">
          Search
        </button>
      </span>
    </div>
  );
}

export default Search;
