import { View, Text, ImageBackground } from "react-native";
import React from "react";

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../constants";

export default function Clouds() {
  return (
    <View
      source={icons.clouds}
      style={{
        width: "100%",
        height: SIZES.height / 7,
        bottom: 0,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={icons.clouds}
        style={{
          width: "100%",
          height: "100%",
        }}
      ></ImageBackground>
    </View>
  );
}
