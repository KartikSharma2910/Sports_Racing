const styles = {
  wrapper: {
    height: "520px",
    position: "relative",
    background: "linear-gradient(270deg, #000000 0%, #FF0000 101.12%)",
  },

  carBox: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },

  mainHeading: {
    fontSize: "60px",
    fontWeight: "bold",
    color: "white",
    opacity: 0.7,
    marginLeft: "20px",
    textAlign: "center",
    fontStyle: "italic",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  personBox: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    right: 10,
    bottom: 0,
  },

  dataContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  heading: {
    fontSize: "38px",
    color: "white",
    textTransform: "uppercase",
    fontWeight: 600,
  },

  time: {
    fontSize: "16px",
    textAlign: "right",
    fontWeight: 500,
    color: "#F9C83A",
  },

  buttonWrap: {
    display: "flex",
    gap: "20px",
    justifyContent: "end",
  },

  apply: {
    border: "1px solid white",
    fontSize: "12px",
    textAlign: "center",
    textTransform: "uppercase",
    borderRadius: "24px",
    padding: "12px 24px",
    cursor: "pointer",
    color: "white",
  },

  buyTickets: {
    fontSize: "12px",
    textAlign: "center",
    backgroundColor: "#FF0000",
    textTransform: "uppercase",
    borderRadius: "24px",
    padding: "12px 24px",
    cursor: "pointer",
    color: "white",
  },

  eventPerson: {
    height: "300px",
    width: "350px",
  },

  logoBox: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "60px",
    height: "60px",
  },

  logoImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
};

export default styles;
