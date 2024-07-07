import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Highlights from "./Highlights";
import Photos from "./Photos";
import Schedule from "./Schedule";
import Standing from "./Standing";
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
        <Tab label="SCHEDULE" {...a11yProps(0)} />
        <Tab label="HIGHLIGHTS" {...a11yProps(1)} />
        <Tab label="PHOTOS" {...a11yProps(2)} />
        <Tab label="STANDING" {...a11yProps(3)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Schedule />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Highlights />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Photos />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Standing />
      </CustomTabPanel>
    </Box>
  );
};

export default Switcher;
