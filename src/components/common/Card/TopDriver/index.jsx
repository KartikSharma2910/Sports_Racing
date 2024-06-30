import { Box } from "@mui/material";
import styles from "./styles";

const TopDriver = ({
  number,
  top,
  name,
  country,
  points,
  race,
  customStyles,
}) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      <Box sx={styles.number}>{number}</Box>
      <Box sx={styles.imageContainer}>
        <Box component="img" src={top} sx={styles.image} />
      </Box>
      <Box sx={styles.container}>
        <Box>
          <Box sx={styles.heading}>{name}</Box>
          <Box sx={styles.description}>{country}</Box>
        </Box>
        <Box>
          <Box sx={styles.miniBox}>
            <Box sx={styles.miniHeading}>Points</Box>
            <Box sx={styles.description}>{points}</Box>
          </Box>
          <Box sx={styles.miniBox}>
            <Box sx={styles.miniHeading}>Race</Box>
            <Box sx={styles.description}>{race}</Box>
          </Box>
        </Box>
        <Box sx={styles.tyreWrapper}>
          <Box component="img" src="/tyre.png" sx={styles.tyre} />
        </Box>
      </Box>
      <Box sx={styles.borderBox} />
    </Box>
  );
};

export default TopDriver;
