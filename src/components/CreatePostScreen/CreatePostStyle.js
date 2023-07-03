import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constatns/colors/colors";

export const styles = StyleSheet.create({
  constainer: {
    position: "relative",
    paddingHorizontal: 16,
    flex: 1,
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
  },

  goBackButton: {
    position: "absolute",
    top: 10,
    left: 0,
  },

  editorPhotoContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: 32,
    gap: 8,
  },

  editorPhotoText: {
    alignSelf: "flex-start",
  },

  img: {
    width: 343,
    height: 240,
  },

  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
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
    borderRadius: 50,
    backgroundColor: colors.gray,
    paddingVertical: 16,
    width: 70,
    height: 40,
    marginTop: 27,
  },

  editorDescriptionContainer: {
    gap: 16,
    marginBottom: 120,
  },
  //"rgb(100, 100, 100, 30)"
  changePhotoButton: {
    position: "absolute",
    top: 90,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
});
