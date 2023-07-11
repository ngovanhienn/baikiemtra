
import React from 'react';
import { View, TouchableOpacity, Image,StyleSheet, Text,ScrollView ,Button} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Header from './Header'

const Collections =()=>{
    return(
        
        <ScrollView >
        <Text>Category</Text>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Categories</Text>
                <View style={styles.category}>
                    <View style ={styles.house}>
                        <Image 
                            source={require('../assets/categori/1.png')}
                            style={styles.anhcategory}
                        />
                        <Text style={{textAlign:'center'}}>Houses</Text>
                    </View>

                    <View style ={styles.house}>
                        <Image 
                            source={require('../assets/categori/2.png')}
                            style={styles.anhcategory}
                        />
                        <Text style={{textAlign:'center'}}>Apartments</Text>
                    </View>

                    <View style ={styles.house}>
                        <Image 
                            source={require('../assets/categori/1.png')}
                            style={styles.anhcategory}
                        />
                        <Text style={{textAlign:'center'}}>Condos</Text>
                    </View>
                </View>

                <Text style={styles.title}>Houses</Text>


            <ScrollView>

            
                <View style={{flexDirection:'row'}}>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                        <Image style={styles.houses}
                            source={require('../assets/categori/4.png')}
                        />
                        <Text style={{marginLeft:30}}>One Mission Bay</Text>
                        <Text style={{marginLeft:30}}>San Francisco, CA</Text>
                    </View> 
                </View>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                        <Image  style={styles.houses}
                            source={require('../assets/categori/5.png')}
                        />
                        
                        <Text style={{marginLeft:30}}>One Mission Bay </Text>
                        <Text style={{marginLeft:30}}>San Francisco, CA</Text>
                        
                    </View> 
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                        <Image style={styles.houses}
                            source={require('../assets/categori/6.png')}
                        />
                        <Text style={{marginLeft:30}}>One Mission Bay</Text>
                        <Text style={{marginLeft:30}}>San Francisco, CA</Text>
                    </View> 
                </View>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                        <Image  style={styles.houses}
                            source={require('../assets/categori/7.png')}
                        />
                        
                        <Text style={{marginLeft:30}}>One Mission Bay </Text>
                        <Text style={{marginLeft:30}}>San Francisco, CA</Text>
                        
                    </View> 
                </View>
                
                </View>
                
            </ScrollView>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor: 'black'
    },
    title:{
        fontSize:28,
        marginTop:30,
        marginBottom:5,

    },
    category:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    house:{
        borderColor:'black',
        borderWidth:0.1,
        borderRadius:3,
        width: 120,
        height:100,
        marginBottom: 20,
    }, 
    anhcategory:{
        //width: 80,
        //height:30
    },
    houses:{
        height:160,
        width:180
        ,
        marginHorizontal:10,
    }

    
})
export default Collections;