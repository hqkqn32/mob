import { Text, View } from "react-native";
import { stylemenu } from "./cs";
import { style } from "./profile";

export default function Settings() {
  return (
    <View style={style.container}>
      <Text style={stylemenu.content} >⚙️ Ayarlar Sayfası</Text>
    </View>
  );
}
