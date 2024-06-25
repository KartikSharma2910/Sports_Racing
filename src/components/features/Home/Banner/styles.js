const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100vh",
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  leftBox: {
    position: "absolute",
    display: {
      xs: "none",
      md: "block",
    },
    top: 0,
    bottom: 0,
    backgroundColor: "rgb(255,255,255,0.2)",
    width: "400px",
    height: "100%",
  },

  rightBox: {
    position: "absolute",
    display: {
      xs: "none",
      md: "block",
    },
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#FF000033",
    width: "400px",
    height: "100%",
  },

  contentWrapper: {
    width: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: {
      xs: "center",
      md: "start",
    },
    gap: "20px",
    top: {
      xs: "50%",
      md: "30%",
    },
    left: {
      xs: "50%",
      md: "5%",
    },
    transform: {
      xs: "translate(-50%,-50%)",
      md: "none",
    },
    "& .red": {
      color: "#FF0000",
    },
  },

  heading: {
    width: {
      xs: "80%",
      md: "36%",
    },
    textTransform: "capitalize",
    textAlign: {
      xs: "center",
      md: "left",
    },
    fontSize: {
      xs: "36px",
      sm: "38px",
      md: "42px",
    },
    color: "white",
    opacity: 0.8,
    fontWeight: "bold",
  },

  description: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: "16px",
    color: "white",
    textTransform: "capitalize",
  },

  buttonWrapper: {
    display: "flex",
    gap: 3,
  },

  race: {
    backgroundColor: "#FF0000",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    padding: "12px 22px",
    borderRadius: "24px",
  },

  register: {
    border: "1px solid white",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    padding: "12px 22px",
    borderRadius: "24px",
  },
};

export default styles;
