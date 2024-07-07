import { Box } from "@mui/material";
import { Card } from "components/common";
import { cobra } from "constants/cobra";
import Action from "../../Action";
import OurPartner from "../../OurPartner";
import RaceTrack from "../RaceTrack";
import styles from "./styles";

const Highlights = () => {
  return (
    <Box>
      <RaceTrack />
      <Box component="img" src="/ccTape.png" sx={styles.image} />
      <Box sx={styles.cardsWrapper}>
        {cobra.map((card, index) => (
          <Box sx={styles.card}>
            <Card key={index} as="CobraCard" {...card} />
          </Box>
        ))}
      </Box>
      <Action />
      <OurPartner />
    </Box>
  );
};

export default Highlights;
