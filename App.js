import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Navigator from "./src/navigation";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navigator />
    </View>
  );
};

export default App;
