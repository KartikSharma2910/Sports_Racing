import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import BlacklistedDrivers from "./BlacklistedDrivers";
import Drivers from "./Drivers";
import StandingDrivers from "./StandingDrivers";
import TopDrivers from "./TopDrivers";
import UnlistedDrivers from "./UnlistedDriver";
import styles from "./styles";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={index}
      aria-labelledby={index}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `${index}`,
  };
}

const Switcher = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.wrapper}>
      <Tabs value={value} onChange={handleChange}>
        <Tab
          label={
            <Box sx={styles.taber}>
              <Box sx={styles.tabHead}>Drivers</Box>
              <Box sx={styles.tabDesc}>View More Information</Box>
            </Box>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <Box sx={styles.taber}>
              <Box sx={styles.tabHead}>Unlisted Drivers</Box>
              <Box sx={styles.tabDesc}>View More Information</Box>
            </Box>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <Box sx={styles.taber}>
              <Box sx={styles.tabHead}>Standing Drivers</Box>
              <Box sx={styles.tabDesc}>View More Information</Box>
            </Box>
          }
          {...a11yProps(2)}
        />
        <Tab
          label={
            <Box sx={styles.taber}>
              <Box sx={styles.tabHead}>Top 10 Drivers</Box>
              <Box sx={styles.tabDesc}>View More Information</Box>
            </Box>
          }
          {...a11yProps(3)}
        />
        <Tab
          label={
            <Box sx={styles.taber}>
              <Box sx={styles.tabHead}>Blacklisted Drivers</Box>
              <Box sx={styles.tabDesc}>View More Information</Box>
            </Box>
          }
          {...a11yProps(4)}
        />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Drivers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UnlistedDrivers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <StandingDrivers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TopDrivers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <BlacklistedDrivers />
      </CustomTabPanel>
    </Box>
  );
};

export default Switcher;
