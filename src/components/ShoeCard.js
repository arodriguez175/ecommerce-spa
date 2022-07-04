import { Link } from "react-router-dom";

function ShoeCard(props) {
  return (
    <Link to={`/shoes/${props.id}`} key={props.id}>
      <div>
        <img src={props.image} />
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
    </Link>
  );
}

export default ShoeCard;
