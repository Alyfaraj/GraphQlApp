/* eslint-disable prettier/prettier */
import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Colors, Dimensions } from "../../theme";
import { SkypeIndicator } from "react-native-indicators";

const ActiveLoading = () => {
  return (
    <View style={styles.contanier}>
      <SkypeIndicator
        color={Colors.primary}
        size={Dimensions.DEVICE_HEIGHT * 0.053}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ActiveLoading;
