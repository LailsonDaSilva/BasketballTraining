
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        marginBottom:100
        
      },
      header:{
          height:200,
          justifyContent:'center',    
          alignItems: 'center',    
      },
      imageHeader:{
        height:200, 
        width:'100%',
        resizeMode:'contain',
      }, 
      headerTitle:{
          fontSize:18,
          color:theme.color.white,
          justifyContent:'center',
          alignItems: 'center',
          margin:20
      },
      headerTitleText:{
        fontSize:24,
        color:theme.color.white,
        fontFamily:theme.font.title
    },
      trailingInfo:{
          flexDirection:'row',
          color:theme.color.white,
          justifyContent:'center',
          alignItems: 'center',
      },
      minutes:{
        color:theme.color.white,
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal:24,
        borderRightWidth:2,
        borderColor:theme.color.white
      },
      info:{
        color:theme.color.white,
        fontFamily:theme.font.componentBold,
        fontSize:14
        
      },
      description:{
        color:theme.color.white,
        fontFamily:theme.font.subTitle,
        fontSize:14
      },
      rounds:{
        color:theme.color.white,
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal:24,
        borderRightWidth:2,
        borderColor:theme.color.white
      },
      level:{
        justifyContent:'center',
        alignItems: 'center',
        color:theme.color.white,
        paddingHorizontal:24,
        borderRightWidth:2,
      },
      content:{
          padding:24,
          
      },
      contentDescription:{
        flexDirection:'row',
        justifyContent:'space-between',
      },
      numberRounds:{
        fontSize:18,
        fontFamily:theme.font.title,
      },
      roundDescription:{
        fontSize:18,
        fontFamily:theme.font.subTitle,
        color:theme.color.gray
      },
     

});

