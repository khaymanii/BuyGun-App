import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import ShopCategory from "@/components/ShopCategory";
import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";

export default function index() {
  return (
    <ScrollView style={tw`bg-white`}>
      <Hero />
      <Featured />
      <ShopCategory />
    </ScrollView>
  );
}
