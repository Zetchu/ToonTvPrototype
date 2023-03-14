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

const Menu = ({ navigation }) => {
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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: SIZES.height / 6,

          backgroundColor: COLORS.FirstBlu,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              padding: SIZES.padding,
            }}
          >
            Profil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              padding: SIZES.padding,
            }}
          >
            Postavke
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Parents")}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              padding: SIZES.padding,
            }}
          >
            Kutak za roditelje
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              padding: SIZES.padding,
            }}
          >
            O nama
          </Text>
        </TouchableOpacity>
      </View>
      <Clouds />
    </SafeAreaView>
  );
};

export default Menu;
