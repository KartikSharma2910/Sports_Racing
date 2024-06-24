import { Box } from "@mui/material";
import styles from "./styles";

const Specification = () => {
  const mainFeatures = {
    Engine: "1600cc",
    "Fuel Type": "Petrol",
    Power: "114bhp@4000rpm",
    Mileage: "17.7 - 21.8 Kmpl",
  };

  const extraFeatures = {
    "Drive Type": "AWD",
    Transmission: "Manual",
    Torque: "250Nm@1500-2750rpm",
    Airbags: "Driver and Side Front",
  };
  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/keySpecification.jpeg" sx={styles.image} />
      <Box sx={styles.overlay} />
      <Box sx={styles.dataContainer}>
        <Box sx={styles.heading}>Key Specification</Box>
      </Box>
    </Box>
  );
};

export default Specification;
