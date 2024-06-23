import { Box } from "@mui/material";
import styles from "./styles";

const OurPartner = () => {
  const data = [
    "/aws.png",
    "/rolex.png",
    "/tataCom.png",
    "/lenovo.png",
    "/salesforce.png",
    "/puma.png",
    "/macde.png",
  ];
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Our Partners</Box>
      <Box sx={styles.imageWrapper}>
        {data.map((item, index) => {
          return (
            <Box key={index} component="img" src={item} sx={styles.image} />
          );
        })}
      </Box>
    </Box>
  );
};

export default OurPartner;
