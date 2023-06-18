import {
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../../constatns/colors/colors";
import Add from "../../assets/svg/addPhotoSvg";
import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  onSubmit = () => {
    alert(`email:${email}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../../assets/imgs/RegistrationPage/auth-bg.jpg")}
        style={styles.bgImage}
        resizeMode={"cover"}
      >
        <View style={styles.globalContainer}>
          <View style={styles.photoPlaceholder}>
            <Add style={styles.svg} />
          </View>
          <Text style={styles.registrationText}>Увійти</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Адресса електороної почти"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.passwordBox}>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={passwordVisibility}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              >
                <Text>Показать</Text>
              </TouchableOpacity>
            </View>

            <Pressable style={styles.button} onPress={() => onSubmit()}>
              <Text style={styles.text}>Увійти</Text>
            </Pressable>
          </View>
          <Text style={styles.loginLink}>Немає акаунту? Зареєструватися</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.grayBorder,
    padding: 16,
  },
  registrationText: {
    fontFamily: "roboto",
    fontWeight: 500,

    fontSize: 30,
    lineHeight: 35,
    marginTop: 92,
  },
  button: {
    display: "flex",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: colors.orangeMain,
    paddingVertical: 16,
    width: "100%",
  },
  keyboardAvoidingView: {
    width: "100%",
    display: "flex",
    gap: 16,
    marginBottom: 27,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: colors.white,
  },

  formContainer: {
    width: "100%",
    padding: 16,
    display: "flex",
    gap: 16,
  },

  bgImage: {
    display: "flex",
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
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
    backgroundColor: colors.gray,
    borderRadius: 16,
  },

  svg: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },

  loginLink: {
    color: colors.blueTextColor,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },

  passwordBox: {
    position: "relative",
  },

  showPasswordButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});
