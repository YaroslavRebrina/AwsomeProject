import { View, Text, Image, Pressable, ScrollView } from "react-native";

import { CreatePostScreen } from "../CreatePostScreen/CreatePost.jsx";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen.jsx";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors, screenNames } from "../../constatns";
import IconGrid from "../../assets/svg/IconGrid";
import IconUser from "../../assets/svg/IconUser";
import { PostsScreen } from "../PostsScreen/PostsScreen.jsx";
import IconAddPost from "../../assets/svg/IconAddPost.js";
import { feedHeaderStyles } from "../PostsScreen/PostScreenHeader.js";
import { createPostHeaderStyles } from "../CreatePostScreen/CreatePostHeader.js";

const {
  registrationName,
  loginName,
  feedName,
  commnetsName,
  createPostName,
  profileName,
} = screenNames;

const Tabs = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          width: "100%",
          height: 83,
          bottom: 0,

          borderTopWidth: 1,
          borderTopColor: colors.grayBorder,
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: 9,
          paddingHorizontal: 90,
          paddingBottom: 42,
          backgroundColor: colors.white,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#2272e3",
      }}
    >
      <Tabs.Screen
        name={feedName}
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <IconGrid focused={focused} color={color} />
          ),
          ...feedHeaderStyles,
        }}
      />
      <Tabs.Screen
        name={createPostName}
        component={CreatePostScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: colors.orangeMain,
                borderRadius: 20,
                paddingHorizontal: 29,
                paddingVertical: 14,
              }}
            >
              <IconAddPost focused={focused} color={color} />
            </View>
          ),
          ...createPostHeaderStyles,
        }}
      />
      <Tabs.Screen
        name={profileName}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <IconUser focused={focused} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
