import { View, Text, ScrollView, Image, Pressable } from "react-native";
import tw from "twrnc";
import React from "react";
import { Stack } from "expo-router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function index() {
  return (
    <>
      <Header />
      <ScrollView style={tw`bg-white`}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={tw`bg-black w-full h-64 items-center justify-center `}>
          <Text style={tw`text-white font-semibold text-3xl`}>productName</Text>
        </View>
        <View style={tw`items-center`}>
          <Image
            source={require("@/assets/images/ak1bg.png")}
            resizeMode="contain"
            style={tw`w-full object-fit`}
          />
        </View>
        <View style={tw`mx-4`}>
          <Text style={tw`text-left text-3xl font-semibold mb-2`}>
            productName
          </Text>
          <Text style={tw`text-left text-xl font-semibold mb-4`}>$0.00</Text>
          <View
            style={tw`flex-row flex-wrap justify-between items-center mb-4`}
          >
            {" "}
            <Text style={tw`text-left text-xl font-semibold  mb-2`}>
              Brand: <Text style={tw`text-lg font-normal`}>Winchester</Text>
            </Text>
            <Text style={tw`text-left text-xl font-semibold mb-2`}>
              Category: <Text style={tw`text-lg font-normal`}>Winchester</Text>
            </Text>{" "}
            <Text style={tw`text-left text-xl font-semibold mb-2`}>
              Caliber: <Text style={tw`text-lg font-normal`}>Winchester</Text>
            </Text>{" "}
            <Text style={tw`text-left text-xl font-semibold mb-2`}>
              Weight: <Text style={tw`text-lg font-normal`}>Winchester</Text>
            </Text>
            <Text style={tw`text-left text-xl font-semibold mb-2`}>
              Quantity in Stock:{" "}
              <Text style={tw`text-lg font-normal`}>Winchester</Text>
            </Text>{" "}
          </View>
          <Text style={tw`text-lg text-gray-500 mb-8`}>Description</Text>
          <Pressable
            style={tw`w-full p-2 bg-black text-white text-xl rounded-md  text-center`}
          >
            Add to Cart
          </Pressable>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}
