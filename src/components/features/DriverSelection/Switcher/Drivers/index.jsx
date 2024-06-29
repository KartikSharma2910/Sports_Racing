import { Box } from "@mui/material";
import { Card } from "components/common";
import { driver } from "../constants";
import styles from "./styles";

const Drivers = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>
        <span className="red">F2</span> Drivers
      </Box>
      <Box sx={styles.cardWrapper}>
        {driver.map((item, index) => (
          <Card key={index} as="DriverCard" {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default Drivers;
