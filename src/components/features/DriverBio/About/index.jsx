import { Box } from "@mui/material";
import styles from "./styles";
import { ProgressBar } from "components/common";

const About = () => {
  const linkers = {
    Nationality: "ITA",
    "Date of Birth": "10. May 1988",
    Birthplace: "Milan, Italy",
    "Best overall Velocity event result": "7th, Rally New Zealand 2022",
    "Best overall WRC season result": "22nd (2016)",
    "Previous Teams": "M-Sport Ford",
    "Social media": "facebook.com/F.WorldRallyTeam",
  };

  const stats = {
    "Total Races Participated": "50",
    "Total Wins": "15",
    "Podium Finishes": "30",
    "Pole Positions": "10",
    "Fastest Laps": "20",
    "Average Finish Position": "3.5",
  };

  const skills = [
    {
      label: "Experience",
      percentage: "92",
    },
    {
      label: "Skill",
      percentage: "84",
    },
    {
      label: "Capable",
      percentage: "80",
    },
    {
      label: "tactics",
      percentage: "82",
    },
  ];

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>Max Verstappen</Box>
        <Box sx={styles.description}>
          Max Verstappen, born on May 15, 1990, in London, UK, discovered his
          passion for motorsports at a young age. He began karting at the age of
          8 and quickly showed promise with several podium finishes in local
          championships. As he progressed through the ranks, his talent caught
          the attention of racing scouts, leading to his transition to formula
          racing.
        </Box>
        <Box sx={styles.linker}>
          {Object.entries(linkers).map(([key, value], index) => (
            <Box key={index} sx={styles.links}>
              <Box sx={styles.description}>{key}</Box>
              <Box sx={styles.description}>{value}</Box>
            </Box>
          ))}
        </Box>
        <Box sx={styles.description}>
          With over a decade of racing experience, John has competed in various
          racing series around the world, honing his skills on both open-wheel
          and closed cockpit cars. He has demonstrated exceptional racecraft and
          consistency throughout his career, earning respect from fellow
          competitors and fans alike.
        </Box>
        <Box sx={styles.bottomBox}>
          <Box sx={styles.leftBox}>
            <Box sx={styles.heading}>Racing Statistics</Box>
            <Box sx={styles.linkWrap}>
              {Object.entries(stats).map(([key, value], index) => (
                <Box key={index} sx={styles.links}>
                  <Box>{key}</Box>
                  <Box>{value}</Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={styles.rightBox}>
            <Box component="img" src="/stats1.jpeg" sx={styles.image} />
          </Box>
        </Box>
        <Box sx={styles.description}>
          John's career highlights include multiple championship victories in
          regional formula series, such as the European Formula 3 Championship
          and the Formula Renault Eurocup. His impressive performances on the
          track have secured him sponsorship deals with leading automotive
          brands and garnered media attention for his potential to excel at the
          highest levels of motorsport.
        </Box>
        <Box sx={{ ...styles.bottomBox, flexDirection: "row-reverse" }}>
          <Box sx={styles.leftBox}>
            {skills.map(({ label, percentage }, index) => (
              <ProgressBar key={index} label={label} number={percentage} />
            ))}
          </Box>
          <Box sx={styles.rightBox}>
            <Box component="img" src="/stats2.jpeg" sx={styles.image} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
