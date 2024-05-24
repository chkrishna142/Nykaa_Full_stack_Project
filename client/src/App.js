import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import CartItem from "./Components/Cards/CardItem";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <main></main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
