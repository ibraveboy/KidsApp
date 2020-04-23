import React from 'react'
import { View } from 'react-native'
import {styles} from "./styles"
import { Text, Image } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

const menuitem = (props) => {
    
    return (
        <View>
            <TouchableOpacity style={{backgroundColor:props.backgroundColor,...styles.slopeView}} onPress={()=>{
                props.props.setCategoryName(props.categoryName)
                props.props.navigation.navigate("Home")
            }}>
                <Text style={styles.textWhite} h4>
                    {props.title} 
                </Text>
                <View>
                    <Text style={{...styles.textWhite,marginTop:5,lineHeight:25,fontSize:16}}>
                        {props.description}
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.sideImage}>
                <Image
                resizeMethod="resize"
                resizeMode="cover" 
                 source={props.source}
                 style={styles.fullSizeImage}
                 />
            </View>
        </View>
    )
}

export default menuitem
