import { StyleSheet, View } from "react-native";
import { RegistrationPage } from "./src/components/RegistrationPage/RegristrationPage";
import { useFonts } from "expo-font";
import { LoginPage } from "./src/components/LoginPage/LoginPage";

export default function App() {
  const [fontLoaded] = useFonts({
    roboto: require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <RegistrationPage /> */}
      <LoginPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
