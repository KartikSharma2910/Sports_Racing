const styles = {
  wrapper: {
    height: "260px",
    width: "260px",
    cursor: "pointer",
    borderRadius: "12px",
    boxSizing: "border-box",
    position: "relative",
  },

  background: {
    height: "100%",
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    borderRadius: "12px",
    backgroundColor: "rgb(52, 52, 50,0.6)",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  brand: {
    position: "absolute",
    width: "140px",
    top: "50%",
    left: "48%",
    transform: "translate(-50%,-50%)",
  },

  bar: {
    position: "absolute",
    height: "8px",
    backgroundColor: "black",
    borderRadius: "0 0 12px 12px",
    bottom: 0,
    left: 0,
    right: 0,
  },
};

export default styles;
