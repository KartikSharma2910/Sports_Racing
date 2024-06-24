import { Box } from "@mui/material";
import styles from "./styles";

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
            <Box sx={styles.upperCase}>Adequate Acceleration</Box>
            <Box>
              <Box component="img" src="/progress.png" />
            </Box>
          </Box>
          <Box sx={styles.miniDesc}>
            Highway Cruising: The Camry proved comfortable and stable at highway
            speeds, offering a smooth and quiet ride for long journeys.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <Box sx={styles.upperCase}>Adequate Acceleration</Box>
            <Box>
              <Box component="img" src="/progress.png" />
            </Box>
          </Box>
          <Box sx={styles.miniDesc}>
            Highway Cruising: The Camry proved comfortable and stable at highway
            speeds, offering a smooth and quiet ride for long journeys.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <Box sx={styles.upperCase}>Adequate Acceleration</Box>
            <Box>
              <Box component="img" src="/progress.png" />
            </Box>
          </Box>
          <Box sx={styles.miniDesc}>
            Highway Cruising: The Camry proved comfortable and stable at highway
            speeds, offering a smooth and quiet ride for long journeys.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <Box sx={styles.upperCase}>Adequate Acceleration</Box>
            <Box>
              <Box component="img" src="/progress.png" />
            </Box>
          </Box>
          <Box sx={styles.miniDesc}>
            Highway Cruising: The Camry proved comfortable and stable at highway
            speeds, offering a smooth and quiet ride for long journeys.
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
