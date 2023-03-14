import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  Platform,
} from "react-native";
import React, { useRef, useEffect } from "react";
import MenuHeader from "../components/Menu/MenuHeader.jsx";
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

const Parents = ({ navigation }) => {
  return (
    <SafeAreaView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: COLORS.FirstBlu,
      }}
      style={{
        backgroundColor: COLORS.FirstBlu,
        height: SIZES.height,
        flex: 1,
      }}
    >
      <MenuHeader navigation={navigation} />
      <View
        style={{
          backgroundColor: COLORS.FirstBlu,
          // height: SIZES.height,
          color: COLORS.white,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab repellat
          provident unde fugit dignissimos magnam repellendus, tempore
          blanditiis ad impedit temporibus esse laboriosam dolorem repudiandae
          non, at culpa harum! Corporis?
        </Text>
      </View>

      <Clouds />
    </SafeAreaView>
  );
};

export default Parents;
