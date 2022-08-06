function Search() {
  return (
    <div className="search">
      <span>
        <input
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
