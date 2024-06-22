import { Box } from "@mui/material";
import styles from "./styles";

const Tape = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box component="img" src="/leftTape.jpeg" sx={styles.image} />
      </Box>
      <Box sx={styles.container}>
        <Box component="img" src="/rightTape.jpeg" sx={styles.image} />
      </Box>
    </Box>
  );
};

export default Tape;
