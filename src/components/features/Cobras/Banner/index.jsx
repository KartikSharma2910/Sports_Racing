import { Box } from "@mui/material";
import styles from "./styles";

const Banner = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/cobra.jpeg" sx={styles.image} />
      <Box sx={styles.overlay} />
      <Box component="img" src="/1200cc.png" sx={styles.cc} />
    </Box>
  );
};

export default Banner;
