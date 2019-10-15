import React from 'react';
import{Image,StyleSheet,Text,Touchable,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Detail(props){
    const {thongtin} =props;
    return (
        <View style={styles.shadow}>
           <View style={styles.container}>
              <View style={styles.info}>
                 <Text style={styles.name}>Eamil:{thongtin.email}</Text>
                 <Text style={styles.name}>Pass:{thongtin.pass}</Text>
              </View>
             
           </View>
        </View>
    )
}
const styles =StyleSheet.create({
    carttext:{
        textTransform:'uppercase',
        fontSize:16,
        color:'#2f95dc'
    },
    shadow:{
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0,height:0}
    },
    container:{
        marginBottom:20,
        borderRadius:4,
        backgroundColor:'#FFF',
        overflow:'hidden'
    },
    info:{
        padding:8
    },
   
    name:{
        fontSize:16,
        marginBottom:8
    },
    
})