import { Box } from "@mui/material";
import styles from "./styles";

const Journey = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>
        Discover Our <span className="red">Journey</span>
      </Box>
      <Box sx={styles.description}>
        Velocity is not just a racing competition; it's a celebration of
        diversity and inclusivity in motorsports. Founded with a vision to
        redefine racing excellence, Formula 2 provides a platform where cars of
        all engine sizes compete on equal footing. Our mission is clear: to
        promote fair competition, nurture emerging talent, and offer thrilling
        racing experiences like never before. With a commitment to integrity,
        innovation, and community engagement, Formula 2 is more than just a race
        – it's a journey towards the future of motorsports. Join us and be a
        part of the excitement!
      </Box>
      <Box sx={styles.lowerBoxes}>
        <Box sx={styles.lowerLeftBox}>
          <Box sx={styles.leftImageContainer}>
            <Box component="img" src="/vector.png" sx={styles.leftImage} />
            <Box sx={styles.imageDataSet}>Our Commitment and Vision</Box>
          </Box>
          <Box sx={styles.leftBottomText}>
            <span className="dark">Passion for Racing:</span> Highlight the
            team's passion for racing and dedication to creating an inclusive
            environment for all participants.
          </Box>
        </Box>
        <Box sx={styles.rightBox}>
          <Box
            sx={{
              ...styles.miniBoxContainer,
              marginLeft: { xs: "none", md: "120px" },
            }}
          >
            <Box sx={styles.rightImageContainer}>
              <Box component="img" src="/journey1.png" sx={styles.rightImage} />
            </Box>
            <Box sx={styles.bottomText}>
              <span className="dark">Commitment to Excellence:</span> Emphasize
              Formula 2's commitment to excellence in race organization, safety
              standards, and providing an unparalleled experience for drivers
              and spectators alike.
            </Box>
          </Box>
          <Box sx={styles.miniBoxContainer}>
            <Box sx={{ ...styles.rightImageContainer, borderColor: "#0F6292" }}>
              <Box component="img" src="/journey2.png" sx={styles.rightImage} />
            </Box>
            <Box sx={styles.bottomText}>
              <span className="dark">Community Support:</span> Discuss Formula
              2's involvement in supporting local communities, charitable
              causes, and promoting sustainability initiatives within the racing
              industry.
            </Box>
          </Box>
          <Box
            sx={{
              ...styles.miniBoxContainer,
              marginLeft: { xs: "none", md: "-120px" },
            }}
          >
            <Box sx={{ ...styles.rightImageContainer, borderColor: "#FEE908" }}>
              <Box component="img" src="/journey3.png" sx={styles.rightImage} />
            </Box>
            <Box sx={styles.bottomText}>
              <span className="dark">Global Reach:</span> Mention Formula 2's
              global reach and its impact on the international racing scene,
              attracting participants and fans from around the world.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Journey;
