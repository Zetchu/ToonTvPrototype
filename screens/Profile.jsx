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

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../constants";
import React, { useRef, useEffect } from "react";
import { render } from "react-dom";
import AddProfile from "../components/Menu/AddProfile.jsx";
import Profil from "../components/Menu/Profil.jsx";
import MenuHeader from "../components/Menu/MenuHeader.jsx";
import { Clouds } from "../components";

const Profile = ({ navigation }) => {
  function renderOstalo() {
    return (
      <View
        style={{
          backgroundColor: COLORS.FirstBlu,
          // height: SIZES.height,

          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              ...FONTS.body1,
              color: COLORS.white,
              padding: SIZES.padding,
            }}
          >
            Profile
          </Text>
        </View>
        <View
          style={{
            width: SIZES.width * 0.75,
            height: 15,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
          }}
        ></View>
        <Profil />
        <AddProfile />
        {/* {renderDodaj()} */}
      </View>
    );
  }

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
      <View>{renderOstalo()}</View>

      <Clouds />
    </SafeAreaView>
  );
};

export default Profile;
