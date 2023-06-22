import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import colors from "../../constatns/colors/colors";
import { ArrivedComment } from "../Comment/ArrivedComment.jsx";
import { DeliveredComment } from "../Comment/DeliveredComment.jsx";
import SendComment from "../../assets/svg/sendCommnet";

export const CommentsScreen = () => {
  return (
    <View style={styles.globalContainer}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Коментарі</Text>
      </View>
      <View style={styles.mainContainer}>
        <Image
          source={require("../../assets/imgs/CommentsScreen/comments-img.jpg")}
          style={styles.img}
        />
        <Image />
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
      <View style={{ position: "relative", width: "100%" }}>
        <TextInput
          placeholder="Коментувати..."
          style={styles.commentInput}
        ></TextInput>
        <Pressable style={styles.sendCommentButton}>
          <SendComment></SendComment>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
    paddingBottom: 16,
  },

  mainContainer: {
    flex: 1,
    alignItems: "center",
  },

  commentInput: {
    height: 50,
    width: "100%",
    backgroundColor: colors.gray,
    borderColor: colors.grayBorder,
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 8,
  },

  img: {
    marginVertical: 32,
    borderRadius: 8,
  },

  header: {
    width: "100%",
    height: 88,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
  },

  pageTitle: {
    color: colors.darkTextColor,
    marginBottom: 11,
    fontFamily: "roboto",
    fontWeight: 500,

    fontSize: 17,
    lineHeight: 22,
  },

  commentsList: {
    flex: 1,
    alignItems: "center",
  },

  sendCommentButton: {
    backgroundColor: colors.orangeMain,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 50,
    position: "absolute",
    top: 7,
    right: 8,
  },
});
