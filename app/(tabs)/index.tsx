import Hero from "@/components/Hero";
import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";

export default function index() {
  return (
    <ScrollView style={tw`bg-white`}>
      <Hero />
    </ScrollView>
  );
}
