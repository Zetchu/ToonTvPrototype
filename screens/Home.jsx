import React, { useRef, useEffect, useState } from "react";
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
  StatusBar,
  SectionList,
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
} from "../constants";

import * as ScreenOrientation from "expo-screen-orientation";

import { RenderLiveHome, RenderCrtici, HomeHeader } from "../components";

const Home = ({ navigation }) => {
  const [orientationIsPortait, setOrientation] = useState(true);

  async function changeScreenOrientation2() {
    if (orientationIsPortait == true) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
    }
  }

  const toggleOrientation2 = () => {
    setOrientation(!orientationIsPortait);
    changeScreenOrientation2();
  };

  useEffect(() => {
    // Gives us which movie is selected
    toggleOrientation2();
  }, []);
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#0062B8", "#00C9FF"]}
      start={[0.1, 0.2]}
      style={{ height: "100%" }}
    >
      <SafeAreaView
        style={{
          // backgroundColor: COLORS.primary,
          marginTop: Platform.OS === "ios" ? 20 : 40,
        }}
      >
        <HomeHeader navigation={navigation} />

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            paddingBottom: 100,
            flexGrow: 1,
            // width: SIZES.width,
          }}
        >
          <RenderLiveHome />

          <RenderCrtici navigation={navigation} />
          {/* <View>
            <RenderLiveHome />
          </View>
          
          {/* <View>
            <RenderLiveHome />
          </View>
          <View>
            <RenderLiveHome />
          </View>
          <View>
            <RenderLiveHome />
          </View>
          <View>
            <RenderLiveHome />
          </View>  */}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
