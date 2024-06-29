const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  heading: {
    marginTop: "30px",
    textTransform: "uppercase",
    fontSize: "26px",
    color: "white",
    fontWeight: 500,
    "& .red": {
      color: "#FF0000",
    },
  },

  table: {
    border: "1px solid white",
    width: "100%",
    height: "600px",
  },

  header: {
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "white",
  },

  driverWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },

  driverImageWrap: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },

  driverImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
};

export default styles;
