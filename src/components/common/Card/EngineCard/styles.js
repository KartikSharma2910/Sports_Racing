const styles = {
  wrapper: {
    display: "flex",
    height: "350px",
  },

  leftBox: {
    width: "50%",
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  rightBox: {
    width: "50%",
    display: "flex",
    gap: "20px",
    padding: "30px",
  },

  number: {
    fontSize: "56px",
    fontWeight: 600,
    color: "#FF0000",
    fontStyle: "italic",
  },

  divider: {
    width: "3px",
    height: "80px",
    backgroundColor: "white",
    borderRadius: "20px",
  },

  dataSet: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  heading: {
    color: "white",
    fontSize: "26px",
    fontWeight: "bold",
  },

  description: {
    fontSize: "14px",
    color: "#A6A6A6",

    "& .yellow": {
      color: "#C8B100",
    },
  },

  button: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#FF0000",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    textAlign: "center",
    padding: "8px 18px",
    width: "140px",
    borderRadius: "24px",
  },

  icon: {
    fontSize: "16px",
    transform: "rotate(-90deg)",
  },
};

export default styles;
