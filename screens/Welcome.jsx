import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
  Platform,
  TextInput,
} from "react-native";
import { Clouds } from "../components";

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../constants";
const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: COLORS.cyan,
      }}
      style={{
        backgroundColor: COLORS.cyan,
        height: SIZES.height,
      }}
    >
      <View style={{}}>
        {/* SLIKA I LOGO */}
        <ImageBackground
          source={images.welcomeBG}
          style={{
            width: "100%",
            height: SIZES.width / 1.25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.logo}
            style={{
              width: "55%",
              height: "40%",
            }}
          ></Image>
        </ImageBackground>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 15,
          }}
        >
          <Text
            style={{
              ...FONTS.body1,
              color: COLORS.white,
            }}
          >
            Dobrodosli na ToonTV
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 500,
          }}
        >
          <View
            style={{
              width: "90%",
              height: SIZES.height / 17,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightblue,
              marginTop: SIZES.base,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: SIZES.font,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text
                style={{
                  ...FONTS.body1,
                  color: COLORS.white,
                }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "90%",
              height: SIZES.height / 17,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightblue,
              marginTop: SIZES.font,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: SIZES.font,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text
                style={{
                  ...FONTS.body1,
                  color: COLORS.white,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Clouds />
    </SafeAreaView>
  );
};

export default Welcome;
