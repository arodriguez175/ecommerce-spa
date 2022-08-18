import { Link } from "react-router-dom";

function ShoeCard(props) {
  return (
    <Link to={`/shoes/${props.id}`} key={props.id}>
      <div>
        <img src={props.image} className="drop-shadow-md rounded-xl" />
        <p className="text-[16pt] mt-3">{props.name}</p>
        <p className="text-[16pt]">${props.price}</p>
        <p>{props.gender}</p>
      </div>
    </Link>
  );
}

export default ShoeCard;
