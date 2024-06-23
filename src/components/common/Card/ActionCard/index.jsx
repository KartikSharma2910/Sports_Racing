import { Box } from "@mui/material";
import styles from "./styles";

const ActionCard = ({ image }) => {
  return (
    <Box>
      <Box sx={styles.imageWrapper}>
        <Box component="img" src={image} sx={styles.image} />
      </Box>
      <Box sx={styles.dataWrapper}>
        <Box sx={styles.highlight}>sat 8 - sun 9 jun 2024</Box>
        <Box>Indian RX of Delhi</Box>
        <Box>71d 16h 27m 46s</Box>
      </Box>
    </Box>
  );
};

export default ActionCard;
