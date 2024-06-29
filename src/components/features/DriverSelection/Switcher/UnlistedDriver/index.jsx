import { Box } from "@mui/material";
import { Card } from "components/common";
import { unlistedDriver } from "../constants";
import styles from "./styles";

const UnlistedDrivers = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Unlisted Drivers</Box>
      <Box sx={styles.cardWrapper}>
        {unlistedDriver.map((item, index) => (
          <Card key={index} as="DriverCard" {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default UnlistedDrivers;
