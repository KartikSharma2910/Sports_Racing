import { keyframes } from "@mui/system";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const styles = {
  wrapper: {
    position: "relative",
    width: "30%",
  },

  number: {
    position: "absolute",
    top: -80,
    fontSize: "90px",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#FF0000",
  },

  heading: {
    fontSize: "24px",
    fontWeight: 500,
    textTransform: "uppercase",
  },

  miniHeading: {
    fontSize: "16px",
    fontWeight: 500,
    textTransform: "uppercase",
  },

  imageContainer: {
    height: "250px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  description: {
    color: "#797979",
    textTransform: "uppercase",
  },

  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "10px 20px",
    color: "white",
    backgroundColor: "#1E1E1E",
  },

  miniBox: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  tyreWrapper: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "130px",
    height: "130px",
  },

  tyre: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    animation: `${rotate} 10s linear infinite`,
  },

  borderBox: {
    border: "13px solid #797979",
    position: "absolute",
    borderRadius: "0 20px 0",
    borderLeft: "none",
    borderBottom: "none",
    top: -20,
    width: "50%",
    right: -25,
    height: "100%",
  },
};

export default styles;
