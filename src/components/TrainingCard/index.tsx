import React from 'react'
import { View, Image, Text, ImagePropsBase} from 'react-native';

import { styles } from './styles';
import { SvgProps } from 'react-native-svg';

type CardProps =  ImagePropsBase & {
    repetitions: string,
    time: string,
    nameExercise: string,
    icon:React.FC<SvgProps>,

}


export function TrainingCard({repetitions, time, nameExercise,icon:Icon,...rest}:CardProps){
    return(
        <View >
                        <View style={styles.card}>
                            <Image {...rest} style={styles.imageCard}/>
                            <View>
                            <Text style={styles.repetitions}>
                            {repetitions}
                            </Text>
                            </View>
                            <View >
                            <Text style={styles.nameExercises}>
                            {nameExercise}
                            </Text>
                            <Text style={styles.timeExercises}>
                                {time}
                            </Text>
                            </View>          
                            <Icon style={styles.arrowCard}/>
                        </View>
          </View>
    );
}