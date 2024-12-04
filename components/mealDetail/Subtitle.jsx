import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ label }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});

export default Subtitle;
