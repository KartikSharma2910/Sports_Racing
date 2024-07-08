import { Box } from "@mui/material";
import { ProgressBar } from "components/common";
import styles from "./styles";

const Mileage = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.heading}>Fuel Efficiency test</Box>
        <Box sx={styles.description}>
          This summary explores the Toyota Camry's fuel efficiency across
          various tests:
        </Box>
        <Box sx={styles.miniDesc}>
          Controlled Laboratory Test: Achieved an impressive 40 miles per gallon
          (MPG) in a controlled environment, showcasing its potential for high
          efficiency.
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="Controlled LAB TEST" number="80" />
          </Box>
          <Box sx={styles.miniDesc}>
            Real-World City Driving Test: Delivered a practical (28 MPG) in
            stop-and-go city traffic, reflecting real-world driving experience.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="CITY DRIVING TEST" number="70" />
          </Box>
          <Box sx={styles.miniDesc}>
            Real-World Highway Driving Test: Returned a commendable (35 MPG) on
            a sustained highway run, demonstrating its efficiency for long
            journeys.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="HIGHWAY DRIVING TEST" number="75" />
          </Box>
          <Box sx={styles.miniDesc}>
            Comparison Fuel Economy Test: Compared to competitors, the Camry
            positioned itself as a leader in terms of fuel efficiency within its
            class.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="FUEL ECONOMY TEST" number="60" />
          </Box>
          <Box sx={styles.miniDesc}>
            Eco-Driving Test: With optimized driving techniques, the Camry's
            fuel efficiency improved to an outstanding (45 MPG), highlighting
            the potential for maximizing fuel savings with conscious driving
            habits.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="ECO DRIVING TEST" number="60" />
          </Box>
        </Box>
        <Box sx={styles.miniDesc}>
          Overall: The Toyota Camry prioritizes fuel efficiency, delivering
          impressive results in both controlled and real-world scenarios. It
          offers a compelling choice for drivers seeking a balance between
          performance and fuel economy.
        </Box>
      </Box>
      <Box sx={styles.imageBox}>
        <Box component="img" src="/score.png" />
      </Box>
    </Box>
  );
};

export default Mileage;
