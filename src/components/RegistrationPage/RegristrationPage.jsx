import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export const RegistrationPage = () => {
  return (
    <>
      {/* <ImageBackground source={AuthBg} style={styles.image}> */}
      <Text>Реєстрація</Text>
      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>
      {/* </ImageBackground> */}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: "95%",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
  },
});
