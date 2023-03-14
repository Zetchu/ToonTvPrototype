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

const AddProfile = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "88%",
        height: "10%",
        marginTop: "12%",
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
          source={icons.add}
          style={{
            width: 60,
            height: 60,
            // borderRadius: SIZES.radius + 20,
            // borderWidth: 2,
            // borderColor: COLORS.white,
            tintColor: COLORS.white,
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
            ...FONTS.body2,
            color: COLORS.white,
            paddingHorizontal: 15,
          }}
        >
          Dodaj novi profil
        </Text>
      </View>

      {/* <View
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
      </View> */}
    </View>
  );
};

export default AddProfile;
