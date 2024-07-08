import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Encap from "./EncapTest";
import Performance from "./Performance";
import TyrePerformance from "./TyrePerformance";
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

const Features = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.wrapper}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="PERFORMANCE" {...a11yProps(0)} />
        <Tab label="ENCAP TEST" {...a11yProps(1)} />
        <Tab label="TYRE PERFORMANCE" {...a11yProps(2)} />
        <Tab label="MILEAGE" {...a11yProps(3)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Performance />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Encap />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TyrePerformance />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Performance />
      </CustomTabPanel>
    </Box>
  );
};

export default Features;
