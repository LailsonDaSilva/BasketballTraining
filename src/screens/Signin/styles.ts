
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content:{
        alignItems:'center',
        marginTop:20,
    },
    Image:{
        width: 260,
        height:300,
        resizeMode:'contain',
    },
    welcome:{
        fontSize:24,
        fontFamily:theme.font.welcome, 
    },
    title:{
        fontSize:24,
        fontFamily:theme.font.title,
        fontWeight:'bold',
        margin:5,
    },
    subTitle:{
        fontSize:14,
        fontFamily:theme.font.subTitle,
        color:theme.color.gray
    },
    btnTextGmail:{
        flex: 1,
        fontFamily:theme.font.component,
        fontSize:18,
        marginLeft:8,
    },
    btnTextApple:{
        flex: 1,
        fontFamily:theme.font.component,
        fontSize:18,
        marginLeft:8,
        color:theme.color.white,
    },
    btnGmail:{  
        width:'100%',  
        height:54, 
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:theme.color.black,
        borderRadius:10,
        paddingVertical:12,
        marginVertical:20,
    },
    btnApple:{
        width:'100%',  
        height:54, 
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:theme.color.gray,
        borderRadius:10,
        paddingVertical:12,
    }, 
    textCreate:{
        fontSize:14,
        fontFamily:theme.font.subTitle,
        color:theme.color.gray
    },
    footerCreate:{
        alignItems: 'center',
        marginTop:20,
        marginBottom:40,
    }
  });