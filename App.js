import { RegistrationPage } from "./src/components/RegistrationPage/RegristrationPage";
import { useFonts } from "expo-font";
import { LoginPage } from "./src/components/LoginPage/LoginPage";
import { PostsScreen } from "./src/components/PostsScreen/PostsScreen";
import { registerRootComponent } from "expo";
import { CommentsScreen } from "./src/components/CommentsScreen/CommentsScreen";
import { CreatePostScreen } from "./src/components/CreatePostScreen/CreatePost.jsx";
import { ProfileScreen } from "./src/components/ProfileScreen/ProfileScreen.jsx";
import { screenNames } from "./src/constatns";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { feedHeaderStyles } from "./src/components/PostsScreen/PostScreenHeader";

const MainStack = createStackNavigator();

const {
  registrationName,
  loginName,
  feedName,
  commnetsName,
  createPostName,
  profileName,
} = screenNames;

export default function App() {
  const [fontLoaded] = useFonts({
    roboto: require("./src/assets/fonts/Roboto-Medium.ttf"),
    robotoRegular: require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={loginName}>
        <MainStack.Screen
          name={registrationName}
          component={RegistrationPage}
        />
        <MainStack.Screen name={loginName} component={LoginPage} />
        <MainStack.Screen
          name={feedName}
          component={PostsScreen}
          options={feedHeaderStyles}
          
        />
        <MainStack.Screen name={commnetsName} component={CommentsScreen} />
        <MainStack.Screen name={createPostName} component={CreatePostScreen} />
        <MainStack.Screen name={profileName} component={ProfileScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
