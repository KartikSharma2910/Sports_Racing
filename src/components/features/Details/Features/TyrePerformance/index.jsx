import { Box } from "@mui/material";
import { ProgressBar } from "components/common";
import styles from "./styles";

const TyrePerformance = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.heading}>Tyre Performance test</Box>
        <Box sx={styles.description}>
          This summary highlights the performance of the tested tires on a
          Toyota Camry:
        </Box>
        <Box sx={styles.miniDesc}>
          Wet and Dry Traction: The tires provided confident grip in both dry
          and wet conditions. Braking distances and handling performance were
          impressive on both surfaces.
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="WET AND DRY TRACTION" number="80" />
          </Box>
          <Box sx={styles.miniDesc}>
            Treadwear: The tires exhibited good treadwear, indicating a
            projected lifespan of 50,000-60,000 miles under normal driving
            conditions.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="TREADWARE" number="70" />
          </Box>
          <Box sx={styles.miniDesc}>
            Rolling Resistance: The tires offered low rolling resistance,
            potentially contributing to improved fuel economy for the Camry.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="ROLLING RESISTANCE" number="75" />
          </Box>
          <Box sx={styles.miniDesc}>
            Aquaplaning Resistance: The tires demonstrated Good resistance to
            hydroplaning, providing a reassuring level of safety in wet weather.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="AQUAPLANING" number="60" />
          </Box>
          <Box sx={styles.miniDesc}>
            Noise Comfort: The tires generated low road noise, contributing to a
            quiet driving experience within the Camry.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="NOISE COMFORT" number="60" />
          </Box>
        </Box>
        <Box sx={styles.miniDesc}>
          Overall: These tires offer a balanced performance for the Toyota
          Camry, prioritizing safety and comfort with decent wear
          characteristics. They could potentially benefit from slightly better
          wet traction for enhanced safety in rainy conditions.
        </Box>
      </Box>
      <Box sx={styles.imageBox}>
        <Box component="img" src="/score.png" />
      </Box>
    </Box>
  );
};

export default TyrePerformance;
