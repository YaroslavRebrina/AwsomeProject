import { StyleSheet } from "react-native";
import colors from "../../constatns/colors/colors";
export const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 16,
  },

  mainContainer: {
    paddingHorizontal: 16,
    flex: 1,
    alignItems: "center",
  },

  commentInput: {
    height: 50,
    width: "100%",
    backgroundColor: colors.gray,
    borderColor: colors.grayBorder,
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: 16,

    paddingLeft: 16,
    // paddingRight: 8,
  },

  img: {
    marginVertical: 32,
    borderRadius: 8,
  },

  header: {
    width: "100%",
    height: 88,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
  },

  pageTitle: {
    color: colors.darkTextColor,
    marginBottom: 11,
    fontFamily: "roboto",
    fontWeight: 500,

    fontSize: 17,
    lineHeight: 22,
  },

  commentsList: {
    flex: 1,
    alignItems: "center",
  },

  sendCommentButton: {
    backgroundColor: colors.orangeMain,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 50,
    position: "absolute",
    top: 7,
    right: 24,
  },
});
