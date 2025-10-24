// app/_layout.tsx
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, // sadece ikonlar
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 20,
          right: 20,
          backgroundColor: "hsla(240, 26%, 20%, 1.00)",
          borderRadius: 30,
          height:70 ,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 10,
          elevation: 10,
        },

        // 🔽 İŞTE BURAYA EKLİYORUZ 🔽
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Feather.glyphMap = "circle";

          if (route.name === "index") iconName = "home";
          else if (route.name === "profile") iconName = "user";
          else if (route.name === "settings") iconName = "settings";

          // aktif sekmede mavi renk, pasifte gri
          color = focused ? "#007AFF" : "#808080";

          return (
            <View style={{ alignItems: "center" }}>
              <Feather name={iconName} size={26} color={color} />
              {focused && (
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "#007AFF",
                    marginTop: 4,
                  }}
                />
              )}
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Ana Sayfa" }} />
      <Tabs.Screen name="profile" options={{ title: "Profil" }} />
      <Tabs.Screen name="settings" options={{ title: "Ayarlar" }} />
    </Tabs>
  );
}
