import { Box } from "@mui/material";
import { Card } from "components/common";
import styles from "./styles";

export const driver = [
  {
    background: "/driver1.png",
    firstName: "Max",
    lastName: "Verstappen",
    countryFlag: "/india.png",
    team: "Red Bull Racing",
    country: "Netherlands",
  },
  {
    background: "/driver2.png",
    firstName: "Max",
    lastName: "Verstappen",
    countryFlag: "/india.png",
    team: "Red Bull Racing",
    country: "Netherlands",
  },
  {
    background: "/driver3.png",
    firstName: "Max",
    lastName: "Verstappen",
    countryFlag: "/india.png",
    team: "Red Bull Racing",
    country: "Netherlands",
  },
  {
    background: "/driver4.png",
    firstName: "Max",
    lastName: "Verstappen",
    countryFlag: "/india.png",
    team: "Red Bull Racing",
    country: "Netherlands",
  },
  {
    background: "/driver5.png",
    firstName: "Max",
    lastName: "Verstappen",
    countryFlag: "/india.png",
    team: "Red Bull Racing",
    country: "Netherlands",
  },
  {
    background: "/driver6.png",
    firstName: "Max",
    lastName: "Verstappen",
    countryFlag: "/india.png",
    team: "Red Bull Racing",
    country: "Netherlands",
  },
];

const Drivers = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.cardWrapper}>
        {driver.map((item, index) => (
          <Card key={index} as="DriverCard" {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default Drivers;
