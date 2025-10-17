import { Ionicons } from "@expo/vector-icons"; // ikonlar için
import { useNavigation } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { Button, Text, View } from "react-native";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>🏠 Ana Sayfa</Text>
      <Button
        title="Profil Sayfasına Git"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>👤 Profil Sayfası</Text>
    </View>
  );
}

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
      sceneStyle: { paddingTop: 0 }, // 👈 tüm tab sayfalarına 60px üst boşluk ekler
      tabBarStyle: {
      position: "absolute",
      bottom: 10,
      left: 10,
      right: 10,
      borderRadius: 20,
      backgroundColor: "#04061bff",
      height: 60,
    },
  }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
