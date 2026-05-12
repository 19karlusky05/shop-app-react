import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { red } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Contact() {
  return <Container><Typography 
      variant="h4"
      component="h3"
      color="primary"sx={{ margin: 3 }}>Contact Us</Typography>

  <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-basic"
          label="Required"
          defaultValue="Full Name"
        />
        
        <TextField
          required
          id="outlined-basic"
          label="Required"
          defaultValue="Your email"
        />

        <br />

        <TextField
            id="outlined-multiline-static"
            label="Your question"
            multiline
            rows={4}
            defaultValue="Tell us your opinion"
          />
      </div>
    </Box>

  <br />

  <Button
    variant="contained"
    color="secondary">
      Submit
    </Button>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

    <Grid size={8}>
      <InstagramIcon sx={{ fontSize: 80 }} />
      <FacebookIcon sx={{ color: blue[900], fontSize: 80 }} />
      <YouTubeIcon sx={{ color: red[500], fontSize: 80 }} />
  </Grid>

</Container>;

}

export default Contact;
