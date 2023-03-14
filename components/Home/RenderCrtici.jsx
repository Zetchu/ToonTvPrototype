import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../../constants";
import React, { useRef, useEffect } from "react";

const RenderCrtici = ({ navigation }) => {
  return (
    <View
      style={
        {
          // marginTop: SIZES.padding,
        }
      }
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.white,
            ...FONTS.body2,
          }}
        >
          Nasi crtani
        </Text>
      </View>
      {/*
        <Image
          source={icons.arrowNext}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.white,
          }}
        ></Image>
      </View> */}

      {/* LIST */}

      <FlatList
        horizontal={true}
        scrollEnabled={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
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
                  marginLeft: index == 0 ? SIZES.padding : 20,
                  // marginRight:
                  //   index == dummyData.listaCrtanih - 1 ? SIZES.padding : 0,
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
                      height: SIZES.width / 3 + 30,
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

      {/* <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.white,
            ...FONTS.body1,
            marginTop: SIZES.padding,
          }}
        >
          Svi crtici
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Image
            source={icons.arrowNext}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
              marginTop: SIZES.padding,
            }}
          ></Image>
        </TouchableOpacity>
      </View> */}
      {/* LIST 2 */}
      {/* <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        data={dummyData.listaCrtanih}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback>
              <View
                style={{
                  marginLeft: index == 0 ? SIZES.padding : 20,
                  marginRight:
                    index == dummyData.listaCrtanih - 1 ? SIZES.padding : 0,
                }}
              >
                {/* Thumb */}
      {/* <View
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
      {/* <Text
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
      ></FlatList>  */}
    </View>
  );
};

export default RenderCrtici;
