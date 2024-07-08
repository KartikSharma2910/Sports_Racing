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
          source="/brandCard1.png"
          height={styles.cardHeight}
          width={styles.cardWidth}
        />
        <Card
          as="BrandCard"
          source="/brandCard2.png"
          height={styles.cardHeight}
          width={styles.cardWidth}
        />
        <Card
          as="BrandCard"
          source="/brandCard3.jpeg"
          height={styles.cardHeight}
          width={styles.cardWidth}
        />
        <Card
          as="BrandCard"
          source="/brandCard4.png"
          height={styles.cardHeight}
          width={styles.cardWidth}
        />
        <Card
          as="BrandCard"
          source="/brandCard5.jpeg"
          height={styles.cardHeight}
          width={styles.cardWidth}
        />
      </Box>
    </Box>
  );
};

export default Velocity;
