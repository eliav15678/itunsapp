import React from "react";
import { View,Text,TouchableOpacity, StyleSheet,Alert } from "react-native";

const app = () => {



// const doSomthing = () => {
//   Alert.alert('Notification','hello from eliav');
//   console.log('hello')
// }


const doSomthing = async() => {
  const api = 'https://itunes.apple.com/search?term=metallica';
  const response = await fetch(api,{
    method:'get'
  });

  const data = await response.json();
  console.log(data);
}



  return (
    <View style={MyStyle.container}>
          <TouchableOpacity style={MyStyle.btn} onPress={doSomthing} >
                  <Text style={MyStyle.btnText}>Click me</Text>
          </TouchableOpacity>
    </View>
  )
}

const MyStyle = StyleSheet.create({


  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#000000',
    padding:30
  },


  btn:{
  width:'100%',
  paddingVertical:14,
  alignItems:'center',
  backgroundColor:'#3A4F41',
  borderRadius:14
  },


  btnText:{
  color:'#Dee5e5',
  fontSize:30,
  fontWeight:'800'
  }


})

export default app;