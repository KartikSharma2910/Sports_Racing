import { Box } from "@mui/material";
import Action from "../../Action";
import OurPartner from "../../OurPartner";
import RaceTrack from "../RaceTrack";
import styles from "./styles";

const Photos = () => {
  const data = [
    "/photo1.jpeg",
    "/photo2.jpeg",
    "/photo3.jpeg",
    "/photo4.jpeg",
    "/photo5.jpeg",
    "/photo6.jpeg",
    "/photo7.jpeg",
    "/photo8.jpeg",
    "/photo9.jpeg",
  ];
  return (
    <Box>
      <RaceTrack />
      <Box component="img" src="/ccTape.png" sx={styles.image} />
      <Box sx={styles.cardWrapper}>
        {data.map((item, index) => (
          <Box sx={styles.imageBox}>
            <Box key={index} component="img" src={item} sx={styles.image} />
          </Box>
        ))}
      </Box>
      <Action />
      <OurPartner />
    </Box>
  );
};

export default Photos;
