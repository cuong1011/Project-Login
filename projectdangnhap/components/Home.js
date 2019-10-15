import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,TouchableOpacity,} from 'react-native';

export default function Home(props) {
    const {category,onPress} =props;
  //item
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} >
            
             <View style={styles.container}>
             <Image source={{uri:category.images[0].url}} style={styles.categoryImage} />
                 <View>
                    <Text style={styles.title}>{category.email}</Text>
                    <Text style={styles.title}>{category.pass}</Text>
                 </View>
             
             
      </View>
        </TouchableOpacity>
    
    );
  }

const styles=StyleSheet.create({
    categoryImage : {
        width:60,
        height:60,
        
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        padding:16,
        margin:5,
        borderRadius:4,
        backgroundColor:'#ffe4c4',
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0},
        marginBottom:16
    },
    title:{
        textTransform:'uppercase',
        marginBottom: 8,
        fontWeight:'500',
        marginLeft:10
    }

  });