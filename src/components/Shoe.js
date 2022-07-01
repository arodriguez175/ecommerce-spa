import { shoes } from "../mocks";

function Shoe(props) {
  return (
    <div>
      <img src={shoes[0].imageURL} />
      <p>{shoes[0].name}</p>
      <p>${shoes[0].price}</p>
    </div>
  );
}

export default Shoe;
