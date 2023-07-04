import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./CreatePostStyle";
import icons from "../../assets/svg";

const { IconGoBackArrow, IconLocation, IconTrashCan, IconCamera } = icons;

export const CreatePostScreen = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.header}>
        <IconGoBackArrow style={styles.goBackButton} />
        <Text style={styles.publicationText}>Створити публікацію</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.editorPhotoContainer}>
          <View style={{ width: "100%", height: 240, alignItems: "center" }}>
            <Image
              styles={styles.loadedImg}
              source={require("../../assets/imgs/ForestPicture.jpg")}
            />
          </View>
          <Text style={styles.editorPhotoText}>Редагувати фото</Text>
          <Pressable style={styles.changePhotoButton}>
            <IconCamera />
          </Pressable>
        </View>
        <View style={styles.editorDescriptionContainer}>
          <View>
            <TextInput style={styles.input}>Ліс</TextInput>
          </View>
          <View>
            <IconLocation style={styles.iconLocation} />
            <TextInput style={{ ...styles.input, paddingLeft: 28 }}>
              Ivano-Frankivs'k Region, Ukraine
            </TextInput>
          </View>
          <Pressable style={styles.publicateButton}>
            <Text style={styles.publicateButtonText}>Опублікувати</Text>
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.cancel}>
        <IconTrashCan />
      </Pressable>
    </View>
  );
};
