import { View, Text, Image, Pressable, ScrollView } from "react-native";

import icons from "../../assets/svg";

import { styles } from "./PostsScreenStyle";
import { Post } from "../Post/Post.jsx";

const { IconAddPost, IconGrid, IconUser } = icons;
export const PostsScreen = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <Text style={styles.publicationText}>Публікації</Text>
      </View>
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
      <ScrollView style={styles.postScrollView}>
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
