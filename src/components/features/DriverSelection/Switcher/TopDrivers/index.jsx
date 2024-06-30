import { Box } from "@mui/material";
import { Card } from "components/common";
import styles from "./styles";
import Action from "./Action";

const TopDrivers = () => {
  const topDrivers = [
    {
      number: "02",
      top: "/top2.png",
      name: "Lewis Hamilton",
      country: "Netherlands",
      points: "2637.5",
      race: "15",
    },
    {
      number: "01",
      top: "/top1.png",
      name: "Max Verstappen",
      country: "Netherlands",
      points: "2637.5",
      race: "15",
    },
    {
      number: "03",
      top: "/top3.png",
      name: "Valtteri Bottas",
      country: "Netherlands",
      points: "2637.5",
      race: "15",
    },
  ];

  const popularDrivers = [
    {
      popular: "/popular1.png",
      name: "Lewis Hamilton",
      country: "Netherlands",
      points: "2637.5",
      race: "15",
    },
    {
      popular: "/popular2.png",
      name: "Max Verstappen",
      country: "Netherlands",
      points: "2637.5",
      race: "15",
    },
    {
      popular: "/popular3.png",
      name: "Valtteri Bottas",
      country: "Netherlands",
      points: "2637.5",
      race: "15",
    },
    {
      popular: "/popular4.png",
      name: "Valtteri Bottas",
      country: "Netherlands",
      points: "2637.5",
      race: "15",
    },
    {
      popular: "/popular5.png",
      name: "Valtteri Bottas",
      country: "Netherlands",
      points: "2637.5",
      race: "15",
    },
    {
      popular: "/popular6.png",
      name: "Valtteri Bottas",
      country: "Netherlands",
      points: "2637.5",
      race: "15",
    },
  ];

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Top Drivers</Box>
      <Box sx={styles.cardWrapper}>
        {topDrivers.map((card, index) => (
          <Card
            as="TopDriver"
            key={index}
            {...card}
            customStyles={{
              transform: index % 2 !== 0 ? "scale(1)" : "scale(0.8)",
            }}
          />
        ))}
      </Box>
      <Box sx={styles.heading}>Popular Drivers</Box>
      <Box sx={styles.cardWrapper}>
        {popularDrivers.map((card, index) => (
          <Card as="PopularDriver" key={index} {...card} />
        ))}
      </Box>
      <Box sx={styles.heading}>Best of DRIVERS</Box>
      <Action />
    </Box>
  );
};

export default TopDrivers;
