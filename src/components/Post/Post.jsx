import { Image, Text, View } from "react-native";
import icons from "../../assets/svg/";

import { styles } from "./Post";
const { IconSendComment, IconLocation } = icons;
export const Post = ({ img, description, commentsCount, location }) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.postImg} source={img} />
        <Text>{description}</Text>
        <View style={styles.postAdditionalInfoWrapper}>
          <View style={styles.additionalInfo}>
            <IconSendComment />
            <Text style={styles.commentsCount}>{commentsCount}</Text>
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
