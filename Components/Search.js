import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image, } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import { image } from './Data/Image';


const Search = ({getData}) => {


const handleSearch=(query)=>{
   
 var searchItem= Items.filter((item)=>item.name.toUpperCase().includes(query.toUpperCase()))
 
 searchItem&& getData(searchItem) 
//  console.log('searchItem???>',searchItem);
}

  return (<>
    <View style={styles.view}>
      <View style={{display:'flex',flexDirection:'row',marginTop:40,gap:20,margin:10}}>
      <Icon name="arrow-left" size={30} color="white" />
      <TextInput  
        style={{
          height: 40,
          borderColor: 'white',
          width:250,
          borderWidth: 1,
          color:'white',
          fontSize:20
        }}
      //  value={search}
       onChangeText={(query)=>handleSearch(query)}
      />
      <TouchableOpacity >
      <Icon name="search" size={30} color="white" style={{margin:5}} />
      </TouchableOpacity>

      </View>
 
  
    </View>

    </>)
}

export default Search

const styles = StyleSheet.create({
    view:{
  height:92,
  backgroundColor:'black'
    }
    
  });