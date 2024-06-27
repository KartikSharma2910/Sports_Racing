const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "#101010",
    padding: {
      xs: "20px",
      sm: "30px",
      md: "40px",
    },
    color: "#8A8A8A",
    "& .red": {
      color: "#FF0000E5",
    },
  },

  heading: {
    fontSize: "24px",
    color: "white",
    textAlign: "center",
    fontWeight: 600,
  },

  description: {
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    textAlign: "center",
  },

  lowerBoxes: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  lowerLeftBox: {
    display: {
      xs: "none",
      md: "block",
    },
    width: "30%",
  },

  leftImageContainer: {
    position: "relative",
  },

  leftImage: {
    width: "280px",
  },

  imageDataSet: {
    position: "absolute",
    top: 8,
    left: 16,
    fontSize: "14px",
    fontWeight: 600,
    color: "white",
  },

  leftBottomText: {
    fontSize: "14px",
    width: "70%",
    textTransform: "capitalize",
    "& .dark": {
      color: "#BEBEBE",
    },
  },

  bottomText: {
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    width: "45%",
    textTransform: "capitalize",
    "& .dark": {
      color: "#BEBEBE",
    },
  },

  rightBox: {
    display: "flex",
    flexDirection: "column",
    rowGap: "30px",
    width: {
      xs: "100%",
      md: "70%",
    },
  },

  miniBoxContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
  },

  rightImageContainer: {
    width: {
      xs: "120px",
      sm: "130px",
      md: "150px",
    },
    height: {
      xs: "120px",
      sm: "130px",
      md: "150px",
    },
    borderRadius: "100%",
    border: "1px solid red",
  },

  rightImage: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    objectFit: "cover",
  },
};

export default styles;
