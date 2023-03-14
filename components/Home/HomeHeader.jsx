import React, { useEffect, useRef } from "react";

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../../constants";

const HomeHeader = ({ navigation }) => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const transY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // withTiming or withSpring
    //Loop
    Animated.loop(
      Animated.sequence([
        Animated.timing(transY, {
          toValue: 5,
          duration: 1250,
          useNativeDriver: true,
        }),
        Animated.timing(transY, {
          toValue: 0,
          duration: 1250,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingHorizontal: SIZES.padding,
        // padding: 5,
      }}
    >
      {/* Logo*/}

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => console.log("Screen Mirror")}
      >
        <Animated.Image
          source={icons.logo}
          style={[
            {
              width: SIZES.width / 5.2,
              height: SIZES.width / 8.6,
              // tintColor:COLORS.primary
            },
            {
              transform: [{ translateY: transY }],
            },
          ]}
        />
      </TouchableOpacity>
      {/* Profile */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          source={icons.user}
          style={{
            width: SIZES.width / 10,
            height: SIZES.width / 10,
            borderRadius: 40,
            borderWidth: 3,
            borderColor: COLORS.white,
          }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
