import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";

function App() {

  return (
    <Box className="App">
      <Container maxW={{xl:"5xl",lg:"5xl", md:"5xl", sm:"lg"}} p={0} border="1px solid">
        <AllRoutes />
      </Container>
    </Box>
  );
}

export default App;
