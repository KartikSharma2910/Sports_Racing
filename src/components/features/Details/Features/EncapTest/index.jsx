import { Box } from "@mui/material";
import styles from "./styles";
import { ProgressBar } from "components/common";

const Encap = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.heading}>encap test</Box>
        <Box sx={styles.description}>
          The Toyota Camry performed admirably in a series of rigorous safety
          tests
        </Box>
        <Box sx={styles.miniDesc}>
          Mobile Deformable Barrier (MDB) Frontal Impact: The Camry's structure
          protected occupants well in a head-on collision simulation, earning
          high scores for passenger compartment integrity and minimal risk of
          injury.
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="Mobile Deformable Barrier" number="80" />
          </Box>
          <Box sx={styles.miniDesc}>
            Offset Deformable Barrier (ODB) Frontal Impact: The Camry maintained
            a high level of safety in a more complex angled collision scenario,
            showcasing effective protection for occupants on both sides of the
            vehicle.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="Offset Deformable Barrier" number="70" />
          </Box>
          <Box sx={styles.miniDesc}>
            Side Impact Test: The Camry's side structure, door pillars, and
            airbags provided good protection for occupants in a simulated T-bone
            collision.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="Side Impact Test" number="75" />
          </Box>
          <Box sx={styles.miniDesc}>
            Whiplash Test (Rear Impact): The Camry's seats and headrests
            minimized the risk of whiplash injuries for occupants in a rear-end
            collision.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="Rear Impact" number="60" />
          </Box>
          <Box sx={styles.miniDesc}>
            Electronic Safety System (ESS) Evaluation: The Camry's suite of
            electronic safety features, including Anti-lock Braking System
            (ABS), Electronic Stability Control (ESC), and Lane Departure
            Warning (LDW), received high marks for their effectiveness in
            assisting drivers and preventing accidents.
          </Box>
        </Box>
        <Box sx={styles.box}>
          <Box sx={styles.miniBox}>
            <ProgressBar label="Electronic Safety System" number="60" />
          </Box>
        </Box>
        <Box sx={styles.miniDesc}>
          Overall: The Toyota Camry prioritizes comfort and efficiency but
          delivers a capable and well-rounded performance experience.
        </Box>
      </Box>
      <Box sx={styles.imageBox}>
        <Box component="img" src="/score.png" />
      </Box>
    </Box>
  );
};

export default Encap;
