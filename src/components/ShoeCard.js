import { useParams, Link } from "react-router-dom";

function ShoeCard(props) {
  let params = useParams();
  return (
    <Link to={`/shoes/${props.id}`} key={props.id}>
      <div>
        {params.shoe}
        <img src={props.image} />
        <p>{props.name}</p>
        <p>${props.price}</p>
      </div>
    </Link>
  );
}

export default ShoeCard;
