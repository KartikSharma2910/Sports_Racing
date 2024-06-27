const styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      "linear-gradient(180deg, rgba(255, 4, 4, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)",
  },

  bottomLay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgb(0,0,0,0.5)",
  },

  container: {
    width: "100%",
    position: "absolute",
    border: "1px solid white",
    display: "flex",
    gap: 2,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "40px",
    top: 0,
    left: 0,
    right: 0,
  },

  logo: {
    width: "350px",
    objectFit: "cover",
  },

  heading: {
    fontSize: "32px",
    textTransform: "uppercase",
    fontWeight: 600,
  },

  description: {
    fontSize: "14px",
    opacity: 0.8,
    textAlign: "center",
  },
};

export default styles;
