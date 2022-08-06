function Search() {
  return (
    <div className="search">
      <span>
        <input
          className="border border-lightgray2 shadow 1px 2px 3px gainsboro-100 rounded p-3 w-[600px]"
          placeholder="Search for..."
        />
        <button className="bg-shoe-primary text-shoe-text-hover ml-1 rounded p-3 hover:bg-shoe-hover">
          Search
        </button>
      </span>
    </div>
  );
}

export default Search;
