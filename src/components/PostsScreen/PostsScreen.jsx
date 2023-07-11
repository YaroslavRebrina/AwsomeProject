import { View, Text, Image, Pressable, ScrollView } from "react-native";

import { styles } from "./PostsScreenStyle";
import { Post } from "../Post/Post.jsx";
import { Footer } from "../Footer/Footer.jsx";

export const PostsScreen = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.userWrapper}>
        <Image
          source={require("../../../src/assets/imgs/User.jpg")}
          style={{ width: 60, height: 60 }}
        />
        <View>
          <Text>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.postScrollView}>
        <Post
          description={"Ліс"}
          img={require("../../../src/assets/imgs/ForestPicture.jpg")}
          commentsCount={0}
          location={"Ivano-Frankivs'k Region, Ukraine"}
        ></Post>
        <Post
          description={"Ліс"}
          img={require("../../../src/assets/imgs/comments-img.jpg")}
          commentsCount={0}
          location={"Ivano-Frankivs'k Region, Ukraine"}
        ></Post>
      </ScrollView>
      <Footer />
    </View>
  );
};
