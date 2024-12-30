import { View, Text, ScrollView, Image, Pressable } from "react-native";
import tw from "twrnc";
import React from "react";
import { Stack } from "expo-router";
import Footer from "@/components/Footer";
import { products } from "@/data/Data";
import { useLocalSearchParams } from "expo-router";

export default function index() {
  const { id } = useLocalSearchParams(); // Retrieve 'id' from the URL
  const product = products.find(
    (item) => item.id === parseInt(Array.isArray(id) ? id[0] : id || "0")
  );

  if (!product) {
    return (
      <View style={tw`p-4 flex-1 items-center justify-center`}>
        <Text style={tw`text-red-500`}>Product not found!</Text>
      </View>
    );
  }
  return (
    <ScrollView style={tw`bg-white`}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={tw`bg-black w-full h-64 items-center justify-center `}>
        <Text style={tw`text-white font-semibold text-3xl`}>
          {product.productName}
        </Text>
      </View>
      <View style={tw`items-center`}>
        <Image source={product.image} resizeMode="contain" style={tw`w-full`} />
      </View>
      <View style={tw`mx-4`}>
        <Text style={tw`text-left text-3xl font-semibold mb-2`}>
          {product.productName}
        </Text>
        <Text style={tw`text-left text-xl font-semibold mb-4`}>
          ${product.price.toFixed(2)}
        </Text>
        <View style={tw`flex-row flex-wrap justify-between items-center mb-4`}>
          {" "}
          <Text style={tw`text-left text-xl font-semibold  mb-2`}>
            Brand: <Text style={tw`text-lg font-normal`}>{product.brand}</Text>
          </Text>
          <Text style={tw`text-left text-xl font-semibold mb-2`}>
            Category:{" "}
            <Text style={tw`text-lg font-normal`}>{product.category}</Text>
          </Text>{" "}
          <Text style={tw`text-left text-xl font-semibold mb-2`}>
            Caliber:{" "}
            <Text style={tw`text-lg font-normal`}>{product.caliber}</Text>
          </Text>{" "}
          <Text style={tw`text-left text-xl font-semibold mb-2`}>
            Weight:{" "}
            <Text style={tw`text-lg font-normal`}>{product.weight}</Text>
          </Text>
          <Text style={tw`text-left text-xl font-semibold mb-2`}>
            Quantity in Stock:{" "}
            <Text style={tw`text-lg font-normal`}>{product.quantity}</Text>
          </Text>{" "}
        </View>
        <Text style={tw`text-lg text-gray-500 mb-8`}>
          {product.description}
        </Text>
        <Pressable
          style={tw`w-full p-2 bg-black text-white text-xl rounded-md  text-center`}
        >
          Add to Cart
        </Pressable>
      </View>
      <Footer />
    </ScrollView>
  );
}
