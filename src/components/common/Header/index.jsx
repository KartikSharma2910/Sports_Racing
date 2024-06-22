import { Box } from "@mui/material";
import { header } from "constants/header";
import styles from "./styles";

const Header = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>VELOCITY</Box>
      <Box sx={styles.linksWrapper}>
        {header.map(({ label, path }, index) => (
          <Box key={index} component="a" href={path} sx={styles.links}>
            {label}
          </Box>
        ))}
      </Box>
      <Box sx={styles.login}>Login</Box>
    </Box>
  );
};

export default Header;
