import { Button, Pressable, StyleSheet, Text, TextInput } from "react-native";
import colors from "../../constatns/colors/colors";

export const RegistrationPage = () => {
  return (
    <>
      {/* <ImageBackground source={AuthBg} style={styles.image}> */}
      <Text>Реєстрація</Text>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      {/* </ImageBackground> */}
      <Pressable style={styles.button}>
        <Text style={styles.text}>Зареєструватися</Text>
      </Pressable>
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
  //   text: {
  //     font-family: 'Roboto';
  // font-style: normal;
  // font-weight: 400;
  // font-size: 16px;
  // line-height: 19px;
  // /* identical to box height */

  // text-align: center;
});
