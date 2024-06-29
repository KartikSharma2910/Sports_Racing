import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./styles";

const StandingDrivers = () => {
  function createData(place, rider, team, pts, cc) {
    return { place, rider, team, pts, cc };
  }

  const rows = [
    createData(
      1,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver1.png" sx={styles.driverImage} />
        </Box>
        <Box>Sebastian Vettel</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      2,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver2.png" sx={styles.driverImage} />
        </Box>
        <Box>Lewis Hamilton</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      3,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver3.png" sx={styles.driverImage} />
        </Box>
        <Box>Valtteri Bottas</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      4,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver4.png" sx={styles.driverImage} />
        </Box>
        <Box>Antonio Giovinazzi</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      5,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver5.png" sx={styles.driverImage} />
        </Box>
        <Box>Yuki Tsunoda</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      6,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver6.png" sx={styles.driverImage} />
        </Box>
        <Box>Nikita Mazepin</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      7,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver7.png" sx={styles.driverImage} />
        </Box>
        <Box>Lance Stroll</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      8,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver8.png" sx={styles.driverImage} />
        </Box>
        <Box>Kimi Raikkonen</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      9,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver9.png" sx={styles.driverImage} />
        </Box>
        <Box>Esteban Ocon</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      10,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver10.png" sx={styles.driverImage} />
        </Box>
        <Box>Mick Schumacher</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      11,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver11.png" sx={styles.driverImage} />
        </Box>
        <Box>Pierre Gasly</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      12,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver12.png" sx={styles.driverImage} />
        </Box>
        <Box>Lando Norris</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      13,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver13.png" sx={styles.driverImage} />
        </Box>
        <Box>Sergio Perez</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      14,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver14.png" sx={styles.driverImage} />
        </Box>
        <Box>Daniel Ricciardo</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
    createData(
      15,
      <Box sx={styles.driverWrap}>
        <Box sx={styles.driverImageWrap}>
          <Box component="img" src="/driver15.png" sx={styles.driverImage} />
        </Box>
        <Box>Fernando Alonso</Box>
      </Box>,
      "Red Bull Racing Honda",
      51,
      "2000cc"
    ),
  ];

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.heading}>Standing drivers</Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Place</TableCell>
              <TableCell align="center">Riders</TableCell>
              <TableCell align="center">Team</TableCell>
              <TableCell align="center">PTS</TableCell>
              <TableCell align="center">CC</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: index % 2 !== 0 ? "#B1B1B1" : "#D2D2D2",
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  {row.place}
                </TableCell>
                <TableCell align="center">{row.rider}</TableCell>
                <TableCell align="center">{row.team}</TableCell>
                <TableCell align="center">{row.pts}</TableCell>
                <TableCell align="center" sx={{ color: "#FF0000" }}>
                  {row.cc}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StandingDrivers;
