import React from "react";
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
} from "react-native";

import DetailsHeader from "../Details/DetailsHeader.jsx";

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../../constants";

const DetailsHeaderSection = ({ navigation, route }) => {
  const [selectedShow, setSelectedShow] = React.useState(null);

  React.useEffect(() => {
    // Gives us which movie is selected
    let { selectedShow } = route.params;
    setSelectedShow(selectedShow);
  }, []);
  return (
    <ImageBackground
      source={selectedShow?.details?.image}
      resizeMode="cover"
      style={{
        width: "100%",
        height: SIZES.height / 5.25,

        //   height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <DetailsHeader navigation={navigation} />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: COLORS.transparentWhite,
            }}
          >
            <Image
              source={icons.play_button}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                tintColor: COLORS.white,
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DetailsHeaderSection;
