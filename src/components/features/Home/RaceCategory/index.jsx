import { Box } from "@mui/material";
import { Card } from "components/common";
import { raceCategory } from "constants/raceCategory";
import styles from "./styles";

const RaceCategory = () => {
  return (
    <Box>
      <Box sx={styles.tapeWrapper}>
        <Box component="img" src="/raceBack.png" sx={styles.image} />
        <Box sx={styles.tapeText}>Race Category</Box>
      </Box>
      <Box sx={styles.cardWrapper}>
        {raceCategory.map(({ heading, description, image }, index) => (
          <Card
            key={index}
            number={index + 1}
            heading={heading}
            description={description}
            image={image}
            customStyles={{
              ...styles.card,
              flexDirection: index % 2 === 0 ? "column" : "column-reverse",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RaceCategory;
