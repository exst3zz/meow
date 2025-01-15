function Product({
  name,
  price,
  imgUrl = "https://i.pinimg.com/736x/46/c5/79/46c5794f2b217e1b7a6e424b07f14729.jpg",
}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="430" />
      <p>{price}</p>
    </div>
  );
}

export default Product;
