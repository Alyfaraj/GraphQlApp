import React from "react";
import { View, Text } from "react-native";
import { Colors } from "../../theme";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        elevation: 1,
        shadowOpacity: 0.6,
        height: 80,
        justifyContent: "center",
        paddingTop: 30
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          color: Colors.primary,
          fontSize: 22,
          fontWeight: "700",
          fontStyle: "italic"
        }}
      >
        Jobs
      </Text>
    </View>
  );
};

export default Header;
