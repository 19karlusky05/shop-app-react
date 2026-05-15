import { useParams } from "react-router-dom";
import { Container, Button } from "@mui/material";
import { productsPhones } from "./ProductsPhones";

function ProductDetails() {
  const { id } = useParams();

  /* PARA VER INFO INDIVIDUALMENTE, obtener id */
  const product = productsPhones.find((p) => p.id === parseInt(id));


  return (
    <Container>

      <img
        src={product.image}
        alt={product.name}
        width="250"
      />

      <h2>{product.name}</h2>

      <p>{product.price}€</p>

      <p>{product.description}</p>

      <Button
        variant="contained"
      >
        Add to cart
      </Button>

    </Container>
  );
}

export default ProductDetails;