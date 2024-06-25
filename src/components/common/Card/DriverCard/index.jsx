import { Box } from "@mui/material";
import styles from "./styles";

const DriverCard = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/driver1.png" sx={styles.image} />
      <Box sx={styles.container}>
        <Box sx={styles.flexer}>
          <Box sx={styles.heading}>
            <Box>Max</Box>
            <Box>Verstappen</Box>
          </Box>
          <Box component="img" src="/india.png" />
        </Box>
        <Box sx={styles.flexer}>
          <Box sx={styles.baseHeading}>Team</Box>
          <Box sx={styles.description}>Red Bull Racing</Box>
        </Box>
        <Box sx={styles.flexer}>
          <Box sx={styles.baseHeading}>Country</Box>
          <Box sx={styles.description}>Netherlands</Box>
        </Box>
        <Box sx={styles.flexer}>
          <Box component="img" src="/800cc.png" />
          <Box component="img" src="/ctg.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default DriverCard;
