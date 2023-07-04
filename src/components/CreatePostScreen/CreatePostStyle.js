import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constatns/colors/colors";

const screenWidth = Dimensions.get("screen").width;

export const styles = StyleSheet.create({
  constainer: {
    position: "relative",
    flex: 1,
  },

  main: {
    paddingHorizontal: 16,
  },

  header: {
    paddingHorizontal: 100,
    paddingVertical: 11,
    marginTop: 44,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
  },

  publicationText: {
    alignSelf: "center",

    fontFamily: "roboto",
    fontWeight: 500,

    fontSize: 17,
    lineHeight: 22,
  },

  goBackButton: {
    position: "absolute",
    top: 10,
    left: 16,
  },

  editorPhotoContainer: {
    position: "relative",
    marginBottom: 32,
    gap: 8,
  },

  editorPhotoText: {
    alignSelf: "flex-start",
    fontFamily: "roboto",
    fontWeight: 400,
    color: colors.grayCommentDate,
  },

  loadedImg: {
    borderRadius: 8,
    width: screenWidth - 16,
    height: 240,
  },

  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,

    fontFamily: "roboto",
    color: colors.darkTextColor,
  },

  iconLocation: {
    position: "absolute",
    top: 13,
    left: 0,
  },

  publicateButton: {
    display: "flex",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: colors.orangeMain,
    paddingVertical: 16,
    width: "100%",
    marginTop: 27,
  },
  cancel: {
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 27,
    borderRadius: 50,
    backgroundColor: colors.gray,
    paddingVertical: 16,
    width: 70,
    height: 40,
  },

  editorDescriptionContainer: {
    gap: 16,
    marginBottom: 120,
  },

  changePhotoButton: {
    position: "absolute",
    top: 90,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "rgba(225, 225, 225, 0.3)",
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  publicateButtonText: {
    fontFamily: "robotoRegular",

    fontWeight: 400,
    color: colors.white,
    fontSize: 16,
    lineHeight: 18.75,
  },
});
