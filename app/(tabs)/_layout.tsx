import { Tabs } from "expo-router";
import { Platform } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

const Colors = {
  light: { tint: "#32CD32" }, // Lime Green for light mode
  dark: { tint: "#ffffff" },
};

const colorScheme = "light"; // Replace with dynamic color scheme logic if needed

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: "ffffff",
            position: "absolute",
            borderTopWidth: 0,
          },
          android: {
            backgroundColor: "#ffffff",
            elevation: 5,
          },
          default: {
            backgroundColor: "#ffffff",
          },
        }),
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
        }}
      />

      {/* Explore Tab */}
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: () => (
            <Ionicons name="storefront" size={24} color="black" />
          ),
        }}
      />

      {/* Cart Tab */}
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
        }}
      />

      {/* Contact Tab */}
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: () => (
            <MaterialIcons name="contacts" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
