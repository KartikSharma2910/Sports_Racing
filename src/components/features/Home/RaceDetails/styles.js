const styles = {
  wrapper: {
    backgroundColor: "black",
  },

  header: {
    textAlign: "center",
    color: "white",
    fontSize: "28px",
    fontWeight: 600,
    paddingTop: "2rem",
  },

  container: {
    display: "flex",
    alignItems: "center",
  },

  imageBox: {
    padding: "30px",
    width: "40%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  dataContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    gap: "12px",
    color: "white",
    width: "60%",
  },

  heading: {
    fontSize: "16px",
    fontWeight: 600,
  },

  timerBox: {
    display: "flex",
    gap: 2,
    fontSize: "14px",
  },

  time: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  icon: {
    color: "#FF0000",
    fontSize: "18px",
  },

  description: {
    fontSize: "14px",
    width: "80%",
  },

  redHead: {
    color: "#FF0000",
  },

  minDesc: {
    fontSize: "14px",
  },

  register: {
    backgroundColor: "#FF0000",
    textAlign: "center",
    borderRadius: "24px",
    fontWeight: 600,
    width: "180px",
    padding: "8px 22px",
  },

  flagTape: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  rulesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "40px",
    color: "white",
  },

  rulesHeading: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 600,
    textTransform: "capitalize",
  },

  rulesDesc: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    "& .desc": {
      color: "#797979",
    },
  },
};

export default styles;
