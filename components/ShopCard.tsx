import { View, Text, Image, Pressable } from "react-native";
import tw from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

type Product = {
  id: number;
  productName: string;
  category: string;
  brand: string;
  price: number;
  caliber: string;
  weight: string;
  material: string;
  image: any;
  description: string;
  quantity: number;
};

export default function ShopCard({ product }: { product: Product }) {
  const router = useRouter();
  return (
    <View style={tw`mx-2 mb-4 px-3 `}>
      <Pressable onPress={() => router.push(`/products/${product.id}` as any)}>
        <View
          style={tw`flex items-center justify-center bg-gray-200 w-full h-48  mb-2 rounded-lg`}
        >
          <Image
            source={product.image}
            style={tw`w-full h-full`}
            resizeMode="contain"
          />
        </View>{" "}
        <Text style={tw`font-semibold text-xl`}>{product.productName}</Text>
        <Text style={tw`font-semibold text-lg`}>{product.price}</Text>
      </Pressable>
      <View style={tw`mt-1`}>
        <AntDesign name="pluscircle" size={24} color="black" />
      </View>
    </View>
  );
}
