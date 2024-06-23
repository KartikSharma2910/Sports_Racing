import { Box } from "@mui/material";
import { brand, brandCars } from "constants/brandCard";
import styles from "./styles";

const BrandCard = ({ height = "240px", width = "240px" }) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getRandomImage = (imageArray) => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    return imageArray[randomIndex];
  };

  return (
    <Box sx={{ ...styles.wrapper, height, width }}>
      <Box
        component="img"
        src={getRandomImage(brandCars)}
        sx={styles.background}
      />
      <Box sx={styles.overlay} />
      <Box component="img" src={getRandomImage(brand)} sx={styles.brand} />
      <Box sx={{ ...styles.bar, backgroundColor: getRandomColor() }} />
    </Box>
  );
};

export default BrandCard;
