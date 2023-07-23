import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../Header/Index"
import Footer from "../Footer/Index";
const LayoutWrapper = ({ children }) => {
  return (
    <Box
    backgroundImage={"url(/Homefeed/backgroundCol.png)"}
      backgroundPosition="center top"
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default LayoutWrapper;
