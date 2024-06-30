const styles = {
  wrapper: {
    padding: "40px",
    backgroundColor: "black",
    color: "white",
  },

  busted: {
    position: "absolute",
  },

  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "34px",
    width: "100%",
    height: "100%",
    padding: "22px",
    borderRadius: "12px",
    border: "1px solid red",
  },

  heading: {
    fontSize: "26px",
    fontWeight: 500,
    textTransform: "uppercase",
  },

  description: {
    fontSize: "14px",
    textAlign: "center",
    opacity: 0.8,
  },

  linker: {
    display: "flex",
    flexDirection: "column",
    rowGap: "30px",
    width: "40%",
  },

  links: {
    display: "flex",
    justifyContent: "space-between",
  },

  bottomBox: {
    display: "flex",
    justifyContent: "space-between",
  },

  leftBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "30px",
    width: "48%",
  },

  redHeading: {
    fontSize: "28px",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 600,
    color: "#FF0000",
  },

  linkWrap: {
    display: "flex",
    flexDirection: "column",
    rowGap: "30px",
  },

  rightBox: {
    width: "48%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default styles;
