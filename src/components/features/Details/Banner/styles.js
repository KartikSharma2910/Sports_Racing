const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
  },

  leftBox: {
    width: "50%",
    padding: "40px",
  },

  leftImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  },

  miniImageWrapper: {
    display: "flex",
    gap: 2,
  },

  miniImage: {
    height: "200px",
    width: "230px",
  },

  rightBox: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "40px",
  },

  rightMainHead: {
    fontSize: "32px",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#FF0000",
  },

  rightHead: {
    fontSize: "32px",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },

  largeDesc: {
    fontSize: "28px",
    color: "white",
    fontWeight: 300,
    opacity: 0.8,
  },

  smallDesc: {
    fontSize: "16px",
    color: "white",
    fontWeight: 300,
    opacity: 0.8,
  },

  buttonWrap: {
    display: "flex",
    width: "100%",
    gap: "20px",
  },

  butt: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "48%",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    borderRadius: "18px",
    width: "100%",
    padding: "34px 0px",
    color: "white",
    fontSize: "24px",
    fontWeight: 600,
    textAlign: "center",
    backgroundColor: "#FF0000",
  },
};

export default styles;
