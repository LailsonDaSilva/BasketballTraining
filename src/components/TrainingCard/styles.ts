import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:theme.color.gray2,
        paddingVertical:15
      },
      imageCard:{
          height:80,
          width:80,
          borderRadius:10,
          marginRight:16
      },
      repetitions:{
          fontFamily:theme.font.component,
          fontSize:14,
          marginRight:16
      },
      nameExercises:{
        fontFamily:theme.font.component,
        fontSize:14,
        marginRight:16
      },
      timeExercises:{
        fontFamily:theme.font.subTitle,
        fontSize:14,
        color:theme.color.gray,
        marginRight:16
      },
      arrowCard:{
        height:24,
        width:24,
        borderRadius:10,
      }
})

