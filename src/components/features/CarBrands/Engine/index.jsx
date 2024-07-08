import { Box } from "@mui/material";
import { Card } from "components/common";
import { brandCars } from "constants/brandCard";
import styles from "./styles";

const Engine = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>
        Exploring the <span className="red">World of Car</span> Brands
      </Box>
      <Box sx={styles.description}>
        Embark on a journey through the captivating world of car brands, where
        innovation, heritage, and craftsmanship converge. From iconic marques to
        cutting-edge newcomers, delve into the stories behind the most revered
        names in the automotive industry. Discover the passion, innovation, and
        ingenuity that drive automotive excellence across the globe.
      </Box>
      <Box sx={styles.cardsWrapper}>
        {brandCars.map((brand, index) => (
          <Card as="BrandCard" key={index} width="30%" source={brand} />
        ))}
      </Box>
    </Box>
  );
};

export default Engine;
