import { Box } from "@mui/material";
import styles from "./styles";

const Banner = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/raceCar.jpeg" sx={styles.image} />
      <Box sx={styles.leftBox} />
      <Box sx={styles.rightBox} />
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.heading}>
          Welcome to <span className="red">velocity</span> Where Every Car Has a
          Chance <span className="red">to Race!</span>
        </Box>
        <Box sx={styles.description}>
          <Box>Experience the thrill of diverse car</Box>
          <Box className="red">Competitions like never before. </Box>
        </Box>
        <Box sx={styles.buttonWrapper}>
          <Box sx={styles.race}>Race Now</Box>
          <Box sx={styles.register}>Register Now</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
