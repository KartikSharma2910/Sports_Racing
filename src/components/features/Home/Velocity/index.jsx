import { Box } from "@mui/material";
import { Card } from "components/common";
import styles from "./styles";

const Velocity = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.dataContainer}>
        <Box sx={styles.heading}>Velocity</Box>
        <Box sx={styles.description}>The race of generation</Box>
      </Box>
      <Box sx={styles.cardWrapper}>
        <Card
          as="BrandCard"
          height={styles.cardHeight}
          width={styles.cardWidth}
        />
        <Card
          as="BrandCard"
          height={styles.cardHeight}
          width={styles.cardWidth}
        />
        <Card
          as="BrandCard"
          height={styles.cardHeight}
          width={styles.cardWidth}
        />
        <Card
          as="BrandCard"
          height={styles.cardHeight}
          width={styles.cardWidth}
        />
        <Card
          as="BrandCard"
          height={styles.cardHeight}
          width={styles.cardWidth}
        />
      </Box>
    </Box>
  );
};

export default Velocity;
