import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constatns";

export const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1,
    position: "relative",
    flexDirection: "column-reverse",
    alignItems: "flex-end",
  },
  postScrollView: {
    padding: 0,
    paddingBottom: 43,
    gap: 32,
  },
  userName: {
    marginTop: 92,
    marginBottom: 32,
  },
  svg: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  photoPlaceholder: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [
      { translateX: -Dimensions.get("window").width * 0.15 },
      { translateY: -Dimensions.get("window").width * 0.15 },
    ],
    width: 120,
    height: 120,
    borderRadius: 16,
  },

  imgBg: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  globalContainer: {
    position: "relative",
    width: "100%",
    height: 549,
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  logOutSvg: {
    position: "absolute",
    top: 22,
    right: 16,
  },
});
