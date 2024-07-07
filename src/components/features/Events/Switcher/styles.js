const styles = {
  wrapper: {
    width: "100%",
    // padding: "40px",
    backgroundColor: "black",
    "& .MuiTab-root": {
      color: "white",
      fontSize: "16px",
      fontWeight: 500,
    },
    "& .MuiTabs-flexContainer": {
      width: "100%",
      margin: "0 auto",
      padding: "8px 0px",
      justifyContent: "center",
    },
    "& .MuiTabs-root .Mui-selected": {
      color: "#FF0000",
      fontSize: "16px",
      borderBottom: "none",
      outline: "none",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#FF0000",
    },
  },

  taber: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  tabHead: {
    fontSize: "16px",
    fontWeight: 500,
  },

  tabDesc: {
    fontSize: "14px",
    fontWeight: 300,
    opacity: 0.8,
  },
};

export default styles;
