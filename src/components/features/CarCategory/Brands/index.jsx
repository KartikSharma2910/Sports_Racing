import { Box } from "@mui/material";
import { Card } from "components/common";
import styles from "./styles";

const Brands = () => {
  return (
    <Box sx={styles.cardWrapper}>
      <Card as="BrandCard" />
      <Card as="BrandCard" />
      <Card as="BrandCard" />
      <Card as="BrandCard" />
      <Card as="BrandCard" />
    </Box>
  );
};

export default Brands;
