import { Box } from "@mui/material";
import styles from "./styles";

const Info = () => {
  const leftData = {
    "Year Founded": "2005",
    "Founding Figures": "Michael Jones",
    "Championship Wins": "05",
    "Racing Style": "Aggressive",
    "Memorable Drivers": "Lisa Carter",
  };

  const rightData = {
    Slogan: "We leave our mark on every corner",
    "Signature Innovation/Racing Style": "Aggressive & high-risk maneuvers",
    "Team Specialties": "Cutting-edge aerodynamics",
    "Legendary racer": "Lisa Carter",
    Rivalry: "Ironclad Stallions",
  };

  const bottomLeftBox = {
    "Seasons Active": "2010 - 2023",
    Races: "98",
    Pole: "3",
  };

  const bottomRightBox = {
    Points: "1034* (364)",
    "Constructor Titles": "0",
    "Driver Titles": "0",
  };

  return (
    <Box sx={styles.wrapper}>
      <Box component="img" src="/infoImage.jpeg" sx={styles.image} />
      <Box sx={styles.overlay} />
      <Box sx={styles.bottomLay} />
      <Box sx={styles.container}>
        <Box component="img" src="/redbull.png" sx={styles.logo} />
        <Box sx={styles.heading}>Apex Predators</Box>
        <Box sx={styles.description}>
          Step into the world of racing excellence as we introduce you to the
          elite drivers who dominate the circuit. From seasoned champions to
          rising stars, our lineup of apex predators is poised to thrill,
          inspire, and leave you on the edge of your seat. Explore their
          stories, achievements, and relentless pursuit of victory in the
          high-speed realm of motorsport.
        </Box>
        <Box sx={styles.keyBox}>
          <Box sx={styles.keysor}>
            {Object.entries(leftData).map(([key, value]) => {
              return (
                <Box sx={styles.objectBox}>
                  <Box sx={styles.key}>{key}</Box>
                  <Box sx={styles.value}>{value}</Box>
                </Box>
              );
            })}
          </Box>
          <Box sx={styles.keysor}>
            {Object.entries(rightData).map(([key, value]) => {
              return (
                <Box sx={styles.objectBox}>
                  <Box sx={styles.key}>{key}</Box>
                  <Box sx={styles.value}>{value}</Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={styles.bottomBox}>
          <Box>Team Statistics</Box>
          <Box sx={styles.keyBox}>
            <Box sx={styles.keysor}>
              {Object.entries(bottomLeftBox).map(([key, value]) => {
                return (
                  <Box sx={styles.objectBox}>
                    <Box sx={styles.key}>{key}</Box>
                    <Box sx={styles.value}>{value}</Box>
                  </Box>
                );
              })}
            </Box>
            <Box sx={styles.keysor}>
              {Object.entries(bottomRightBox).map(([key, value]) => {
                return (
                  <Box sx={styles.objectBox}>
                    <Box sx={styles.key}>{key}</Box>
                    <Box sx={styles.value}>{value}</Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
