import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import styles from "./styles";
import Drivers from "./Drivers";
import UnlistedDrivers from "./UnlistedDriver";

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
          {...a11yProps(1)}
        />
        <Tab
          label={
            <Box sx={styles.taber}>
              <Box sx={styles.tabHead}>Top 10 Drivers</Box>
              <Box sx={styles.tabDesc}>View More Information</Box>
            </Box>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <Box sx={styles.taber}>
              <Box sx={styles.tabHead}>Blacklisted Drivers</Box>
              <Box sx={styles.tabDesc}>View More Information</Box>
            </Box>
          }
          {...a11yProps(1)}
        />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Drivers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UnlistedDrivers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Hey
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Hey
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Hey
      </CustomTabPanel>
    </Box>
  );
};

export default Switcher;
