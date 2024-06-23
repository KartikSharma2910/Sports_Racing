import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { Box } from "@mui/material";
import styles from "./styles";

const EngineCard = ({ number, reverse, image, heading, description }) => {
  return (
    <Box sx={{ ...styles.wrapper, flexDirection: reverse }}>
      <Box sx={styles.leftBox}>
        <Box component="img" src={image} sx={styles.image} />
      </Box>
      <Box sx={styles.rightBox}>
        <Box sx={styles.number}>{number}</Box>
        <Box sx={styles.divider} />
        <Box sx={styles.dataSet}>
          <Box sx={styles.heading}>{heading}</Box>
          <Box sx={styles.description}>
            CC Allowed : <span className="yellow">Up to 800cc</span>
          </Box>
          <Box sx={styles.description}>{description}</Box>
          <Box sx={styles.button}>
            View More <ExpandCircleDownOutlinedIcon sx={styles.icon} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EngineCard;
