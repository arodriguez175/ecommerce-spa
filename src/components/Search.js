function Search() {
  return (
    <div className="search">
      <span>
        <input
          className="border 1px solid #d9d9d9 
          shadow 1px 2px 3px #bfbfbf
          gainsboro-100 
          rounded 
          p-3
          w-[600px]"
          placeholder="Search for..."
        />
        <button
          className="bg-[#363636] 
          text-shoe-text-hover 
          ml-1 
          rounded 
          p-3
          hover:bg-[#4d4d4d]"
        >
          Search
        </button>
      </span>
    </div>
  );
}

export default Search;
