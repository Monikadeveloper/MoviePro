import { View, Text, StyleSheet, TouchableOpacity, TextInput, } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  
  const [input,setInput]=useState('');
  const handleSearch=()=>{
    console.warn('clicked')
  }
  return (
    <View style={styles.view}>
      <View style={{display:'flex',flexDirection:'row',marginTop:40,gap:20,margin:10}}>
      <Icon name="arrow-left" size={30} color="white" />
      <TextInput value={input} onChange={(e)=>setInput(e.target.value)}
        style={{
          height: 40,
          borderColor: 'white',
          width:280,
          borderWidth: 1,
          color:'white',
          fontSize:20
        }}
       
      />
      <TouchableOpacity onPress={()=>handleSearch()}>
      <Icon name="search" size={30} color="white" style={{margin:5}} />
      </TouchableOpacity>

      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    view:{
  height:92,
  backgroundColor:'black'
    }
    
  });