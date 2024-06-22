import { Box } from "@mui/material";
import { Footer, Header } from "components/common";
import styles from "./styles";

const Layout = ({ children }) => {
  return (
    <Box sx={styles.wrapper}>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
