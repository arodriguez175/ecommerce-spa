import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ShoePage() {
  let params = useParams();
  const shoe = useSelector((state) =>
    state.shoeCatalog.shoes.find(
      (pairOfShoes) => pairOfShoes.id === parseInt(params.shoeId)
    )
  );
  return (
    <div className="mx-20">
      <h2 className="text-center text-2xl m-5">Shoe Page</h2>

      <div className="flex">
        <img
          src={shoe.imageURL}
          className="drop-shadow-md rounded-xl w-[45%]"
        />

        <div className="ml-20">
          {shoe ? (
            <p className="text-[16pt]">{shoe.name}</p>
          ) : (
            <p>Sorry, this shoe does not exist</p>
          )}
          <p className="text-[16pt]">${shoe.price}</p>

          <div className="grid grid-cols-5 gap-1">
            {shoe.sizes.map((size) => (
              <label
                key={size}
                className="border
                text-center 
                rounded 
                p-2 px-5 
                hover:bg-[#363636] 
                hover:text-white 
                hover:cursor-pointer"
              >
                {size}
                <input
                  key={size}
                  className="opacity-0 w-0"
                  type="radio"
                  name="radioSize"
                  value={size.index}
                />
              </label>
            ))}
          </div>

          <div className="border">
            <button>Add to Cart</button>
            <button>Save to List</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoePage;
