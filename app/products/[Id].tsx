import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import React from "react";
import { Stack } from "expo-router";

export default function index() {
  return (
    <ScrollView style={tw`bg-white`}>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <Text>index</Text>
      </View>
    </ScrollView>
  );
}
