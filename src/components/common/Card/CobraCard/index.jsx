import { Box } from "@mui/material";
import styles from "./styles";

const CobraCard = ({ image, heading, description }) => {
  return (
    <Box>
      <Box sx={styles.imageWraper}>
        <Box component="img" src={image} sx={styles.image} />
      </Box>
      <Box sx={styles.dataContainer}>
        <Box sx={styles.heading}>{heading}</Box>
        <Box sx={styles.description}>{description}</Box>
      </Box>
    </Box>
  );
};

export default CobraCard;
