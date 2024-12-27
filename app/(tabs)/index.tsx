import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";

export default function index() {
  return (
    <ScrollView style={tw`bg-white`}>
      {" "}
      <View>
        <Text>index</Text>
      </View>
    </ScrollView>
  );
}
