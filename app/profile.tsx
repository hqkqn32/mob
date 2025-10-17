import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={style.container}>
      <Text className="text-lg font-semibold">👤 Profil Sayfası</Text>
    </View>
  );
}

 export const style=StyleSheet.create({container:{
    flex:1,
    backgroundColor:'#3a8827ff',
    alignItems:'center',
    justifyContent:'center'



}})
