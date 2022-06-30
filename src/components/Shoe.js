function Shoe(props) {
  return (
    <div>
      <img src={props.image} />
      <p>{props.name}</p>
      <p>${props.price}</p>
    </div>
  );
}

export default Shoe;
