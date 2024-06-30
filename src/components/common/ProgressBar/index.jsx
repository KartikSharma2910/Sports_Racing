import { Box } from "@mui/material";
import styles from "./styles";

const ProgressBar = ({ label, number }) => {
  const progressStyle = {
    width: `${number}%`,
    backgroundColor: "#FF0000",
    height: "100%",
  };

  const containerStyle = {
    width: "100%",
    backgroundColor: "#D9D9D940",
    borderRadius: "4px",
    overflow: "hidden",
    height: "26px",
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.labeler}>
        <Box sx={styles.label}>{label}</Box>
        <Box>{number}%</Box>
      </Box>
      <Box sx={{ ...containerStyle }}>
        <Box sx={progressStyle}></Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;
