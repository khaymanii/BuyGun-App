import { Tabs } from "expo-router";
import { Platform } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
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
          ios: {
            backgroundColor: "#ffffff",
            position: "absolute",
            borderTopWidth: 0,
          },
          android: {
            backgroundColor: "#ffffff",
            elevation: 5,
          },
          default: {
            backgroundColor: "#ffffff",
            color: "#000000",
            paddingTop: 30,
            paddingBottom: 30,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: () => (
            <Ionicons name="storefront" size={24} color="black" />
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
            <MaterialIcons name="contacts" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
