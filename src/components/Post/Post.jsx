import { Image, Text, View } from "react-native";
import ShowCommnetsIcon from "../../assets/svg/showCommnetsIcon";
import LocationIcon from "../../assets/svg/locationIcon";
import { styles } from "./Post";

export const Post = ({ img, description, commentsCount, location }) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.postImg} source={img} />
        <Text>{description}</Text>
        <View style={styles.postAdditionalInfoWrapper}>
          <View style={styles.additionalInfo}>
            <ShowCommnetsIcon />
            <Text style={styles.commentsCount}>{commentsCount}</Text>
          </View>
          <View style={styles.additionalInfo}>
            <LocationIcon />
            <Text style={styles.locationAddress}>{location}</Text>
          </View>
        </View>
      </View>
    </>
  );
};
