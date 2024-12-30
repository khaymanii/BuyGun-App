import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "twrnc";

const Dropdown = () => {
  const router = useRouter();
  return (
    <View
      style={[
        tw`absolute top-16 right-4 bg-white border shadow-md rounded-lg w-40 py-4 text-center`,
      ]}
    >
      <Pressable
        style={tw`px-4 py-2 border-b text-center`}
        onPress={() => {
          console.log("Navigating to Signup");
          router.push("/signup"); // Navigate to signup
        }}
      >
        <Text style={tw`text-sm text-green-500`}>Sign up</Text>
      </Pressable>
      <Pressable
        style={tw`px-4 py-2 text-center`}
        onPress={() => {
          console.log("Logout");
        }}
      >
        <Text style={tw`text-sm text-red-500`}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Dropdown;
