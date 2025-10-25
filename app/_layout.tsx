// app/_layout.tsx
import { tabStyles } from "@/styles/cs"; // ✅ stiller artık buradan geliyor
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" />

      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: tabStyles.tabBar, // ✅ tek satırda stil alındı

          tabBarIcon: ({ focused, color }) => {
            let iconName: keyof typeof Feather.glyphMap = "circle";

            if (route.name === "index") iconName = "home";
            else if (route.name === "profile") iconName = "user";
            else if (route.name === "settings") iconName = "settings";

            color = focused ? "#007AFF" : "#808080";

            return (
              <View style={tabStyles.tabIconContainer}>
                <Feather name={iconName} size={26} color={color} />
                {focused && <View style={tabStyles.activeDot} />}
              </View>
            );
          },
        })}
      >
        <Tabs.Screen name="index" options={{ title: "Ana Sayfa" }} />
        <Tabs.Screen name="profile" options={{ title: "Profil" }} />
        <Tabs.Screen name="settings" options={{ title: "Ayarlar" }} />
      </Tabs>
    </>
  );
}
