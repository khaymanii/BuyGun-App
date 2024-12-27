import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";

export default function cart() {
  return (
    <ScrollView style={tw`bg-white`}>
      <View>
        <Text>cart</Text>
      </View>
    </ScrollView>
  );
}
