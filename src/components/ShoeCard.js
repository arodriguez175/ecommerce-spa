import { Link } from "react-router-dom";

function ShoeCard(props) {
  return (
    <Link to={`/shoes/${props.id}`} key={props.id}>
      <div>
        <img src={props.image} className="drop-shadow-md" />
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
    </Link>
  );
}

export default ShoeCard;
