import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import icons from "../../assets/svg";
import colors from "../../constatns/colors/colors";
import { Post } from "../Post/Post.jsx";
import { Footer } from "../Footer/Footer.jsx";

const { IconDeleteAvatar, IconLogOut } = icons;

export const ProfileScreen = () => {
  return (
    <View style={styles.profileScreenContainer}>
      <ImageBackground
        style={styles.imgBg}
        source={require("../../assets/imgs/auth-bg.jpg")}
      ></ImageBackground>
      <View style={styles.globalContainer}>
        <View style={styles.photoPlaceholder}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 16,
            }}
            source={require("../../assets/imgs/User.jpg")}
          />
          <IconDeleteAvatar style={styles.svg} />
        </View>
        <IconLogOut style={styles.logOutSvg} />
        <Text style={styles.userName}>Natali Romanova</Text>
        <ScrollView contentContainerStyle={styles.postScrollView}>
          <Post
            description={"Ліс"}
            img={require("../../../src/assets/imgs/ForestPicture.jpg")}
            commentsCount={8}
            likes={153}
            location={"Ukraine"}
          ></Post>
          <Post
            description={"Захід на Чорному морі"}
            img={require("../../../src/assets/imgs/comments-img.jpg")}
            commentsCount={0}
            likes={200}
            location={"Ukraine"}
          ></Post>
          <Post
            description={"Ліс"}
            img={require("../../../src/assets/imgs/venecia.jpg")}
            commentsCount={50}
            likes={200}
            location={"Italy"}
          ></Post>
        </ScrollView>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
