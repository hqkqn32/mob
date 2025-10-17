import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const message='javas'
  return (
    <View style={style.container}>
      <Text className="text-lg font-semibold">👤 Profil Sayfası {message}</Text>
    </View>
  );
}

 export const style=StyleSheet.create({container:{
    flex:1,
    backgroundColor:'#3a8827ff',
    alignItems:'center',
    justifyContent:'center'



}})
