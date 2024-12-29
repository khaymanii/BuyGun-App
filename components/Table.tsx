import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function Table() {
  return (
    <View style={tw`flex-1 p-4 bg-white`}>
      {/* Table Header */}
      <View style={tw`flex-row py-2`}>
        <Text style={tw`w-1/4 text-center font-bold`}>Image</Text>
        <Text style={tw`w-1/4 text-center font-bold`}>Name</Text>
        <Text style={tw`w-1/4 text-center font-bold`}>Price</Text>
        <Text style={tw`w-1/4 text-center font-bold`}>
          <AntDesign name="delete" size={20} color="black" />{" "}
        </Text>
      </View>
      {/* Table Body */}
      <View style={tw`flex-row items-center justify-between py-6 `}>
        <View style={tw`w-1/4 items-center`}>
          <Text>Image</Text>
        </View>

        <Text style={tw`w-1/4 text-center`}>ken</Text>

        <Text style={tw`w-1/4 text-center`}>$400</Text>

        <TouchableOpacity style={tw`w-1/4 items-center`}>
          <AntDesign name="delete" size={20} color="black" />{" "}
        </TouchableOpacity>
      </View>{" "}
      <View style={tw`flex-row items-center justify-between py-6 `}>
        <View style={tw`w-1/4 items-center`}>
          <Text>Image</Text>
        </View>

        <Text style={tw`w-1/4 text-center`}>ken</Text>

        <Text style={tw`w-1/4 text-center`}>$400</Text>

        <TouchableOpacity style={tw`w-1/4 items-center`}>
          <AntDesign name="delete" size={20} color="black" />{" "}
        </TouchableOpacity>
      </View>{" "}
      {/*  <View style={tw`items-center py-6`}>
          <Text style={tw`text-center text-lg`}>Your cart is empty</Text>
        </View>*/}
    </View>
  );
}
