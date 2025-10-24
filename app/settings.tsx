// app/settings.tsx
import { useState } from "react";
import { Switch, Text, View } from "react-native";
import { getStyleMenu } from "../styles/cs";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const stylemenu = getStyleMenu(darkMode); // 🔥 tema buradan geliyor

  return (
    <View style={stylemenu.container}>
      <Text style={stylemenu.title}>Ayarlar Sayfası</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </View>
  );
}
