import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../../../constants/Colors";
import styles from "../style/styles";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hidePassword, setHidePassword] = React.useState(true);
  const [showIcon, setShowIcon] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={[styles.inputContainer, { marginVertical: 20 }]}>
        <TextInput
          onChangeText={(email) => setEmail(email)}
          style={{ flex: 1 }}
          placeholder={"Email"}
        ></TextInput>
        <Icon
          name={showIcon ? "times-circle" : ""}
          style={styles.inputIcon}
        ></Icon>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={hidePassword}
          placeholder={"Mật khẩu"}
          style={{ flex: 1 }}
        ></TextInput>
        <Icon
          name={"times-circle"}
          style={[styles.inputIcon, { marginRight: 10 }]}
        ></Icon>
        <Icon
          onPress={() => setHidePassword(!hidePassword)}
          name={hidePassword ? "eye-slash" : "eye"}
          style={styles.inputIcon}
        ></Icon>
      </View>

      <View
        style={{
          width: "80%",
        }}
      >
        <Text style={[styles.textPrimary, { textAlign: "right" }]}>
          Quên mật khẩu?
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Hoặc</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../../../../../assets/google.png")}
          style={{ ...styles.socialButton.image }}
        />
        <Text style={styles.text}>Đăng nhập với Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../../../../../assets/facebook.png")}
          style={{ ...styles.socialButton.image }}
        />
        <Text style={styles.text}>Đăng nhập với Facebook</Text>
      </TouchableOpacity>
      <View style={styles.flexRow}>
        <Text style={styles.textPrimary}>Chưa có tài khoản?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register" as never, {} as never);
            console.log("đăng kí");
          }}
        >
          <Text style={[styles.textPrimary, styles.registerPrimary]}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
