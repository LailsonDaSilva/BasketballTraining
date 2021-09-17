import React from 'react';
import { View, Text, ImageBackground, Image, FlatList , ScrollView} from 'react-native';
import { styles } from './styles';
import ImageHeader from '../../assets/header.png';
import { TrainingCard } from '../../components/TrainingCard';
import data from '../../database/fakerDatabase'
import IconArrow from '../../assets/arrow.svg';
export function Training() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <ImageBackground source={ImageHeader} style={styles.imageHeader} >
                <View style={styles.header}>
                    <View style={styles.headerTitle}>
                        <Text style={styles.headerTitleText}>
                            Ball Control
                        </Text>
                    </View>
                    <View style={styles.trailingInfo}>
                        <View style={styles.minutes}>
                            <Text style={styles.info}>
                                30
                            </Text>
                            <Text style={styles.description}>
                                Minutes
                            </Text>
                        </View>
                        <View style={styles.rounds}>
                            <Text style={styles.info}>
                                3
                            </Text>
                            <Text style={styles.description}>
                                Rounds
                            </Text>
                        </View>
                        <View style={styles.level}>
                            <Text style={styles.info}>
                                Hard
                            </Text>
                            <Text style={styles.description}>
                                Level
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>


            <View style={styles.content}>
                
                <View style={styles.contentDescription}>
                    <Text style={styles.numberRounds}>
                        Round 1
                    </Text>
                    <Text style={styles.roundDescription}>
                        Full body
                    </Text>
                </View>
                  <FlatList
          data={data}
          renderItem={({ item }) => (
            <TrainingCard
            source={item.imageTraining}
            repetitions={item.repetitions}
            time={item.timeTraining}
            nameExercise={item.nameTraining}
            icon={IconArrow}
            />
          )}
            vertical
          showsVerticalScrollIndicator={false}
        />
           
    
            </View>
        </View>
        </ScrollView>
    );
}