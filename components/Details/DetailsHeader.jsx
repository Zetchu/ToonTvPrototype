import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import React from "react";
import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../../constants";

const DetailsHeader = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: Platform.OS === "ios" ? 50 : 35,
        paddingHorizontal: SIZES.padding,
      }}
    >
      {/* BACK */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          borderRadius: 20,
          backgroundColor: COLORS.transparentWhite,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.arrowPrev}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.white,
          }}
        />
      </TouchableOpacity>

      {/* SHARE */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          borderRadius: 20,
          backgroundColor: COLORS.transparentWhite,
        }}
        onPress={() => console.log("CAST TO TV")}
      >
        <Image
          source={icons.cast}
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.white,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DetailsHeader;
