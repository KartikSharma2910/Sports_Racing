import { Box } from "@mui/material";
import styles from "./styles";
import { ProgressBar } from "components/common";

const Performance = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.heading}>Performance test</Box>
        <Box sx={styles.description}>
          This summary highlights the performance of the Toyota Camry across
          various tests:
        </Box>
        <Box sx={styles.miniDesc}>
          0-100 km/h (0-62 mph): Achieved in a respectable (7.2 seconds)
          seconds, showcasing adequate acceleration for a mid-size sedan. (This
          falls in line with class expectations)
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="Adequate Acceleration" number="80" />
          </Box>
          <Box sx={styles.miniDesc}>
            Highway Cruising: The Camry proved comfortable and stable at highway
            speeds, offering a smooth and quiet ride for long journeys.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="Highway Cruising" number="70" />
          </Box>
          <Box sx={styles.miniDesc}>
            Highway Cruising: The Camry proved comfortable and stable at highway
            speeds, offering a smooth and quiet ride for long journeys.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="Quarter-mile Acceleration" number="75" />
          </Box>
          <Box sx={styles.miniDesc}>
            Quarter-mile Acceleration: Completed in (15.5 seconds),
            demonstrating the car's ability to pick up speed from a standstill.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="Top Speed" number="60" />
          </Box>
          <Box sx={styles.miniDesc}>
            Mountain Driving: While not a dedicated sports car, the Camry
            handled mountain roads competently. The power delivery, steering
            response, or braking performance proved sufficient for navigating
            winding inclines and declines.
          </Box>
        </Box>
        <Box sx={styles.miniDesc}>
          Overall: The Toyota Camry prioritizes comfort and efficiency but
          delivers a capable and well-rounded performance experience.
        </Box>
      </Box>
      <Box sx={styles.imageBox}>
        <Box component="img" src="/score.png" />
      </Box>
    </Box>
  );
};

export default Performance;
