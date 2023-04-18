import { Flex } from "@ant-design/react-native";
import { Formik } from "formik";
import React from "react";
import {
  AppRegistry,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../../../constants/Colors";
import RoutesName from "../../../../constants/RoutesName";

export default function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 20,
            color: Colors.primary,
            fontWeight: "bold",
          }}
        >
          Thông tin cá nhân
        </Text>

        <TouchableOpacity>
          <Text
            onPress={() => {
              navigation.navigate(
                RoutesName.EDIT_PROFILE as never,
                {} as never
              );
            }}
            style={{
              textAlignVertical: "bottom",
              includeFontPadding: false,
              color: Colors.primary,
            }}
          >
            Chỉnh sửa
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ color: Colors.text, fontSize: 16 }}>Họ tên:</Text>
          <Text style={{ color: Colors.secondary, fontSize: 16 }}>admin</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ width: "40%", fontSize: 16 }}>Email:</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode={"tail"}
            style={{ width: "60%", fontSize: 16, textAlign: "right" }}
          >
            admin@email.com
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>Số điện thoại:</Text>
          <Text style={{ fontSize: 16 }}>0953315682</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>Ngày sinh:</Text>
          <Text style={{ fontSize: 16 }}>19/11/2001</Text>
        </View>
      </View>

      <Text
        style={{
          width: "90%",
          textAlign: "left",
          fontSize: 20,
          color: Colors.primary,
          fontWeight: "bold",
          marginTop: 30,
          marginBottom: 10,
        }}
      >
        Tài khoản liên kết
      </Text>
      <View
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 10,
            }}
          >
            <Image
              source={require("../../../../../assets/google.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ color: Colors.text, fontSize: 16 }}>
              Tài khoản Google
            </Text>
          </View>
          <Text
            style={{
              color: Colors.text,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Liên kết
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              gap: 10,
            }}
          >
            <Image
              source={require("../../../../../assets/facebook.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ color: Colors.text, fontSize: 16 }}>
              Tài khoản Facebook
            </Text>
          </View>
          <Text
            style={{
              color: Colors.text,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Liên kết
          </Text>
        </View>
      </View>
    </View>
  );
}
