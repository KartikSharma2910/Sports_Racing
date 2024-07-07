import { Box } from "@mui/material";
import styles from "./styles";

const RaceTrack = () => {
  const data = {
    Type: "Race Track",
    Dimension: "8296 (m)",
    "Pole Position": "Left",
    "Driving Direction": "Clockwise",
    "Number of turns": "12",
    "Lap record": "1:24.119",
    Location: "Greater Noida, India",
  };

  return (
    <Box sx={styles.dataWrap}>
      <Box sx={styles.leftBox}>
        <Box>
          <Box sx={styles.heading}>Himalayan Speed</Box>
          <Box sx={styles.heading}>Challenge</Box>
        </Box>
        <Box sx={{ ...styles.description, width: "80%" }}>
          he Himalayan Speed Challenge is a high-adrenaline circuit race held in
          the breathtaking surroundings of Shillong, Meghalaya, India. Scheduled
          for June 30th, 2024, this race will see drivers battle it out on a
          challenging track nestled amidst the Himalayan foothills. Expect
          stunning scenery alongside tight corners, steep inclines, and the test
          of both skill and nerve behind the wheel.
        </Box>
        <Box sx={styles.heading}>sat 8 - sun 9 jun 2024</Box>
        <Box sx={styles.button}>BOOK TICKET NOW</Box>
      </Box>
      <Box sx={styles.rightBox}>
        <Box sx={styles.keyBox}>
          <Box sx={styles.leftBox}>
            {Object.entries(data).map(([key, value], index) => (
              <Box key={index} sx={styles.miniKeyBox}>
                <Box sx={styles.description}>{key}:</Box>
                <Box sx={styles.description}>{value}</Box>
              </Box>
            ))}
          </Box>
          <Box sx={styles.rightBox}>
            <Box component="img" src="/raceDetail2.png" sx={styles.image} />
          </Box>
        </Box>
        <Box component="img" src="/miniCars.png" />
      </Box>
    </Box>
  );
};

export default RaceTrack;
