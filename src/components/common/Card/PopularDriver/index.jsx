import { Box } from "@mui/material";
import styles from "./styles";

const PopularDriver = ({ popular, name, country, points, race }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageWrap}>
        <Box component="img" src={popular} sx={styles.image} />
      </Box>
      <Box sx={styles.container}>
        <Box>
          <Box sx={styles.heading}>{name}</Box>
          <Box sx={styles.description}>{country}</Box>
        </Box>
        <Box>
          <Box sx={styles.miniBox}>
            <Box sx={styles.heading}>Points</Box>
            <Box sx={styles.description}>{points}</Box>
          </Box>
          <Box sx={styles.miniBox}>
            <Box sx={styles.heading}>Race</Box>
            <Box sx={styles.description}>{race}</Box>
          </Box>
        </Box>
        <Box sx={styles.tyreWrap}>
          <Box component="img" src="/tyre.png" sx={styles.tyre} />
        </Box>
      </Box>
    </Box>
  );
};

export default PopularDriver;
