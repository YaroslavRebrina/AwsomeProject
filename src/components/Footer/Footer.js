import { StyleSheet } from "react-native";
import { colors } from "../../constatns";

export const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 83,
    bottom: 0,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.grayBorder,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 9,
    paddingHorizontal: 90,
    paddingBottom: 42,
    backgroundColor: colors.white,
  },

  buttonAddPost: {
    backgroundColor: colors.orangeMain,
    borderRadius: 20,
    paddingHorizontal: 29,
    paddingVertical: 14,
  },
});
