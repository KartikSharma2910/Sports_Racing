import { Box } from "@mui/material";
import styles from "./styles";

const Conditions = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>Thank You for Your Ticket Purchase!</Box>
        <Box sx={styles.description}>
          Get ready for an adrenaline-fueled experience at one of the most
          thrilling events in motorsport history."
        </Box>
        <Box sx={styles.container}>
          <Box
            sx={{
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            What to Expect Next?
          </Box>
          <Box sx={{ ...styles.description, opacity: 0.8 }}>
            You will receive an email confirmation shortly with your ticket
            details and important event information.
          </Box>
          <Box sx={{ ...styles.description, opacity: 0.8 }}>
            Stay tuned to Velocity's website and social media channels for
            updates, race highlights, and exclusive behind-the-scenes content
            leading up to the event.
          </Box>
        </Box>
        <Box>
          Thank you for choosing Velocity. We look forward to seeing you at the
          race!
        </Box>
      </Box>
    </Box>
  );
};

export default Conditions;
