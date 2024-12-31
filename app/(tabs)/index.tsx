import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import ShopCategory from "@/components/ShopCategory";
import ShopCollection from "@/components/ShopCollection";
import Footer from "@/components/Footer";
import { ScrollView } from "react-native";
import tw from "twrnc";
import Newsletter from "@/components/Newsletter";

export default function index() {
  return (
    <ScrollView style={tw`bg-white`}>
      <Hero />
      <Featured />
      <ShopCategory />
      <ShopCollection />
      <Newsletter />
      <Footer />
    </ScrollView>
  );
}
