import { Button } from "@mantine/core";
import { motion } from "framer-motion";

import { Query } from "./Query";
const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <h1>admam</h1>
      <motion.div
        style={{
          background: "black",
          borderRadius: "30px",
          width: "150px",
          height: "150px",
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      />
      <Button>Click me</Button>
      <Query />
    </div>
  );
};

export default App;
