const styles = {
  wrapper: {
    width: "100%",
    padding: "40px",
    backgroundColor: "black",
    "& .MuiTab-root": {
      color: "#8C8C8C",
      width: "16%",
    },
    "& .MuiTabs-flexContainer": {
      width: "100%",
      margin: "0 auto",
      justifyContent: "space-between",
      backgroundColor: "rgb(255,255,255,0.1)",
    },
    "& .MuiTabs-root .Mui-selected": {
      backgroundColor: "#FF0000",
      color: "white",
      fontSize: "14px",
      borderBottom: "none",
      outline: "none",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },

  taber: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  tabHead: {
    fontSize: "14px",
    fontWeight: 500,
  },

  tabDesc: {
    fontSize: "12px",
    fontWeight: 300,
    opacity: 0.8,
  },
};

export default styles;
