import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { Header, JobItem } from "../components/common";
import ActiveLoading from "../components/common/ActiveLoading";
import { GET_HOME_DATA } from "../quaries/home";
import { Colors, Dimensions } from "../theme";

const Home = ({ navigation }) => {
  const { data, error, loading } = useQuery(GET_HOME_DATA);

  if (loading) return <ActiveLoading />;
  if (data) console.log(data.jobs[0]);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <Header />
      <FlatList
        data={data.jobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <JobItem
            onPress={() => navigation.navigate("JopDetailes", { job: item })}
            {...item}
          />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "500"
  },
  summary: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    fontWeight: "400",
    maxWidth: Dimensions.DEVICE_WIDTH * 0.85,
    alignSelf: "center",
    opacity: 0.7
  },
  ships: {
    marginStart: Dimensions.DEVICE_WIDTH * 0.05,
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16
  }
});

export default Home;
