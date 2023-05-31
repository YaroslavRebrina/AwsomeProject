import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import colors from "../../constatns/colors/colors";
import { Formik } from "formik";
import Add from "../../assets/svg/addPhotoSvg";

export const RegistrationPage = () => {
  return (
    <>
      <ImageBackground
        source={require("../../assets/imgs/RegistrationPage/auth-bg.jpg")}
        style={styles.bgImage}
        resizeMode={"cover"}
      >
        <View style={styles.globalContainer}>
          <View style={styles.photoPlaceholder}>
            <Add style={styles.svg} />
          </View>
          <Text style={styles.registrationText}>Реєстрація</Text>
          <Formik initialValues={{ userName: "", email: "", password: "" }}>
            {({ values }) => (
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.input}
                  value={values.userName}
                  placeholder="Логін"
                />
                <TextInput
                  style={styles.input}
                  value={values.email}
                  placeholder="Адресса електороної почти"
                />
                <TextInput
                  style={styles.input}
                  value={values.password}
                  placeholder="Пароль"
                />
                <Pressable style={styles.button}>
                  <Text style={styles.text}>Зареєструватися</Text>
                </Pressable>
              </View>
            )}
          </Formik>
          <Text style={styles.loginLink}>Вже є аккаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  registrationText: {
    marginTop: 92,
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: colors.orangeMain,
    paddingVertical: 16,
    width: "100%",
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
    gap: 10,
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
});
