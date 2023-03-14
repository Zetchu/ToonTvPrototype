import React, { useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Animated,
  Platform,
  ScrollView,
} from "react-native";

import MenuHeader from "../components/Menu/MenuHeader.jsx";
import { Clouds } from "../components";

import {
  dummyData,
  COLORS,
  SIZES,
  FONTS,
  icons,
  images,
  SHADOWS,
} from "../constants";

const About = ({ navigation }) => {
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
      {/* {renderHeader()} */}
      <ScrollView
        contentContainerStyle={{
          backgroundColor: COLORS.FirstBlu,
          // height: SIZES.height,
          color: COLORS.white,
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.secondary,
            marginTop: "2%",
            padding: SIZES.padding,
          }}
        >
          Jeste li čuli? To je fenomenalno… Na Toon Kidsu crtane gledaš stalno!
        </Text>
        <Text
          style={{
            color: COLORS.white,
            marginTop: 5,
            paddingHorizontal: SIZES.padding,
          }}
        >
          Toon Kids je televizijski kanal namijenjen svima koji vole crtane
          filmove. Poznati crtani junaci 24 sata dnevno pripremaju nove avanture
          u kojima će uživati svi klinci bez obzira na njihovu dob. Pripremite
          se na nove pustolovine koje svakodnevnicu ispunjavaju smijehom,
          veseljem i igrom. Udobno se smjestite, gdje god vam se sviđa Toon Kids
          će vas uvesti u svijet gdje zabava ne prestaje, gdje je sve moguće i
          gdje ima mjesta za svakoga!
        </Text>

        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.secondary,
            marginTop: 5,
            padding: SIZES.padding,
          }}
        >
          Toon Kids – od dosade spasi dan bez obzira kojom je bojom obojan!
        </Text>
        <Text
          style={{
            color: COLORS.white,
            marginTop: 5,
            paddingHorizontal: SIZES.padding,
          }}
        >
          Izazovi, pustolovine, zagonetke i puno smijeha čekaju vas na Toon
          Kidsu. Uz svoje najdraže stare i neke nove heroje, imate priliku
          spasiti dan bez obzira kojom je bojom obojan. Široko otvorite oči,
          naćulite uši te zavirite u fantastičan svijet crtanih filmova!
        </Text>

        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.secondary,
            marginTop: "2%",
            padding: SIZES.padding,
          }}
        >
          Zašto gledati Toon Kids?
        </Text>
        <Text
          style={{
            color: COLORS.white,
            marginTop: 5,
            paddingHorizontal: SIZES.padding,
            paddingBottom: 100,
          }}
        >
          Crtani filmovi na Toon Kidsu sinkronizirani su na hrvatski jezik.
          Zabavnog su i edukativnog karaktera te nose pozitivne poruke i emocije
          koje ćemo vrlo rado pamtiti i podijeliti s drugima. Crtani filmovi
          važan su dio djetinjstva i odrastanja, a Toon Kids je samo mali dio na
          velikom putovanju koje očekuje naše najmlađe.
        </Text>
        <Clouds />
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
