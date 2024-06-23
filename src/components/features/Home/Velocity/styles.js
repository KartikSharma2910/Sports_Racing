const styles = {
  wrapper: {
    height: "500px",
    position: "relative",
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  dataContainer: {
    position: "absolute",
    top: 50,
    color: "white",
    left: "50%",
    transform: "translate(-50%,0)",
  },

  heading: {
    fontSize: "24px",
    fontWeight: 600,
    textAlign: "center",
  },

  description: {
    fontSize: "14px",
    textTransform: "capitalize",
  },

  cardWrapper: {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    top: "60%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
};

export default styles;
