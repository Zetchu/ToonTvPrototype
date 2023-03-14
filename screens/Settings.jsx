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
import MenuHeader from "../components/Menu/MenuHeader.jsx";
import { Clouds } from "../components";

const Settings = ({ navigation }) => {
  const transY = useRef(new Animated.Value(0)).current;

  function renderDodaj() {
    return (
      <View
        style={{
          flex: 1,
          width: "90%",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            height: "10%",
            marginTop: "15%",
          }}
        >
          {/* PRVA IKONA */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Image
              source={icons.music}
              style={{
                width: SIZES.width / 15,
                height: SIZES.width / 15,
                tintColor: COLORS.white,
              }}
            ></Image>
          </View>
          {/* TEXT */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              marginRight: "20%",
              flex: 4,
            }}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                paddingHorizontal: 15,
              }}
            >
              Pozadinska glazba
            </Text>
          </View>
          {/* OSTALE IKONE */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => console.log("NAPRAVI onPress")}>
              <Image
                source={icons.check}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: COLORS.white,
                }}
              ></Image>
            </TouchableOpacity>
            {/* END PRVOG */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            height: "10%",
            marginTop: "15%",
          }}
        >
          {/* DRUGA IKONA */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            <Image
              source={icons.sound}
              style={{
                width: SIZES.width / 15,
                height: SIZES.width / 15,
                tintColor: COLORS.white,
              }}
            ></Image>
          </View>
          {/* TEXT */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              marginRight: "20%",
              flex: 4,
            }}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                paddingHorizontal: 15,
              }}
            >
              Zvukovi sučelja
            </Text>
          </View>
          {/* OSTALE IKONE */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={() => console.log("NAPRAVI onPress")}>
              <Image
                source={icons.check}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: COLORS.white,
                }}
              ></Image>
            </TouchableOpacity>
            {/* END Drugog */}
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              paddingHorizontal: SIZES.padding,
              alignItems: "center",
              marginTop: "15%",
            }}
          >
            <Text
              style={{
                flex: 1,
                color: COLORS.white,
                ...FONTS.body2,
              }}
            >
              Zastita privatnosti
            </Text>

            <Image
              source={icons.arrowNext}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white,
              }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

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
            Settings
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

        {renderDodaj()}
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

export default Settings;
