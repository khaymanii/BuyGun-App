import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import tw from "twrnc";

export default function Header() {
  return (
    <View
      style={tw`flex-row justify-between items-center py-6 px-4 border-b bg-white`}
    >
      <Text style={tw`text-xl font-semibold`}>Buygun</Text>
      <View style={tw`flex-row items-center gap-2`}>
        {" "}
        <View style={tw`flex-row items-center gap-1`}>
          {" "}
          <AntDesign name="shoppingcart" size={24} color="black" />
          <View
            style={tw`w-5 h-5 rounded-full bg-red-500 items-center justify-center`}
          >
            2
          </View>
        </View>
        <View style={tw`flex-row items-center gap-1`}>
          {" "}
          <AntDesign name="user" size={24} color="black" />
          <Text>Ken</Text>
        </View>
      </View>
    </View>
  );
}
