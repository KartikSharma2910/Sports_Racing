const styles = {
  wrapper: {
    position: "relative",
    height: "500px",
  },

  image: {
    height: "100%",
    width: "100%",
    objectPosition: "bottom",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    backgroundColor: "#00000073",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  cc: {
    position: "absolute",
    top: "50%",
    opacity: 0.3,
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
};

export default styles;
