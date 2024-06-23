import { Box } from "@mui/material";
import styles from "./styles";

const ParticipantCard = ({ participant, color, banner, race }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.leftBox}>
        <Box sx={styles.leftContainer}>
          <Box sx={styles.leftImageWrap}>
            <Box component="img" src={participant} sx={styles.leftImage} />
          </Box>
          <Box sx={styles.leftDataBox}>
            <Box sx={styles.heading}>Charles Leclerc</Box>
            <Box sx={styles.description}>
              Team:{" "}
              <Box component="span" sx={{ color }}>
                Scuderia Ferrari
              </Box>
            </Box>
            <Box sx={styles.description}>
              Charles Leclerc, hailing from Monaco, has quickly risen through
              the ranks to become one of the most promising talents in Formula
              One. With his impressive speed, consistency, and racecraft,
              Leclerc continues to impress fans and rivals alike.
            </Box>
            <Box sx={{ ...styles.button, backgroundColor: color }}>
              Explore More
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.rightBox}>
        <Box component="img" src={banner} sx={styles.image} />
        <Box sx={styles.control}>
          <Box component="img" src={race} sx={styles.image} />
          <Box component="img" src="/race.png" sx={styles.race} />
        </Box>
      </Box>
    </Box>
  );
};

export default ParticipantCard;
