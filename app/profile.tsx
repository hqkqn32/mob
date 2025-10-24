import { getStyleMenu } from "@/styles/cs"; // ✅ doğru import
import { useState } from "react";
import { Switch, Text, View } from "react-native";

export default function Profile() {
  // 🎨 Temayı yönetmek için state
  const [darkMode, setDarkMode] = useState(false);

  // 🎨 cs.tsx’ten stil setini al
  const stylemenu = getStyleMenu(darkMode);

  return (
    <View style={stylemenu.container}>
      <Text style={stylemenu.title}>profil Sayfası</Text>
      <Text style={stylemenu.content}>
        Bu sayfa profil bilgilerini gösterecek.
      </Text>

      {/* Tema değiştirici */}
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </View>
  );
}
