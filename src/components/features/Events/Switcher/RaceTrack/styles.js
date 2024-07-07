const styles = {
  dataWrap: {
    display: "flex",
    justifyContent: "space-between",
    padding: "40px",
    color: "white",
  },

  leftBox: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  heading: {
    fontSize: "22px",
    letterSpacing: "2px",
    fontWeight: 600,
    textTransform: "uppercase",
  },

  description: {
    fontSize: "14px",
    opacity: 0.8,
  },

  button: {
    maxWidth: "160px",
    textAlign: "center",
    backgroundColor: "#FF0000",
    color: "white",
    fontSize: "12px",
    padding: "10px",
    cursor: "pointer",
  },

  rightBox: {
    width: "58%",
  },

  keyBox: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  miniKeyBox: {
    display: "flex",
    gap: "12px",
  },
};

export default styles;
