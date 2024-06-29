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

  cardWrapper: {
    display: "flex",
    justifyContent: "space-between",
    rowGap: "30px",
    flexWrap: "wrap",
  },
};

export default styles;
