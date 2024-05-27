import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box p={4}>
        <Button onClick={toggleColorMode} mb={4}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
