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
    <div>
      <h2>Shoe Page</h2>
      {params.shoeId}
      <img src={shoe.imageURL} className="drop-shadow-md rounded-xl w-[40%]" />
      {shoe ? (
        <p className="text-[16pt]">{shoe.name}</p>
      ) : (
        <p>Sorry, this shoe does not exist</p>
      )}
      <p className="text-[16pt]">${shoe.price}</p>
    </div>
  );
}

export default ShoePage;
