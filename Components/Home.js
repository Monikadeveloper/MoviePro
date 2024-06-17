import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native'
import React, { useState } from 'react';
import { image } from './Data/Image';
import Search from './Search';


var data= require('./Data/Data1.json')
 
Items1= data.page.content_items.content

var data2= require('./Data/Data2.json')
 
Items2= data2.page.content_items.content

var data3= require('./Data/Data3.json')
 
Items3= data3.page.content_items.content

Items=[...Items1,...Items2,...Items3]

const Home = () => {

  const [search,setSearch]=useState(false);

const getData=(data)=>{

  console.log('searchdata>>>>>',data);

 }
  return (<>
<Search getData={getData} />
    <View style={styles.View1}>
        <ScrollView>
         <View style={styles.View2}>
         
 { search?(<FlatList data={data}
 key={3}
  // keyExtractor={(item)=>item.index}
  renderItem={({item})=>(
    <View > 
<Image source={image[`${item.poster_image}`]} style={styles.Image}/>
 <Text style={{color:'white',fontSize:18,width:120}}>{item.name}</Text>
</View>)}
numColumns={3}
  />): (<FlatList data={Items} 
key={3}
 keyExtractor={(item)=>item.index}
   renderItem={({item})=>( 
     <View > 
<Image source={image[`${item.poster_image}`]} style={styles.Image}/>
 <Text style={{color:'white',fontSize:18,width:120}}>{item.name}</Text>
</View>)}
numColumns={3}
  />)} 
  
 </View>
  
      </ScrollView>
    </View>
    
    </> )
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
      width:100,margin:5
    
    },
    View2:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'flex-start',
       justifyContent:'space-evenly',
margin:10

    }
  });