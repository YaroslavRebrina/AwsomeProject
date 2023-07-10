import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  reactionsWrapper: {
    flexDirection: "row",
    gap: 24,
  },

  postAdditionalInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  additionalInfo: {
    flexDirection: "row",
  },

  commentsCount: {
    marginLeft: 6,
  },
  locationAddress: {
    marginLeft: 4,
  },

  postImg: {
    width: 378,
    height: 240,
    borderRadius: 8,
    alignSelf: "center",
  },
});
