import React from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Dimensions } from "../../theme";

const JobItem = ({
  onPress,
  title,
  id,
  company,
  locationNames,
  commitment,
  tags
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.contianer}
    >
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.commitment}>
        {commitment.title}
      </Text>
      <Text style={styles.location}>
        {company.name}-{locationNames}
      </Text>
      <FlatList
        data={tags}
        numColumns={4}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <Text style={styles.tag}>
            {item.name}
          </Text>}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contianer: {
    width: Dimensions.DEVICE_WIDTH * 0.94,
    borderRadius: 10,
    elevation: 0.3,
    shadowOpacity: 0.08,
    paddingVertical: Dimensions.DEVICE_HEIGHT * 0.01,
    backgroundColor: Colors.white,
    paddingHorizontal: Dimensions.DEVICE_WIDTH * 0.03,
    marginTop: 16,
    alignSelf: "center"
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.primary,
    marginVertical: 5,
    marginStart: 4
  },
  commitment: {
    //  backgroundColor: Colors.semiGray,
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignSelf: "flex-start",
    // opacity: 0.6,
    marginBottom: 5
  },
  tag: {
    backgroundColor: Colors.semiGray,
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignSelf: "flex-start",
    opacity: 0.6,
    marginTop: 8,
    fontSize: 14,
    marginHorizontal: 4
  },
  location: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.green,
    marginBottom: 5,
    marginStart: 4
  }
});

export default JobItem;
