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
import { SafeAreaView } from "react-native-safe-area-context";

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../../constants";

const RenderEpisodes = ({ navigation, route }) => {
  const [selectedShow, setSelectedShow] = React.useState(null);

  React.useEffect(() => {
    // Gives us which movie is selected
    let { selectedShow } = route.params;
    setSelectedShow(selectedShow);
  }, []);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
          marginTop: SIZES.base,
          paddingBottom: 2,
        }}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.secondary,
            ...FONTS.h2,
          }}
        >
          Izabari episodu
        </Text>
        <TouchableOpacity>
          <Image
            source={icons.heart}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.secondary,
            }}
          ></Image>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
          marginTop: SIZES.base,
        }}
      >
        <Text
          style={{
            flex: 1,
            color: COLORS.secondary,
            ...FONTS.body2,
          }}
        >
          {selectedShow?.details?.season.seasonNo}
        </Text>

        <Image
          source={icons.arrowNext}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.secondary,
          }}
        ></Image>
      </View>

      <View
        style={{
          // flex: 1,

          alignItems: "center",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        {selectedShow?.details?.season.episodes.map((show) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("VideoScreen", { selectedShow: show })
            }
            style={{
              // width: "35%",
              // height: "35%",
              borderRadius: SIZES.h2,
            }}
            key={show.id}
          >
            <View
              style={{
                flexDirection: "row",
                // alignItems: "center",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                width: "90%",
                height: SIZES.height / 6,

                backgroundColor: COLORS.lightblue,
                borderRadius: SIZES.h2,
                margin: SIZES.padding - 5,
                ...SHADOWS.dark,
              }}
            >
              <Image
                source={show.epThumb}
                resizeMode="cover"
                style={{
                  width: "30%",
                  height: "100%",
                  borderRadius: SIZES.h2,
                }}
              />

              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,

                      flex: 4,
                      padding: 5,
                      ...FONTS.h3,
                    }}
                  >
                    {show.epTitle}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.white,

                      flex: 2,
                      padding: 5,
                      ...FONTS.h3,
                    }}
                  >
                    {show.epDur}
                  </Text>
                </View>
                <View
                  style={{
                    color: COLORS.white,
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: SIZES.width * 0.025,
                      marginTop: 5,
                      width: "100%",
                      padding: 5,
                      flex: 1,
                      flexShrink: 1,
                      ...FONTS.body5,
                    }}
                  >
                    {show.epDesc}
                  </Text>
                </View>
                {/* <Text
                  style={{
                    color: COLORS.white,
                    fontSize: SIZES.width * 0.03,
                    marginTop: 15,
                    width: "10%",
                  }}
                >
                  {show.epDesc}
                </Text> */}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RenderEpisodes;
