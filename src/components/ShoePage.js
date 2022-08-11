import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./ShoePage.css";
import { addToCart } from "../features/cart/cartSlice";

function ShoePage() {
  const initialCartButtonText = "Add to Bag";
  const [cartButtonText, setCartButtonText] = useState(initialCartButtonText);
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  let params = useParams();
  const shoe = useSelector((state) =>
    state.shoeCatalog.shoes.find(
      (pairOfShoes) => pairOfShoes.id === parseInt(params.shoeId)
    )
  );

  const handleAddToCart = () => {
    const { id } = shoe;
    const selectedShoe = {
      id,
      size: selectedSize,
    };
    dispatch(addToCart(selectedShoe));

    setCartButtonText("Added to Bag");
    setTimeout(() => {
      setCartButtonText(initialCartButtonText);
    }, 1000);
  };

  return (
    <div className="mx-20 mt-10">
      {shoe ? (
        <div className="flex">
          <div>
            <img
              src={shoe.imageURL}
              className="drop-shadow-md rounded-xl w-[90%]"
            />
          </div>

          <div>
            <p className="text-[28pt]">{shoe.name}</p>
            <p className="text-[16pt]">{shoe.gender}</p>
            <p className="text-[16pt]">${shoe.price}</p>

            <div className="grid grid-cols-5 gap-1 mt-5 cursor-pointer">
              {shoe.sizes.map((size) => {
                return (
                  <label
                    key={size}
                    className={`border border-lightgrayBorder text-center rounded p-2 px-5 hover:bg-primary hover:text-secondary hover:cursor-pointer focus-within:bg-primary focus-within:text-secondary
                    ${size === selectedSize ? "selected" : ""}`}
                  >
                    {size}
                    <input
                      onChange={(event) => {
                        setSelectedSize(event.target.value);
                      }}
                      className="opacity-0 w-0"
                      type="radio"
                      name="radioSize"
                      value={size}
                    />
                  </label>
                );
              })}
            </div>

            <div className="border border-lightgrayBorder mt-5 justify-center rounded grid w-[400px]">
              <button
                onClick={handleAddToCart}
                className={`bg-primary text-secondary hover:text-secondary hover:bg-darkgray w-[300px] p-2 mt-3 mb-3 rounded
                ${!selectedSize && "disabled"}
                `}
                disabled={!selectedSize}
              >
                {cartButtonText}
              </button>
              <button className="border border-lightgrayBorder w-[300px] p-2 mb-3 rounded">
                Save to List
              </button>
            </div>

            <div className="mt-5">
              <li>Color: {shoe.color}</li>
              <li>Sku: {shoe.sku}</li>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-[20pt]">
          Sorry, this shoe is not available
        </p>
      )}
    </div>
  );
}

export default ShoePage;
