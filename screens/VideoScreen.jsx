import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
  StatusBar,
  Button,
} from "react-native";
import React from "react";
import { useState } from "react";

import { Video, AVPlaybackStatus } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import VideoPlayer from "expo-video-player";

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../constants";

const VideoScreen = ({ navigation, route }) => {
  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [selectedShow, setSelectedShow] = React.useState(null);
  React.useEffect(() => {
    // Gives us which movie is selected
    let { selectedShow } = route.params;
    setSelectedShow(selectedShow);
  }, []);

  const [orientationIsPortait, setOrientation] = useState(true);

  async function changeScreenOrientation() {
    if (orientationIsPortait == false) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    }
  }

  const toggleOrientation = () => {
    setOrientation(!orientationIsPortait);
    changeScreenOrientation();
  };

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

  React.useEffect(() => {
    toggleOrientation2();
  }, []);
  function renderHeaderBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: Platform.OS === "ios" ? 20 : 35,
          paddingHorizontal: SIZES.padding,
          zIndex: 2,
          backgroundColor: COLORS.black,
          height: "5%",
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
          onPress={() => {
            toggleOrientation();
            navigation.goBack();
          }}
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
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      {renderHeaderBar()}
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* {renderHeaderBar()} */}
        <Video
          ref={video}
          style={{
            flex: 1,
            alignSelf: "stretch",
            width: "100%",
            height: 500,
            zIndex: 1,
          }}
          source={selectedShow?.epLink}
          useNativeControls
          resizeMode="contain"
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          isLooping
          isFullScreen
          // header={<Text style={{ color: "#FFF" }}>Custom title</Text>}
        ></Video>
      </View>
    </View>
  );
};

export default VideoScreen;
