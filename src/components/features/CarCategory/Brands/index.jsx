import { Box } from "@mui/material";
import { Card } from "components/common";
import styles from "./styles";

const Brands = () => {
  return (
    <Box sx={styles.cardWrapper}>
      <Card as="BrandCard" source="/brandCard1.png" />
      <Card as="BrandCard" source="/brandCard2.png" />
      <Card as="BrandCard" source="/brandCard3.jpeg" />
      <Card as="BrandCard" source="/brandCard4.png" />
      <Card as="BrandCard" source="/brandCard5.jpeg" />
    </Box>
  );
};

export default Brands;
