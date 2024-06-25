import { Box } from "@mui/material";
import { Card } from "components/common";
import { cobra } from "constants/cobra";
import styles from "./styles";

const Cars = () => {
  return (
    <Box sx={styles.wrapper}>
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

export default Cars;
