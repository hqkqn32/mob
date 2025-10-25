import { getStyleMenu } from "@/styles/cs";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const stylemenu = getStyleMenu(darkMode);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={stylemenu.container}>
        <Text style={stylemenu.title}>Profil Sayfası</Text>
        <Text style={stylemenu.content}>Bu sayfa profil bilgilerini gösterecek.</Text>
      </View>
    </SafeAreaView>
  );
}
