import "./App.css";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Box w="100%">
        <Navbar />
      </Box>
    </div>
  );
}

export default App;
