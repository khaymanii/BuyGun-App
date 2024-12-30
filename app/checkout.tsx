import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import tw from "twrnc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { useRouter } from "expo-router";

export default function checkout() {
  const router = useRouter();
  return (
    <>
      <ScrollView style={tw`bg-white`}>
        <Header />
        <View
          style={tw`bg-black w-full h-64 items-center justify-center mb-14`}
        >
          <Text style={tw`text-white font-semibold text-3xl`}>Checkout</Text>
        </View>
        <View style={tw`mx-4 mb-6`}>
          <TextInput
            style={tw` p-2 border outline-none rounded-lg w-full mb-4`}
            placeholder="Enter your name"
          />
          <TextInput
            style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
            placeholder="Enter your email "
          />
          <TextInput
            style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
            placeholder="Phone number"
          />
          <TextInput
            style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
            placeholder="Street address"
          />{" "}
          <TextInput
            style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
            placeholder="City"
          />
          <TextInput
            style={tw`p-2 border outline-none rounded-lg w-full mb-4`}
            placeholder="Country"
          />
          <Pressable
            style={tw`w-full p-2 bg-black text-white text-xl rounded-lg text-center`}
          >
            Place Order Now{" "}
          </Pressable>
        </View>
        <View
          style={tw`h-72 bg-black text-white rounded-lg p-4 pt-5 tracking-wider mx-4`}
        >
          <View style={tw`flex-row justify-between items-center mb-2`}>
            {" "}
            <Text style={tw`text-xl  tracking-wider text-white`}>
              Subtotal:
            </Text>
            <Text style={tw`text-xl  tracking-wider text-white`}>$0.00</Text>
          </View>
          <View style={tw`flex-row justify-between items-center mb-6`}>
            {" "}
            <Text style={tw`text-xl  tracking-wider text-white`}>Shipping</Text>
            <Text style={tw`text-xl  tracking-wider text-white`}>$0.00</Text>
          </View>
          <View style={tw`flex-row justify-between items-center mb-20`}>
            {" "}
            <Text style={tw`text-2xl font-semibold tracking-wider text-white`}>
              Total:
            </Text>
            <Text style={tw`text-2xl font-semibold tracking-wider text-white`}>
              $0.00
            </Text>
          </View>
          <Pressable
            onPress={() => router.push("/")}
            style={tw`w-full p-2 bg-white text-black text-xl rounded-md  text-center`}
          >
            Place Order Now
          </Pressable>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}
