import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
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

const RenderLiveHome = () => {
  return (
    // HEADER
    <View>
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
          flexDirection: "column",
          marginTop: SIZES.padding,
        }}
      >
        <TouchableOpacity
          style={{
            ...SHADOWS.dark,
            borderRadius: 40,
          }}
        >
          <ImageBackground
            source={images.liveThumb}
            style={{
              width: SIZES.width * 0.5,
              height: SIZES.width * 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
            imageStyle={{
              borderRadius: 40,
              borderWidth: 12,
              borderColor: COLORS.secondary,
            }}
          >
            <View
              style={{
                width: SIZES.width * 0.5,
                height: SIZES.width * 0.5,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.play_button}
                resizeMode="cover"
                style={{
                  width: "25%",
                  height: "25%",
                  tintColor: COLORS.white,
                }}
              ></Image>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            flex: 1,
            ...FONTS.body3,
            alignItems: "center",
            // alignItems: "flex-start",
            // paddingRight: SIZES.width / 2.5,
            // paddingBottom: SIZES.padding - 15,
          }}
        >
          Gledaj ToonTv uzivo!
        </Text>
      </View>
    </View>
  );
};

export default RenderLiveHome;
