import { TextInput, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import styles from "../style/styles";

export default function RegisterScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <TextInput style={styles.input} placeholder={"Họ và tên"}></TextInput>
      <TextInput style={styles.input} placeholder={"Email"}></TextInput>
      <TextInput style={styles.input} placeholder={"Mật khẩu"}></TextInput>
      <TextInput style={styles.input} placeholder={"Số điện thoại"}></TextInput>
      <TextInput style={styles.input} placeholder={"Ngày sinh"}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng ký</Text>
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
        <Text style={styles.text}>Đăng ký với Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={require("../../../../../assets/facebook.png")}
          style={{ ...styles.socialButton.image }}
        />
        <Text style={styles.text}>Đăng ký với Facebook</Text>
      </TouchableOpacity>
      <View style={styles.flexRow}>
        <Text style={styles.textPrimary}>Đã có tài khoản?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login" as never, {} as never);
            console.log("đăng nhập");
          }}
        >
          <Text style={[styles.textPrimary, styles.loginPrimary]}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
