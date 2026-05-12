import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Nav from "./components/Nav";
import {createTheme, ThemeProvider} from "@mui/material/styles"; //para cmbiar colores de base

const theme = createTheme ({
  palette:{
    primary:{
      main:"#561c76"
    }
  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
