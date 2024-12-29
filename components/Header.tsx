import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import tw from "twrnc";

export default function Header() {
  return (
    <View
      style={tw`flex-row justify-between items-center py-4 px-4 border-b bg-white`}
    >
      <Text style={tw`text-xl font-semibold`}>Buygun</Text>

      <View style={tw`flex-row items-center`}>
        <View style={tw`relative`}>
          <AntDesign name="shoppingcart" size={24} color="black" />
          <View
            style={tw`absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 items-center justify-center`}
          >
            <Text style={tw`text-white text-xs`}>2</Text>
          </View>
        </View>

        <View style={tw`flex-row items-center ml-4`}>
          <AntDesign name="user" size={24} color="black" />
          <Text style={tw`ml-1`}>Ken</Text>
        </View>
      </View>
    </View>
  );
}
