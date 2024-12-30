import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import tw from "twrnc";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <View
      style={[
        tw`flex-row justify-between items-center py-4 px-4 shadow-lg bg-white`,
        { zIndex: 1000, elevation: 10 },
      ]}
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

        <View style={tw`flex-row items-center ml-4 relative`}>
          <TouchableOpacity
            style={tw`flex-row items-center`}
            onPress={toggleDropdown}
          >
            <AntDesign name="user" size={24} color="black" />
            <Text style={tw`ml-1`}>Ken</Text>
          </TouchableOpacity>
          {isDropdownVisible && <Dropdown />}
        </View>
      </View>
    </View>
  );
}
