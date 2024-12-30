// Dropdown.js
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import tw from "twrnc";

interface DropdownProps {
  isVisible: boolean;
  toggleDropdown: () => void;
  router: ReturnType<typeof useRouter>;
}

const Dropdown = ({ isVisible, toggleDropdown, router }: DropdownProps) => {
  if (!isVisible) return null; // Don't render if not visible

  return (
    <View
      style={[
        tw`absolute top-16 right-4 bg-white border shadow-md rounded-lg w-32 py-2`,
        { zIndex: 9999, elevation: 10 },
      ]}
    >
      <Pressable
        style={tw`px-4 py-2 border-b`}
        onPress={() => {
          console.log("Navigating to Signup");
          toggleDropdown(); // Close the dropdown
          router.push("/signup"); // Navigate to signup
        }}
      >
        <Text style={tw`text-sm text-green-500`}>Signup</Text>
      </Pressable>
      <Pressable
        style={tw`px-4 py-2`}
        onPress={() => {
          toggleDropdown(); // Close the dropdown
          console.log("Logout");
        }}
      >
        <Text style={tw`text-sm text-red-500`}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Dropdown;
