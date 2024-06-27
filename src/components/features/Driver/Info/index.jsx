import { Box } from "@mui/material";
import styles from "./styles";

const Info = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/infoImage.jpeg" sx={styles.image} />
      <Box sx={styles.overlay} />
      <Box sx={styles.bottomLay} />
      <Box sx={styles.container}>
        <Box component="img" src="/redbull.png" sx={styles.logo} />
        <Box sx={styles.heading}>Apex Predators</Box>
        <Box sx={styles.description}>
          Step into the world of racing excellence as we introduce you to the
          elite drivers who dominate the circuit. From seasoned champions to
          rising stars, our lineup of apex predators is poised to thrill,
          inspire, and leave you on the edge of your seat. Explore their
          stories, achievements, and relentless pursuit of victory in the
          high-speed realm of motorsport.
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
