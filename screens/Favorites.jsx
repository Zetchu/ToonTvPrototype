import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "../components";

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
const Favorites = ({ navigation }) => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#0062B8", "#00C9FF"]}
      start={[0.1, 0.2]}
      style={{ height: "100%" }}
    >
      <SafeAreaView
        contentContainerStyle={{
          flex: 1,
          marginTop: Platform.OS === "ios" ? 40 : 40,
        }}
        style={
          {
            //   backgroundColor: COLORS.FirstBlu,
            //   height: SIZES.height,
            //   flex: 1,
          }
        }
      >
        <HomeHeader navigation={navigation} />
        {/* {renderHeader()} */}
        <View
          style={{
            // height: SIZES.height,

            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.body1,
              color: COLORS.white,
              padding: SIZES.padding,
            }}
          >
            Favorites
          </Text>

          <View
            style={{
              width: SIZES.width * 0.75,
              height: 15,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.radius,
            }}
          ></View>
        </View>
        <FlatList
          vartical
          numColumns={2}
          contentContainerStyle={{
            alignSelf: "flex-start",
            width: "100%",
            marginTop: 15,
          }}
          data={dummyData.listaCrtanih}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("Details", {
                    selectedShow: item,
                  })
                }
                style={{
                  ...SHADOWS.dark,
                }}
              >
                <View
                  style={{
                    flex: 3,
                    alignItems: "center",
                    marginTop: "5%",
                  }}
                >
                  {/* Thumb */}
                  <View
                    style={{
                      ...SHADOWS.dark,
                      borderRadius: 20,
                    }}
                  >
                    <Image
                      source={item.thumbnail}
                      resizeMode="cover"
                      style={{
                        width: SIZES.width / 3,
                        height: SIZES.width / 3 + 60,
                        borderRadius: 20,
                        borderWidth: 7,
                        borderColor: COLORS.secondary,
                      }}
                    />
                  </View>
                  {/* IME */}
                  <Text
                    style={{
                      marginTop: SIZES.base,
                      color: COLORS.white,
                      ...FONTS.body3,
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        ></FlatList>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Favorites;
