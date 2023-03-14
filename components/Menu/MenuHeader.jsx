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

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../../constants";

const MenuHeader = ({ navigation }) => {
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
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.FirstBlu,
        height: SIZES.height / 9,
        // marginTop: "5%",
        marginTop: Platform.OS === "ios" ? 5 : 25,
      }}
    >
      {/* Profile */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          flex: 1,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.closeMenu}
          style={{
            width: 30,
            height: 30,
          }}
        ></Image>
      </TouchableOpacity>

      {/* Logo*/}

      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          flex: 5,
          marginRight: "15%",
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
    </View>
  );
};

export default MenuHeader;
