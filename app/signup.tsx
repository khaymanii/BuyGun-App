import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";

export default function signup() {
  const router = useRouter();

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <Image
        source={require("@/assets/images/ak5.jpg")}
        style={tw`h-[70%] w-[100%]  mb-6`}
      />
      <Text style={tw`text-3xl font-semibold text-center mb-4`}>Buygun</Text>
      <Text style={tw`text-2xl font-semibold mx-2 mb-2`}>Sign Up</Text>
      <Text style={tw`text-lg  mx-2 mb-4`}>
        Already have an account?{" "}
        <Pressable onPress={() => router.push("/signin")}>
          <Text style={tw`text-green-500 text-lg`}>Sign In</Text>
        </Pressable>
      </Text>

      <View style={tw`mx-2`}>
        <TextInput
          style={tw`border-b border-b-gray-300 p-2 rounded w-full mb-4 ring-offset-0`}
          placeholder="Your name"
        />
        <TextInput
          style={tw`border-b border-b-gray-300 p-2 rounded w-full mb-4 ring-offset-0`}
          placeholder="Email address"
        />
        <TextInput
          style={tw`border-b border-b-gray-300 p-2 rounded w-full mb-8 ring-offset-0 focus:outline-none`}
          placeholder="Password"
          secureTextEntry={true}
        />

        <Pressable
          style={tw`w-full p-2 bg-black text-white text-lg rounded text-center`}
        >
          Sign Up
        </Pressable>
      </View>
    </ScrollView>
  );
}
