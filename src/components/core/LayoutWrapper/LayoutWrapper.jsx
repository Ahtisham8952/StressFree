import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../header/index";
import Footer from "../Footer/index";
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
