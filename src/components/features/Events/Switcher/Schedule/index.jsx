import { Box } from "@mui/material";
import { Card } from "components/common";
import Action from "../../Action";
import OurPartner from "../../OurPartner";
import RaceTrack from "../RaceTrack";
import styles from "./styles";

const Schedule = () => {
  const data = [
    {
      carImage: "/eventCar1.png",
      personImage: "/eventPerson1.png",
    },
    {
      carImage: "/eventCar2.png",
      personImage: "/eventPerson2.png",
    },
    {
      carImage: "/eventCar3.png",
      personImage: "/eventPerson3.png",
    },
    {
      carImage: "/eventCar4.png",
      personImage: "/eventPerson4.png",
    },
  ];
  return (
    <Box>
      <RaceTrack />
      <Box component="img" src="/ccTape.png" sx={styles.image} />
      <Box sx={styles.cardWrapper}>
        {data.map((card, index) => (
          <Card as="EventCard" key={index} {...card} />
        ))}
      </Box>
      <Action />
      <OurPartner />
    </Box>
  );
};

export default Schedule;
