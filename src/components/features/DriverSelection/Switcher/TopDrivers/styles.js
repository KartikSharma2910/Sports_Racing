const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "80px",
  },

  heading: {
    marginTop: "30px",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "26px",
    color: "white",
    fontWeight: 500,
    "& .red": {
      color: "#FF0000",
    },
  },

  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "24px",
    justifyContent: "space-between",
  },
};

export default styles;
