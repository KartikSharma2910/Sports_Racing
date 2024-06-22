const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "#101010",
    padding: "40px",
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
    fontSize: "14px",
    textAlign: "center",
  },

  lowerBoxes: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  lowerLeftBox: {
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
    fontSize: "14px",
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
    width: "70%",
  },

  miniBoxContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
  },

  rightImageContainer: {
    width: "150px",
    height: "150px",
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
