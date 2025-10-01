
import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page2Container: {
    width: 794,
    height: 1123,
    border: "2px solid #008080",
    margin: "0 auto",
    backgroundColor: "#fff",
    fontFamily: "Georgia, serif",
    boxSizing: "border-box",
    paddingTop: 60,
    paddingRight: 60,
    paddingBottom: 80,
    paddingLeft: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    position: "relative",
  },
  pageNumber: {
    position: "absolute",
    top: 20,
    right: 40,
    fontSize: 14,
    color: "#0066cc",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#0066cc",
    marginBottom: 20,
  },
  instructions: {
    fontSize: 15,
    lineHeight: 1.6,
    color: "#0066cc",
    marginBottom: 30,
  },
  instructionsLi: {
    marginBottom: 10,
  },
  hindiTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#0066cc",
    marginTop: 30,
    marginBottom: 15,
  },
  hindiInstructions: {
    fontSize: 15,
    lineHeight: 1.8,
    color: "#0066cc",
  },
  hindiInstructionsLi: {
    marginBottom: 10,
  },
  footer: {
    position: "absolute",
    bottom: 25,
    left: 60,
    right: 60,
    display: "flex",
    justifyContent: "space-between",
    fontSize: 14,
    fontWeight: "bold",
    color: "#0066cc",
  },
});

export default styles;
