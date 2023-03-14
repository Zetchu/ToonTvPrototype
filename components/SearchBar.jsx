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
  TextInput,
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
} from "../constants";
import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <View style={{ marginTop: SIZES.font, alignItems: "center" }}>
      <View
        style={{
          width: "90%",
          height: 50,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          justifyContent: "center",
          marginTop: 20,
          paddingVertical: SIZES.small,
        }}
      >
        <Image
          source={icons.search}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginRight: SIZES.base }}
        />
        <TextInput
          placeholder="Nadi svoj crtic"
          style={{ flex: 1 }}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

export default SearchBar;
