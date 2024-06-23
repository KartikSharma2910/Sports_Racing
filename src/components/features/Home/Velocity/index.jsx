import { Box } from "@mui/material";
import { Card } from "components/common";
import styles from "./styles";

const Velocity = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/velocity.png" sx={styles.image} />
      <Box sx={styles.dataContainer}>
        <Box sx={styles.heading}>Velocity</Box>
        <Box sx={styles.description}>The race of generation</Box>
      </Box>
      <Box sx={styles.cardWrapper}>
        <Card as="BrandCard" />
        <Card as="BrandCard" />
        <Card as="BrandCard" />
        <Card as="BrandCard" />
        <Card as="BrandCard" />
      </Box>
    </Box>
  );
};

export default Velocity;
