import { Box } from "@mui/material";
import { Card } from "components/common";
import styles from "./styles";

const TopDrivers = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Top Drivers</Box>
      <Box>
        <Card as="TopDriver" />
      </Box>
    </Box>
  );
};

export default TopDrivers;
