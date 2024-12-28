import { Tabs } from "expo-router";
import { Platform } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Colors = {
  light: { tint: "#32CD32" },
  dark: { tint: "#ffffff" },
};

const colorScheme = "light";

export default function TabNavigator() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: "black",
        headerShown: false,
        tabBarStyle: Platform.select({
          default: {
            backgroundColor: "#ffffff",
            color: "#000000",
            paddingTop: 20,
            paddingBottom: 50,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: () => (
            <Ionicons name="storefront-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="contacts-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
