import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import React from "react";
import Header from "@/components/Header";
import ShopCard from "@/components/ShopCard";
import { products } from "@/data/Data";
import Footer from "@/components/Footer";

export default function shop() {
  return (
    <>
      <ScrollView style={tw`bg-white`}>
        <Header />
        <View
          style={tw`bg-black w-full h-64 items-center justify-center mb-14`}
        >
          <Text style={tw`text-white font-semibold text-3xl`}>Shop</Text>
        </View>{" "}
        <View style={tw``}>
          {products.map((product) => (
            <ShopCard key={product.id} product={product} />
          ))}{" "}
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}
