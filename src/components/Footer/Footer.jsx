import { Pressable, Text, View } from "react-native";
import { styles } from "./Footer";
import icons from "../../assets/svg";

const { IconGrid, IconAddPost, IconUser } = icons;

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Pressable>
        <Text>
          <IconGrid />
        </Text>
      </Pressable>
      <Pressable style={styles.buttonAddPost}>
        <IconAddPost />
      </Pressable>
      <Pressable>
        <IconUser />
      </Pressable>
    </View>
  );
};
