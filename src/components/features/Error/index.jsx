import { Box } from "@mui/material";
import { Header } from "components/common";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, [navigate]);

  return (
    <Fragment>
      <Header />
      <Box sx={styles.wrapper}>
        <Box sx={styles.heading}>Oops something went wrong!</Box>
        <Box sx={styles.description}>
          We will be right back please wait for some time.Check out our social
          channel for more updates
        </Box>
        <Box component="img" src="/notFound.png" sx={styles.image} />
      </Box>
    </Fragment>
  );
};

export default Error;
