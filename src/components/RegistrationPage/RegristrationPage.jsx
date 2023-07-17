import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RegistrationPageStyle";
import { screenNames } from "../../constatns";
import icons from "../../assets/svg";

const { IconAdd } = icons;
const { loginName, homeName } = screenNames;

export const RegistrationPage = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const navigation = useNavigation();

  onSubmit = () => {
    navigation.navigate(homeName);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../../assets/imgs/auth-bg.jpg")}
        style={styles.bgImage}
        resizeMode={"cover"}
      >
        <View style={styles.globalContainer}>
          <View style={styles.photoPlaceholder}>
            <IconAdd style={styles.svg} />
          </View>
          <Text style={styles.registrationText}>Реєстрація</Text>
          <KeyboardAvoidingView
            style={styles.formContainer}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={120}
          >
            <TextInput
              style={styles.input}
              placeholder="Логін"
              value={login}
              onChangeText={setLogin}
            />
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

            <Pressable style={styles.button} onPress={onSubmit}>
              <Text style={styles.text}>Зареєструватися</Text>
            </Pressable>
          </KeyboardAvoidingView>
          <Text style={styles.loginLink}>
            Вже є аккаунт? &nbsp;
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate(loginName)}
            >
              Увійти
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
