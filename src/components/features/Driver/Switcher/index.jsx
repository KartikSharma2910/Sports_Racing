import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Cars from "./Cars";
import Drivers from "./Drivers";
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
        <Tab label="DRIVERS" {...a11yProps(0)} />
        <Tab label="CARS" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Drivers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Cars />
      </CustomTabPanel>
    </Box>
  );
};

export default Switcher;
