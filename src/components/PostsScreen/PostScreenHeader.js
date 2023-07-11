import icons from "../../assets/svg";
import { colors } from "../../constatns";
import { styles } from "./PostsScreenStyle";

const { IconLogOut } = icons;

export const feedHeaderStyles = {
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
  headerRight: () => <IconLogOut style={styles.logOutButton} />,
  headerLeft: null,
};
