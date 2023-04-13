import { StyleSheet } from "react-native";
import { Colors } from "../../../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.primary,
  },
  dividerContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dividerText: { textAlignVertical: "center", color: "grey" },
  divider: {
    marginVertical: 20,
    width: "40%",
    borderBottomColor: Colors.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 15,
    backgroundColor: "white",
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    width: "80%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    margin: 10,
    padding: 8,
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  socialButton: {
    width: "80%",
    height: 50,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    marginVertical: 10,
    paddingLeft: 30,
    backgroundColor: "white",
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 10,

    image: {
      width: 25,
      height: 25,
    },
  },
  text: {
    fontSize: 16,
    color: Colors.text,
  },
  flexRow: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  textPrimary: {
    fontSize: 16,
    color: "orange",
    marginVertical: 10,
  },
  loginPrimary: {
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default styles;
