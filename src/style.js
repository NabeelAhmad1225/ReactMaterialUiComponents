import { StyleSheet, css } from "aphrodite";

import COLORS from "./color";

const styles = StyleSheet.create({
  container: {
    padding: "80px 0px 60px",
    background: COLORS.white,
  },
  icon: {
    marginRight: "20px",
  },
  btn: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: COLORS.white,
    padding: "50px 0",
  },
});

export default styles;
