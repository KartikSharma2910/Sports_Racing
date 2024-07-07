import { Box } from "@mui/material";
import styles from "./styles";

const EventCard = ({ carImage, personImage }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.carBox}>
        <Box sx={styles.mainHeading}>Indian RX of Delhi</Box>
        <Box component="img" src={carImage} sx={styles.image} />
      </Box>
      <Box sx={styles.personBox}>
        <Box sx={styles.dataContainer}>
          <Box sx={styles.heading}>sat 8 - sun 9 jun 2024</Box>
          <Box sx={styles.time}>71d 16h 27m 46s</Box>
          <Box sx={styles.buttonWrap}>
            <Box sx={styles.apply}>Apply Now</Box>
            <Box sx={styles.buyTickets}>Buy Tickets</Box>
          </Box>
        </Box>
        <Box sx={styles.eventPerson}>
          <Box component="img" src={personImage} sx={styles.image} />
        </Box>
      </Box>
      <Box sx={styles.logoBox}>
        <Box component="img" src="/tata.png" sx={styles.logoImage} />
      </Box>
    </Box>
  );
};

export default EventCard;
