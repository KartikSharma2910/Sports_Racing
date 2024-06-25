const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    padding: "40px",
    color: "white",
    background: "linear-gradient(83.95deg, #FF0000 -76.49%, #990000 71.53%)",
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "20px",
    justifyContent: "space-between",
  },

  dataSet: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    width: {
      xs: "100%",
      sm: "47%",
      md: "24%",
    },
  },

  heading: {
    fontSize: "14px",
    cursor: "pointer",
  },

  description: {
    fontSize: "12px",
    cursor: "pointer",
    opacity: 0.7,
  },

  footer: {
    fontSize: "12px",
    textAlign: "center",
  },

  iconWrapper: {
    display: "flex",
    gap: 3,
  },

  icon: {
    fontSize: "30px",
  },

  inputBox: {
    display: "flex",
  },

  input: {
    padding: "24px",
    borderRadius: "24px 0px 0px 24px",
    borderColor: "white",
  },

  subscribe: {
    padding: "13.5px 22px",
    fontSize: "14px",
    cursor: "pointer",
    color: "#FF0000",
    borderRadius: "0px 24px 24px 0px",
    backgroundColor: "white",
  },
};

export default styles;
