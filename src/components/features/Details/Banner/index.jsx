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
        <Box component="img" src="/detailPage.png" />
      </Box>
    </Box>
  );
};

export default Banner;
