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
      {shoe ? <p>{shoe.name}</p> : <p>Sorry, this shoe does not exist</p>}
    </div>
  );
}

export default ShoePage;
