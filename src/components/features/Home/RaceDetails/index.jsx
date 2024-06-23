import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/material";
import { raceDetails } from "constants/raceDetails";
import styles from "./styles";

const RaceDetails = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.header}>Race Details</Box>
      {raceDetails.map(({ image, heading, description, raceTime }, index) => (
        <Box sx={styles.wrapper}>
          <Box sx={styles.container}>
            <Box sx={styles.imageBox}>
              <Box component="img" src={image} sx={styles.image} />
            </Box>
            <Box sx={styles.dataContainer}>
              <Box sx={styles.heading}>{heading}</Box>
              <Box sx={styles.timerBox}>
                <Box sx={styles.time}>
                  <AccessTimeFilledIcon sx={styles.icon} /> Time: 3:00 PM
                </Box>
                <Box sx={styles.time}>
                  <CalendarMonthIcon sx={styles.icon} /> Date: May 20, 2024
                </Box>
                <Box sx={styles.time}>
                  <LocationOnIcon sx={styles.icon} /> Location: Circuit de
                  Monaco, Monaco
                </Box>
              </Box>
              <Box sx={styles.description}>{description}</Box>
              <Box>
                <Box sx={styles.redHead}>Race Schedule</Box>
                <Box sx={styles.minDesc}>{raceTime}</Box>
              </Box>
              <Box sx={styles.register}>Register Now</Box>
            </Box>
          </Box>
          <Box component="img" src="/flagTape.png" sx={styles.flagTape} />
        </Box>
      ))}
      <Box sx={styles.rulesContainer}>
        <Box sx={styles.rulesHeading}>Racing rules and violation policies</Box>
        <Box sx={styles.rulesDesc}>
          <Box>
            1. Track Limits:{" "}
            <span className="desc">
              Drivers must stay within the track boundaries defined by white
              lines. Exceeding track limits, especially repeatedly, can result
              in time penalties or disqualification.
            </span>
          </Box>
          <Box>
            2. Overtaking:{" "}
            <span className="desc">
              Overtaking is allowed, but there are rules governing how and where
              it can be done. For instance, drivers cannot leave the track to
              gain an advantage in overtaking and must adhere to designated
              overtaking zones.
            </span>
          </Box>
          <Box>
            3. Yellow Flags:{" "}
            <span className="desc">
              When yellow flags are displayed, drivers must slow down and be
              prepared to stop if necessary. Overtaking is usually prohibited
              under yellow flag conditions.
            </span>
          </Box>
          <Box>
            4. Safety Car / Virtual Safety Car:{" "}
            <span className="desc">
              During a safety car period, or when a virtual safety car is
              deployed, drivers must adhere to specific speed limits and
              maintain a safe distance between cars. View more
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RaceDetails;
