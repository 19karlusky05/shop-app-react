import { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Container, Grid, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { productsPhones } from "./ProductsPhones";
import { productsTablets } from "./ProductsTablets";
import { productsAccessories } from "./ProductsAccesories";



function Products() {
  const [phones] = useState(productsPhones);
  const [tablets] = useState(productsTablets);
  const [accessories] = useState(productsAccessories);


  return (
    <Container>

      <Typography 
        variant="h3"
        component="h3"
        color="primary"sx={{ margin: 3 }}
        >Our Products
      </Typography>

      <Typography 
        variant="h4"
        component="h3"
        color="primary"sx={{ margin: 3 }}
        >Our Phones
      </Typography>

  
      <Grid container spacing={3}>

        {phones.map((product) => (

          <Grid item xs={12} sm={6} md={4} key={product.id}>

            <Card>

              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              <CardContent>

                <Typography variant="h6">
                  {product.name}
                </Typography>

                <Typography>
                  {product.price}€
                </Typography>

                <Button
                  variant="contained"
                  component={Link}
                  to={`/products/${product.id}`}
                >
                  View Details
                </Button>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

      <br/>

      <Typography 
        variant="h4"
        component="h3"
        color="primary"sx={{ margin: 3 }}
        >Our Tablets
      </Typography>

      <Grid container spacing={3}>

        {tablets.map((product) => (

          <Grid item xs={12} sm={6} md={4} key={product.id}>

            <Card>

              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              <CardContent>

                <Typography variant="h6">
                  {product.name}
                </Typography>

                <Typography>
                  {product.price}€
                </Typography>

                <Button
                  variant="contained"
                  component={Link}
                  to={`/products/${product.id}`}
                >
                  View Details
                </Button>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

      <br/>

      <Typography 
        variant="h4"
        component="h3"
        color="primary"sx={{ margin: 3 }}
        >Our Accessories
      </Typography>

      <Grid container spacing={3}>

        {accessories.map((product) => (

          <Grid item xs={12} sm={6} md={4} key={product.id}>

            <Card>

              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              <CardContent>

                <Typography variant="h6">
                  {product.name}
                </Typography>

                <Typography>
                  {product.price}€
                </Typography>

                <Button
                  variant="contained"
                  component={Link}
                  to={`/products/${product.id}`}
                >
                  View Details
                </Button>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Container>
  );
}

export default Products;