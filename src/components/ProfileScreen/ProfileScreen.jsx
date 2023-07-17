import { Text, ImageBackground, View, ScrollView, Image } from "react-native";
import icons from "../../assets/svg";
import { styles } from "./ProfileScreen";
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
      </View>
    </View>
  );
};
