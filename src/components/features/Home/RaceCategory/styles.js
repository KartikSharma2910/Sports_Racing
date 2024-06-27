const styles = {
  tapeWrapper: {
    position: "relative",
    backgroundColor: "black",
    padding: "22px",
    height: "100px",
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  tapeText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "#FF0000E5",
    fontWeight: "bold",
    fontSize: {
      xs: "24px",
      sm: "28px",
      md: "32px",
    },
    transform: "translate(-50%,-50%)",
  },

  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },

  card: {
    width: {
      xs: "100%",
      md: "50%",
    },
  },
};

export default styles;
