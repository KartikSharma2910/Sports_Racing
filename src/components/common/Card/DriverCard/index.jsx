import { Box } from "@mui/material";
import styles from "./styles";

const DriverCard = ({
  background,
  firstName,
  lastName,
  countryFlag,
  team,
  country,
}) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageWrap}>
        <Box component="img" src={background} sx={styles.image} />
      </Box>
      <Box sx={styles.container}>
        <Box sx={styles.flexer}>
          <Box sx={styles.heading}>
            <Box>{firstName}</Box>
            <Box>{lastName}</Box>
          </Box>
          <Box component="img" src={countryFlag} />
        </Box>
        <Box sx={styles.flexer}>
          <Box sx={styles.baseHeading}>Team</Box>
          <Box sx={styles.description}>{team}</Box>
        </Box>
        <Box sx={styles.flexer}>
          <Box sx={styles.baseHeading}>Country</Box>
          <Box sx={styles.description}>{country}</Box>
        </Box>
        <Box sx={styles.flexer}>
          <Box component="img" src="/800cc.png" />
          <Box component="img" src="/ctg.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default DriverCard;
