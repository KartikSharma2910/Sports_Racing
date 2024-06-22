import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { Box } from "@mui/material";
import styles from "./styles";

const RaceCard = ({ number, heading, description, image, customStyles }) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles }}>
      <Box sx={styles.container}>
        <Box sx={styles.number}>{number}</Box>
        <Box sx={styles.divider} />
        <Box sx={styles.dataSet}>
          <Box sx={styles.heading}>{heading}</Box>
          <Box sx={styles.description}>{description}</Box>
          <Box sx={styles.button}>
            Learn More <ExpandCircleDownOutlinedIcon sx={styles.icon} />
          </Box>
        </Box>
      </Box>
      <Box component="img" src={image} sx={styles.image} />
    </Box>
  );
};

export default RaceCard;
