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

const Profil = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "85%",
        height: "10%",
        marginTop: "10%",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Image
          source={images.liveThumb}
          style={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius + 20,
            borderWidth: 2,
            borderColor: COLORS.white,
          }}
        ></Image>
      </View>
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
            ...FONTS.body1,
            color: COLORS.white,
            paddingHorizontal: 15,
          }}
        >
          Marko
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => console.log("NAPRAVI REMOVE")}>
          <Image
            source={icons.remove}
            style={{
              width: 35,
              height: 35,
              tintColor: COLORS.white,
            }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: SIZES.padding,
          }}
          onPress={() => console.log("NAPRAVI EDIT")}
        >
          <Image
            source={icons.edit}
            style={{
              width: 35,
              height: 35,
              tintColor: COLORS.white,
            }}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profil;
