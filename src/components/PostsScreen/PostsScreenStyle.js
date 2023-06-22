import { StyleSheet } from "react-native";
import colors from "../../constatns/colors/colors";
export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 100,
    paddingVertical: 11,
    marginTop: 44,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
  },
  publicationText: {
    alignSelf: "center",
  },

  userWrapper: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.grayBorder,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 9,
    paddingHorizontal: 90,
    paddingBottom: 42,
  },

  buttonAddPost: {
    backgroundColor: colors.orangeMain,
    borderRadius: 20,
    paddingHorizontal: 29,
    paddingVertical: 14,
  },
});
