import { View, Text, Image, Pressable } from "react-native";
import tw from "twrnc";
import { featuredCard } from "@/data/Data";
export default function Featured() {
  return (
    <View style={tw`mb-12`}>
      <Text style={tw`text-3xl font-semibold text-center mb-8`}>Featured</Text>
      {featuredCard.map((card) => (
        <View
          style={tw`mx-4 px-3 bg-white rounded-lg shadow-md p-4 mb-6`}
          key={card.id}
        >
          <View style={tw`relative`}>
            <View style={tw`bg-gray-100 w-full items-center justify-center`}>
              <Image
                source={card.image}
                resizeMode="contain"
                style={tw`h-40 w-40`}
              />
            </View>
            <Pressable
              style={tw`absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-md opacity-90`}
            >
              Add to Cart
            </Pressable>
          </View>
          <View style={tw`mt-4`}>
            <Text style={tw`font-semibold text-base`}>{card.name}</Text>
            <Text style={tw`text-sm text-gray-600`}>{card.description}</Text>
            <Text style={tw`font-bold text-gray-900 mt-2`}>${card.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
