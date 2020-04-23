import {StyleSheet, Platform} from 'react-native'

export const styles = StyleSheet.create({
    
    slopeView:Platform.OS === "android"?({
      borderRadius:5,
      marginTop:20,
      overflow:"visible",
      borderWidth:2,
      width:"90%",
      minWidth:300,
      alignSelf:"flex-end",
      elevation:5,
      textAlign:'center',
      paddingVertical:40,
      flexDirection:'column',
      paddingLeft:100,
      color:"white",
      position:"relative"
      
    }):({
      borderRadius:5,
      marginTop:20,
      overflow:"visible",
      borderWidth:2,
      width:"90%",
      minWidth:300,
      alignSelf:"flex-end",
      shadowColor:'black',
      shadowOpacity:0.5,
      shadowOffset:5,
      shadowRadius:5,
      textAlign:'center',
      paddingVertical:40,
      flexDirection:'column',
      paddingLeft:100,
      color:"white"
    }),
    textWhite:{
      color:"white"
    },
    sideImage:{
        position:"absolute",
        bottom:20,
        top:20,
        width:120,
        left:0,
        zIndex:1
    },
    fullSizeImage:{
        height:"100%",
        width:"100%"
    }
  });
