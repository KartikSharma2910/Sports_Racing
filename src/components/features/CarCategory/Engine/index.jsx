import { Box } from "@mui/material";
import { Card } from "components/common";
import { engine } from "constants/engine";
import styles from "./styles";

const Engine = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>
        <span className="red">Rev Up</span> Your Engines
      </Box>
      <Box sx={styles.description}>
        "Dive into the heart of the action as we delve into 13 exhilarating
        categories of CC cars racing, from high-speed thrills to
        adrenaline-fueled competitions. Explore the diverse range of engine
        sizes and experience the intensity of each category as drivers push the
        limits to claim victory on the track."
      </Box>
      <Box sx={styles.cardsWrapper}>
        {engine.map((card, index) => (
          <Card
            key={index}
            number={index + 1}
            reverse={index % 2 === 0 ? "row" : "row-reverse"}
            as="EngineCard"
            {...card}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Engine;
