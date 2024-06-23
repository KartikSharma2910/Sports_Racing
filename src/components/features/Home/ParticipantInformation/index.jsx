import { Box } from "@mui/material";
import { Card } from "components/common";
import { participants } from "constants/participants";
import styles from "./styles";

const ParticipantInformation = () => {
  return (
    <Box sx={styles.wrapper}>
      {participants.map((card, index) => (
        <Card key={index} as="ParticipantCard" {...card} />
      ))}
    </Box>
  );
};

export default ParticipantInformation;
