import React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Touchable,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: "50%", height: "25%" }}
        source={require("./assets/AppLogo.png")}
      />
      <TextInput style={styles.inputText} placeholder="Username" />
      <TextInput style={styles.inputText} placeholder="Password" />
      <Button title="Sign in" color="#E3967E" />
      <TouchableOpacity>
        <Text>Forgot password?</Text>
      </TouchableOpacity>
      <Button title="New? Sign up" color="#E3967E" />
      <Text>or continue with</Text>
      <Image
        style={{ width: "10%", height: "10%" }}
        source={require("./assets/google.png")}
      />
      <Image
        style={{ width: "10%", height: "10%" }}
        source={require("./assets/facebook.png")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
