import {
  Dimensions,
  ImageBackground,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { styles } from "./LoginPageStyle";
import { screenNames } from "../../constatns";
import { useNavigation } from "@react-navigation/native";

import icons from "../../assets/svg";

const { IconAdd } = icons;
const { registrationName, feedName } = screenNames;

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const navigation = useNavigation();

  onSubmit = () => {
    navigation.navigate(feedName);
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
          <Text style={styles.loginLink}>
            Немає акаунту?
            <Text
              style={styles.loginLink}
              onPress={navigation.navigate(registrationName)}
            >
              Зареєструватися
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
