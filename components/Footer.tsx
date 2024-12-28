import { View, Text } from "react-native";
import tw from "twrnc";
export default function Footer() {
  return (
    <View style={tw`bg-black py-20 mt-16 items-center justify-center`}>
      <Text style={tw`text-gray-100 text-sm`}>
        © 2024 Buygun. All rights reserved.
      </Text>
      <View style={tw`flex-row mt-2`}>
        <Text style={tw`text-white text-sm mx-1`}>Privacy Policy</Text>
        <Text style={tw`text-white text-sm`}>|</Text>
        <Text style={tw`text-white text-sm mx-1`}>Terms of Service</Text>
        <Text style={tw`text-white text-sm`}>|</Text>
        <Text style={tw`text-white text-sm mx-1`}>Contact Us</Text>
      </View>
    </View>
  );
}
