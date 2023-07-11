import { StyleSheet } from "react-native";
import { colors } from "../../constatns";
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
  logOutButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  userWrapper: {
    marginLeft: 16,
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  postScrollView: {
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 32,
    paddingBottom: 20,
  },
});
