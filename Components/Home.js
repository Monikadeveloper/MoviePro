import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react';
import { image } from './Data/Image';


var data= require('./Data/Data1.json')
 
Items= data.page.content_items.content

var data2= require('./Data/Data2.json')
 
Items2= data2.page.content_items.content

var data3= require('./Data/Data3.json')
 
Items3= data3.page.content_items.content
  
const Home = () => {


  return (
    <View style={styles.View1}>
        <ScrollView>
          <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
{Items.map((item)=>{
return(<>


      <View style={styles.View2}>
        <Image source={image[`${item.poster_image}`]} style={styles.Image}/>
       
       <Text style={{color:'white',fontSize:18,width:120}}>{item.name}</Text>
       </View></>)})}
      
       {Items2.map((item)=>{
return(<>
      <View key={item.id} style={styles.View2} >
        <Image source={image[`${item.poster_image}`]}  style={styles.Image}/>
       
       <Text style={{color:'white',marginLeft:10,fontSize:18,width:100}}>{item.name}</Text></View></>)})}
       {Items3.map((item)=>{
return(<>
      <View key={item.id} style={styles.View2} >
        <Image source={image[`${item.poster_image}`]} style={styles.Image}/>
       
       <Text style={{color:'white',marginLeft:10,fontSize:18,width:100}}>{item.name}</Text></View></>)})}
     
       </View>
      </ScrollView>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
    View1:{
display:'flex',
flex:1,
  backgroundColor:'black'
    },
    Image:{
      height:170,
      width:110,
    
    },
    View2:{
        display:'flex',
        flexDirection:'column',
       justifyContent:'space-evenly',
margin:10

    }
  });