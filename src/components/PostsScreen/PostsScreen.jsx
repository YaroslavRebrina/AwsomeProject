import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import colors from "../../constatns/colors/colors";
import IconAddPost from "../../assets/svg/iconAddPost";
import IconGrid from "../../assets/svg/iconGrid";
import IconUser from "../../assets/svg/iconUser";

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

const styles = StyleSheet.create({
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

  userWrapper: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: colors.grayBorder,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 9,
    paddingHorizontal: 90,
    paddingBottom: 42,
  },

  buttonAddPost: {
    backgroundColor: colors.orangeMain,
    borderRadius: 20,
    paddingHorizontal: 29,
    paddingVertical: 14,
  },
});
