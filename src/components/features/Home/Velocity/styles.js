const styles = {
  wrapper: {
    height: "min-content",
    padding: {
      xs: "20px",
      sm: "30px",
      md: "40px",
    },
    display: "flex",
    flexDirection: "column",
    gap: 4,
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(/velocity.png)",
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  dataContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  heading: {
    fontSize: {
      xs: "20px",
      sm: "22px",
      md: "24px",
    },
    fontWeight: 600,
    textAlign: "center",
  },

  description: {
    fontSize: "14px",
    textTransform: "capitalize",
  },

  cardWrapper: {
    width: "100%",
    rowGap: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },

  cardHeight: {
    xs: "180px",
    sm: "200px",
    md: "240px",
  },

  cardWidth: {
    xs: "180px",
    sm: "200px",
    md: "240px",
  },
};

export default styles;
