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
    top: 0,
    bottom: 0,
    backgroundColor: "rgb(255,255,255,0.2)",
    width: "400px",
    height: "100%",
  },

  rightBox: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#FF000033",
    width: "400px",
    height: "100%",
  },

  contentWrapper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    top: "30%",
    left: "5%",
    "& .red": {
      color: "#FF0000",
    },
  },

  heading: {
    width: "36%",
    textTransform: "capitalize",
    fontSize: "42px",
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
