import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AuthBg } from "./assets/imgs/RegistrationPage/AuthBG.jpg";
import { RegistrationPage } from "./src/components/RegistrationPage/RegristrationPage";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
