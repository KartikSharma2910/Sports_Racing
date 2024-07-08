import { Box } from "@mui/material";
import { useState } from "react";
import styles from "./styles";

const Banner = () => {
  const [detail, setDetail] = useState("/detail.png");

  const details = ["/detail1.jpeg", "/detail2.jpeg", "/detail3.png"];
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.leftBox}>
        <Box>
          <Box component="img" src={detail} sx={styles.leftImage} />
        </Box>
        <Box sx={styles.miniImageWrapper}>
          {details.map((detail, index) => (
            <Box onClick={() => setDetail(detail)} sx={styles.miniImage}>
              <Box
                component="img"
                src={detail}
                key={index}
                sx={styles.leftImage}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={styles.rightBox}>
        <Box sx={styles.rightMainHead}>BuzzBomb Brigade (2000cc)</Box>
        <Box sx={styles.rightHead}>Toyota CAMRY</Box>
        <Box sx={styles.largeDesc}>SPORTS SEDAN</Box>
        <Box sx={styles.smallDesc}>
          The Toyota Camry is a well-established mid-size sedan known for its
          comfort, reliability, and smooth driving experience. It offers a
          spacious interior, making it a great choice for families. Available in
          both gasoline and hybrid versions, the Camry prioritizes fuel
          efficiency without sacrificing power. It's known for its safety
          features and luxurious touches, making it a popular choice for those
          seeking a refined and practical car.
        </Box>
        <Box sx={styles.buttonWrap}>
          <Box sx={styles.butt}>
            <Box sx={styles.button}>93/100</Box>
            <Box>Score</Box>
          </Box>
          <Box sx={styles.butt}>
            <Box sx={styles.button}>4.5/5</Box>
            <Box>Rating</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
