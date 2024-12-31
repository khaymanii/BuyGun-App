import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import React from "react";
import { useRouter } from "expo-router";

export default function signin() {
  const router = useRouter();

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <Image
        source={require("@/assets/images/ak5.jpg")}
        alt="signin image"
        style={tw`h-[70%] w-[100%]  mb-10`}
      />
      <Text style={tw`text-3xl font-semibold text-center mb-4`}>Buygun</Text>
      <Text style={tw`text-2xl font-semibold mx-2 mb-2`}>Sign In</Text>
      <Text style={tw`text-lg  mx-2 mb-6`}>
        Don't have an account yet?{" "}
        <Pressable onPress={() => router.push("/signup")}>
          <Text style={tw`text-green-500 text-lg`}>Signup</Text>
        </Pressable>
      </Text>

      <View style={tw`mx-2`}>
        <TextInput
          style={tw`border-b border-b-gray-300 p-2 rounded w-full mb-6 ring-offset-0`}
          placeholder="Email address"
        />
        <TextInput
          style={tw`border-b border-b-gray-300 p-2 rounded w-full mb-10 ring-offset-0 focus:outline-none`}
          placeholder="Password"
          secureTextEntry={true}
        />

        <Pressable
          style={tw`w-full p-2 bg-black text-white text-lg rounded text-center`}
        >
          Sign In
        </Pressable>
      </View>
    </ScrollView>
  );
}
