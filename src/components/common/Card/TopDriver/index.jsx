import { Box } from "@mui/material";
import styles from "./styles";

const TopDriver = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageContainer}>
        <Box component="img" src="/top1.png" sx={styles.image} />
      </Box>
      <Box sx={styles.container}>
        <Box>
          <Box>Max Verstappen</Box>
          <Box sx={{ color: "#797979" }}>Netherlands</Box>
        </Box>
        <Box>
          <Box sx={styles.miniBox}>
            <Box>Points</Box>
            <Box sx={{ color: "#797979" }}>2637.5</Box>
          </Box>
          <Box>
            <Box>Race</Box>
            <Box>15</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopDriver;
