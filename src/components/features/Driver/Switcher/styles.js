const styles = {
  wrapper: {
    width: "100%",
    padding: "40px",
    backgroundColor: "black",
    "& .MuiTab-root": {
      color: "#8C8C8C",
      width: "50%",
    },
    "& .MuiTabs-flexContainer": {
      width: "350px",
      margin: "0 auto",
      borderRadius: "24px",
      justifyContent: "space-evenly",
      backgroundColor: "rgb(255,255,255,0.1)",
    },
    "& .MuiTabs-root .Mui-selected": {
      backgroundColor: "#FF0000",
      color: "white",
      fontWeight: 600,
      fontSize: "14px",
      borderBottom: "none",
      outline: "none",
      borderRadius: "24px",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },
};

export default styles;
