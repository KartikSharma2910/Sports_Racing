import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, InputBase } from "@mui/material";
import styles from "./styles";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "40px",
        color: "white",
        background:
          "linear-gradient(83.95deg, #FF0000 -76.49%, #990000 71.53%)",
      }}
    >
      <Box sx={styles.container}>
        <Box sx={styles.dataSet}>
          <Box sx={styles.heading}>About</Box>
          <Box sx={styles.description}>
            At Velocity Race Car, we believe in pushing the boundaries of what's
            possible on the race track. Our relentless commitment to performance
            excellence drives every aspect of our engineering process, from the
            precision-tuned engines to the aerodynamically optimized chassis.
            With unrivaled acceleration, cornering agility, and top speeds that
            defy convention, Velocity Race Car sets the standard for performance
            in the world of motorsport.
          </Box>
        </Box>
        <Box sx={styles.dataSet}>
          <Box sx={styles.heading}>Races</Box>
          <Box sx={styles.description}>Renegade Rumble (800cc)</Box>
          <Box sx={styles.description}>Dominator's Duel (1200cc)</Box>
          <Box sx={styles.description}>Apex Assault (1600cc)</Box>
          <Box sx={styles.description}>Titan's Tempest (2000cc)</Box>
        </Box>
        <Box sx={styles.dataSet}>
          <Box sx={styles.heading}>Events</Box>
          <Box sx={styles.heading}>Teams</Box>
          <Box sx={styles.heading}>Cars</Box>
          <Box sx={styles.heading}>Drivers</Box>
          <Box sx={styles.heading}>T&C</Box>
          <Box sx={styles.heading}>Privacy Policy</Box>
        </Box>
        <Box sx={styles.dataSet}>
          <Box sx={styles.heading}>FAQ</Box>
          <Box sx={styles.heading}>Contact Us</Box>
          <Box sx={styles.description}>Email: info@velocitycars.com</Box>
          <Box sx={styles.description}>Phone: +1 (555) 123-4567</Box>
          <Box sx={styles.description}>
            Address: 123 Speedway Lane, Cityville, State, Zip
          </Box>
        </Box>
      </Box>
      <Box sx={styles.container}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <InputBase
            placeholder="Your email"
            sx={{
              padding: "24px",
              borderRadius: "24px 0px 0px 24px",
              borderColor: "white",
            }}
          />
          <Box
            sx={{
              padding: "13.5px 22px",
              fontSize: "14px",
              cursor: "pointer",
              color: "#FF0000",
              borderRadius: "0px 24px 24px 0px",
              backgroundColor: "white",
            }}
          >
            Subscribe
          </Box>
        </Box>
        <Box sx={styles.iconWrapper}>
          <FacebookOutlinedIcon sx={styles.icon} />
          <InstagramIcon sx={styles.icon} />
          <XIcon sx={styles.icon} />
          <YouTubeIcon sx={styles.icon} />
        </Box>
      </Box>
      <Box sx={styles.footer}>
        Copyright © Angel and Demons 2024. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
