import React from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import heroimg from './images/hero.jpeg';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: "WELCOME TO OUR ELECTRONIC SHOP!"};

    this.updateState = this.updateState.bind(this);
  }

  updateState () {
    this.setState ({ message: "Check our latest deals 🔥"});
  }


  render() {
    return (
    <Container>
      <Typography 
          variant="h4"
          component="h3"
          color="primary"sx={{ margin: 3 }}>Home Page
      </Typography>

    <h2> {this.state.message} </h2>

    <img src={heroimg} alt="electronics" width="1000px"/>

    
    <p> Buy the best refurbished smartphones, laptops and tech on Back Market, at up to 70% cheaper </p>

    
    <br />
    <br />


      <ButtonGroup variant="contained" sx={{ mb:4 }} aria-label="Basic button group">
        <Button onClick={this.updateState}>Click here to know more!</Button>
      </ButtonGroup>

    </Container> 
    );
  }
}

export default Home;
