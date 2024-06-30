import { Box } from "@mui/material";
import styles from "./styles";

const Banner = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/termsAndCondition.png" sx={styles.image} />
      <Box sx={styles.overlay} />
    </Box>
  );
};

export default Banner;
