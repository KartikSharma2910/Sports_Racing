const styles = {
  wrapper: {
    padding: "30px",
    backgroundColor: "black",
  },

  heading: {
    fontSize: "24px",
    fontWeight: 600,
    color: "white",
    textAlign: "center",
    "& .red": {
      color: "#FF0000",
    },
  },

  description: {
    color: "#4A4A4A",
    textAlign: "center",
    fontSize: "16px",
    marginTop: "1rem",
  },

  cardsWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    rowGap: 3,
    marginTop: "2rem",
  },

  card: {
    width: "48%",
  },
};

export default styles;
