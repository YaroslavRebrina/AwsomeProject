import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";

import { ArrivedComment } from "../Comment/ArrivedComment.jsx";
import { DeliveredComment } from "../Comment/DeliveredComment.jsx";
import icons from "../../assets/svg";
import { styles } from "./CommentsScreenStyle";

const { IconSendComment } = icons;

export const CommentsScreen = () => {
  return (
    <View style={styles.globalContainer}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Коментарі</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={{ width: "100%", height: 240, marginVertical: 32 }}>
          <Image
            source={require("../../assets/imgs/comments-img.jpg")}
            style={styles.img}
          />
        </View>
        <View style={styles.commentsList}>
          <ArrivedComment
            message={
              "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
            }
            date={"09 червня, 2020 | 08:40"}
          />
          <DeliveredComment
            message={
              "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
            }
            date={"09 червня, 2020 | 09:14"}
          />
          <ArrivedComment
            message={"Thank you! That was very helpful!"}
            date={"09 червня, 2020 | 09:20"}
          />
        </View>
      </View>
      <View
        style={{ position: "relative", width: "100%", paddingHorizontal: 16 }}
      >
        <TextInput
          placeholder="Коментувати..."
          style={styles.commentInput}
        ></TextInput>
        <Pressable style={styles.sendCommentButton}>
          <IconSendComment></IconSendComment>
        </Pressable>
      </View>
    </View>
  );
};
