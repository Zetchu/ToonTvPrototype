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
import RenderEpisodes from "../components/Details/RenderEpisodes";
import DetailsHeaderSection from "../components/Details/DetailsHeaderSection";

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../constants";

const Details = ({ navigation, route }) => {
  return (
    <View
      contentContainerStyle={{
        flex: 1,
        backgroundColor: COLORS.FirstBlu,
      }}
      style={{
        backgroundColor: COLORS.FirstBlu,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        {/* {renderHeaderSection()} */}
        <DetailsHeaderSection navigation={navigation} route={route} />
        {/* {renderEpisodes()} */}
        <RenderEpisodes navigation={navigation} route={route} />
      </ScrollView>
    </View>
  );
};

export default Details;
