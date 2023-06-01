import { StyleSheet, View } from "react-native";
import { RegistrationPage } from "./src/components/RegistrationPage/RegristrationPage";
import { useFonts } from "expo-font";
import { LoginPage } from "./src/components/LoginPage/LoginPage";
import { PostsScreen } from "./src/components/PostsScreen/PostsScreen";

export default function App() {
  const [fontLoaded] = useFonts({
    roboto: require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      {/* <RegistrationPage /> */}
      {/* <LoginPage /> */}
      <PostsScreen />
    </>
  );
}
