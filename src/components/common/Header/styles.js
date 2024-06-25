const styles = {
  wrapper: {
    display: "flex",
    padding: "0 40px",
    color: "white",
    alignItems: "center",
    justifyContent: "space-between",
    height: "65px",
    background:
      "linear-gradient(0deg, #3A0A0A 0%, #BE201F 105.85%, #EFEFEF 202%)",
  },

  heading: {
    fontSize: {
      xs: "18px",
      sm: "22px",
    },
    fontWeight: "bold",
    fontStyle: "italic",
  },

  linksWrapper: {
    display: {
      xs: "none",
      sm: "flex",
    },
    position: "relative",
    color: "white",
  },

  links: {
    textDecoration: "none",
    height: "100%",
    fontSize: {
      xs: "11px",
      md: "13px",
    },
    borderRight: "1.5px solid rgba(255, 255, 255, 0.34)",
    fontWeight: 300,
    textTransform: "uppercase",
    color: "white",
    padding: "0 18px",
  },

  login: {
    display: {
      xs: "none",
      md: "block",
    },
    color: "white",
    border: "1.5px solid #999999",
    fontSize: "14px",
    borderRadius: "24px",
    padding: "10px 26px",
    background: "linear-gradient(180deg, #AD1519 0%, #FF0000 100%)",
  },
};

export default styles;
