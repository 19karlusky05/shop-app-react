import React from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import shopImage from './images/shop.jpg'; // recuerda importar imagenes!


function About() {
  return <Container><Typography 
      variant="h4"
      component="h3"
      color="primary"sx={{ margin: 3 }}>About Us</Typography>

    <img src={shopImage} alt="Shop" width="1000px"/>

    <h2> Welcome to PS PHONES SHOP </h2>
    <p> PS Phones Shop is the leading global marketplace dedicated to professionally refurbished technology. Our mission is to create a world that does more with what we already have by prolonging the lifespan of electronic devices through circularity and repair.
      Founded in Paris in 2019, the company has grown by double digits year over year and to date over 30 million refurbished devices have been sold on PS Phones Shop across 17 markets, avoiding approximately 1.6 million tons of carbon emissions.
    </p>
_____________________________________________________________________________

    <h2>🍞 What We Offer</h2>
    <p>
      We establish sustainable partnerships in electronic waste management and measure our environmental impact.
      <p>•	At PS Phone Shop, we're fighting against fast tec</p>
      <p>•	Our 2024 Impact Report examines the environmental impact of our favorite pocket devices—the good, the bad, and the Back Market.</p>
      <p>•	PS Phones Shop Promise means refurbished devices that have been inspected by industry professionals</p>
      <p>•	Right to repair. It’s no secret that your tech works better and lasts longer if you take care of it. </p>
      <p>•	We're a certified B-Corp</p>
    </p>


  <br />
  <br />
    </Container>; 
}

// br /> es para hacer espacios entre contenido
export default About;