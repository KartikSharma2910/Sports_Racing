const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    height: "400px",
    padding: "40px",
  },

  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgb(0,0,0,0.6)",
  },

  dataContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },

  heading: {
    width: "220px",
    fontWeight: 600,
    textTransform: "uppercase",
    borderRadius: "24px",
    textAlign: "center",
    padding: "10px 24px",
    color: "white",
    backgroundColor: "rgb(0,0,0,0.3)",
  },
};

export default styles;
