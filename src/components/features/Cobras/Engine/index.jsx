import { Box } from "@mui/material";
import { Card } from "components/common";
import { cobra } from "constants/cobra";
import styles from "./styles";

const Engine = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Corner Cobras</Box>
      <Box sx={styles.description}>
        Brace yourself for high-octane excitement in the 1200cc Championship,
        where cars with 1200cc engine sizes showcase their speed and agility on
        the racetrack. Experience the adrenaline rush as drivers push the limits
        of performance in this fiercely competitive category.
      </Box>
      <Box sx={styles.cardsWrapper}>
        {cobra.map((card, index) => (
          <Box sx={styles.card}>
            <Card key={index} as="CobraCard" {...card} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Engine;
