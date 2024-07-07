import { Box } from "@mui/material";
import { Card } from "components/common";
import styles from "./styles";

const Action = () => {
  const cards = ["/action1.png", "/action2.png", "/action3.jpeg"];
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.headWrapper}>
        <Box sx={styles.heading}>Best of Action</Box>
        <Box sx={styles.view}>view more</Box>
      </Box>
      <Box sx={styles.cardWrapper}>
        {cards.map((item, index) => (
          <Box sx={styles.card}>
            <Card key={index} as="ActionCard" image={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Action;
