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

import { SearchBar } from "../components";
import { LinearGradient } from "expo-linear-gradient";

import {
  dummyData,
  listaCrtanih,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../constants";
import React from "react";
import { useState } from "react";

const Search = ({ navigation }) => {
  const [showData, setShowData] = useState(dummyData.listaCrtanih);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setShowData(dummyData.listaCrtanih);
    }

    const filteredData = dummyData.listaCrtanih.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setShowData(dummyData.listaCrtanih);
    } else {
      setShowData(filteredData);
    }
  };
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#0062B8", "#00C9FF"]}
      start={[0.1, 0.2]}
      style={{ height: "100%" }}
    >
      <View>
        {/* LIST */}
        <FlatList
          contentContainerStyle={{
            alignSelf: "flex-start",
            width: "100%",
            marginTop: 15,
          }}
          //
          ListHeaderComponent={<SearchBar onSearch={handleSearch} />}
          numColumns={2}
          data={showData}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("Details", { selectedShow: item })
                }
              >
                <View
                  style={{
                    //   marginLeft: index == 0 ? SIZES.padding : 20,
                    flex: 3,
                    alignItems: "center",
                    marginTop: "5%",
                  }}
                >
                  {/* Thumb */}
                  <Image
                    source={item.thumbnail}
                    resizeMode="cover"
                    style={{
                      width: SIZES.width / 3,
                      height: SIZES.width / 3 + 60,
                      borderRadius: 20,
                      borderWidth: 7,
                      borderColor: COLORS.secondary,
                      ...SHADOWS.dark,
                    }}
                  />
                  {/* IME */}
                  <Text
                    style={{
                      marginTop: SIZES.base,
                      color: COLORS.white,
                      ...FONTS.body3,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        ></FlatList>
      </View>
    </LinearGradient>
  );
};

export default Search;
