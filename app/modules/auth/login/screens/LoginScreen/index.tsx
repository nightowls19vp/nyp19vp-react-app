import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../../../../constants/Colors";
import styles from "./styles/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { login } from "./services/login.service";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email không hợp lệ")
        .required("Vui lòng nhập email"),
    password: Yup.string()
        .required("Vui lòng nhập mật khẩu"),
});

export default function LoginScreen({ navigation }: { navigation: any }) {
    const [hidePassword, setHidePassword] = React.useState(true);
    const [showIcon, setShowIcon] = React.useState(false);

    // const handleLoginReq(statusCode: number) {
    //   if (statusCode == 200) {
    //     return 0;
    //   }
    // }

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
                login({ username: values.email, password: values.password });
            }}
        >
            {({
                values,
                errors,
                touched,
                setFieldTouched,
                setFieldValue,
                isValid,
                handleChange,
                handleSubmit,
            }) => (
                <View style={styles.container}>
                    <Text style={styles.title}>Đăng nhập</Text>
                    <View style={[styles.inputContainer]}>
                        <TextInput
                            onChangeText={(value) => setFieldValue("email", value)}
                            onBlur={() => setFieldTouched("email")}
                            style={{ flex: 1 }}
                            placeholder={"Email"}
                            value={values.email}
                        />

                        {values.email && (
                            <Icon
                                onPress={() => setFieldValue("email", "")}
                                name={"times-circle"}
                                style={styles.inputIcon}
                            ></Icon>
                        )}
                    </View>
                    {touched.email && errors.email && (
                        <Text style={styles.error}>{errors.email}</Text>
                    )}

                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={(value) => setFieldValue("password", value)}
                            onBlur={() => setFieldTouched("password")}
                            secureTextEntry={hidePassword}
                            placeholder={"Mật khẩu"}
                            style={{ flex: 1 }}
                            value={values.password}
                        />
                        {values.password && (
                            <Icon
                                onPress={() => setFieldValue("password", "")}
                                name={"times-circle"}
                                style={[styles.inputIcon, { marginRight: 10 }]}
                            />
                        )}
                        <Icon
                            onPress={() => setHidePassword(!hidePassword)}
                            name={hidePassword ? "eye-slash" : "eye"}
                            style={styles.inputIcon}
                        ></Icon>
                    </View>
                    {touched.password && errors.password && (
                        <Text style={[styles.error]}>{errors.password}</Text>
                    )}

                    <View
                        style={{
                            width: "80%",
                        }}
                    >
                        <Text style={[styles.textPrimary, { textAlign: "right" }]}>
                            Quên mật khẩu?
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            console.log(values.email);
                            login({ username: values.email, password: values.password }).then();
                        }}

                        disabled={!isValid}
                        style={[
                            styles.button,
                            { backgroundColor: isValid ? Colors.primary : Colors.disabled },
                        ]}
                    >
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </TouchableOpacity>

                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>Hoặc</Text>
                        <View style={styles.divider} />
                    </View>

                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            source={require("../../../../../../assets/google.png")}
                            style={{ ...styles.socialButton.image }}
                        />
                        <Text style={styles.text}>Tiếp tục với Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            source={require("../../../../../../assets/facebook.png")}
                            style={{ ...styles.socialButton.image }}
                        />
                        <Text style={styles.text}>Tiếp tục với Facebook</Text>
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
            )}
        </Formik>
    );
}
