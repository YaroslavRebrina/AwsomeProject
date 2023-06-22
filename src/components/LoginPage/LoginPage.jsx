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

import { styles } from "./LoginPageStyle";

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
              <Text
                style={styles.showPasswordButton}
                onPress={() => setPasswordVisibility(!passwordVisibility)}
              >
                Показать
              </Text>
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
