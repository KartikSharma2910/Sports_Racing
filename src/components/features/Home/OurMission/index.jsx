import { Box } from "@mui/material";
import styles from "./styles";

const OurMission = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageContainer}>
        <Box component="img" src="/mission.jpeg" sx={styles.image} />
      </Box>
      <Box sx={styles.dataSet}>
        <Box sx={styles.heading}>
          Secure your spot: Register now for velocity Events!
        </Box>
        <Box sx={styles.medium}>Our Mission</Box>
        <Box sx={styles.description}>
          Our mission is simple: to fuel your passion for racing. Whether you're
          a seasoned professional, an amateur driver, or simply an admirer of
          finely-tuned machines, we're here to support you every step of the
          way. From providing top-quality race cars and parts to offering expert
          advice and resources, we're committed to helping you achieve your
          racing goals.
        </Box>
      </Box>
    </Box>
  );
};

export default OurMission;
