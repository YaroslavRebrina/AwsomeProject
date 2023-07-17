import icons from "../../assets/svg";
import { colors } from "../../constatns";

const { IconGoBackArrow, IconLogOut } = icons;

export const createPostHeaderStyles = {
  title: "Публікації",
  headerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
  },
  headerTitleStyle: {
    fontFamily: "roboto",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
  },
  headerTintColor: colors.darkTextColor,
  headerTitleAlign: "center",

  headerLeft: () => (
    <IconGoBackArrow styles={{ position: "absolute", top: 10, left: 16 }} />
  ),
};
