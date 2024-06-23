const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    height: "350px",
  },

  leftBox: {
    width: "50%",
    backgroundColor: "white",
  },

  leftContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  leftImageWrap: {
    width: "250px",
    height: "250px",
    borderRadius: "8px",
  },

  leftImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },

  leftDataBox: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "30px",
  },

  heading: {
    fontSize: "18px",
    fontWeight: 600,
  },

  description: {
    fontSize: "14px",
    fontWeight: 500,
  },

  button: {
    backgroundColor: "#FF0000",
    textAlign: "center",
    color: "white",
    borderRadius: "24px",
    fontWeight: 600,
    width: "180px",
    padding: "8px 22px",
  },

  rightBox: {
    display: "flex",
    width: "50%",
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  control: {
    position: "relative",
  },

  race: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    position: "absolute",
    zIndex: 10,
  },
};

export default styles;
