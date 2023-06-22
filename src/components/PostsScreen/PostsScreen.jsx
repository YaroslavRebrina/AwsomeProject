import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import colors from "../../constatns/colors/colors";
import IconAddPost from "../../assets/svg/iconAddPost";
import IconGrid from "../../assets/svg/iconGrid";
import IconUser from "../../assets/svg/iconUser";

import { styles } from "./PostsScreenStyle";

export const PostsScreen = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <Text style={styles.publicationText}>Публікації</Text>
      </View>
      <View style={styles.userWrapper}>
        <Image
          source={require("../../../src/assets/imgs/LoginPage/User.jpg")}
          style={{ width: 60, height: 60 }}
        />
        <View>
          <Text>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
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
    </View>
  );
};
