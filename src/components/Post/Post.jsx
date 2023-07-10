import { Image, Text, View } from "react-native";
import icons from "../../assets/svg";

import { styles } from "./Post";

const { IconShowComments, IconLocation, IconLikes } = icons;
export const Post = ({ img, description, likes, commentsCount, location }) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.postImg} source={img} />
        <Text>{description}</Text>
        <View style={styles.postAdditionalInfoWrapper}>
          <View style={styles.reactionsWrapper}>
            <View style={styles.additionalInfo}>
              <IconShowComments />
              <Text style={styles.commentsCount}>{commentsCount}</Text>
            </View>
            {likes && (
              <View style={styles.additionalInfo}>
                <IconLikes />
                <Text style={styles.commentsCount}>{likes}</Text>
              </View>
            )}
          </View>

          <View style={styles.additionalInfo}>
            <IconLocation />
            <Text style={styles.locationAddress}>{location}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
