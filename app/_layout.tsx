import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import tw from "twrnc";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={tw`flex-1`}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerShown: false,
          }}
        />{" "}
        <Stack.Screen
          name="signin"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="products"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="checkout"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="not-found" />
      </Stack>
      <StatusBar style="auto" />
    </View>
  );
}
