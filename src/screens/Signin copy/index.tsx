import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SigninImage from '../../assets/Frame.png';
import IconGoogle from '../../assets/google.png';
import IconApple from '../../assets/apple.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/core';

export function Signin() {
    const navigation = useNavigation();
    function handleTraining() {
        navigation.navigate('Training');
    }
    return (
        <View style={styles.container}>
            <Image source={SigninImage} style={styles.Image} />
            <View style={styles.content}>
                <Text style={styles.welcome}>
                    Welcome to
                </Text>
                <Text style={styles.title}>
                    Basketball Training
                </Text>
                <Text style={styles.subTitle}>
                    Get better performance in your games.
                </Text>
            </View>
            <View>
               
                    <TouchableOpacity >
                        <View  style={styles.btnGmail}>
                        <View>
                            <Image source={IconGoogle} />
                        </View>
                        <View>
                            <Text style={styles.btnTextGmail}>
                                Login With Gmail
                            </Text>

                        </View>
                        </View>
                    </TouchableOpacity>
                
                
                    <TouchableOpacity onPress={handleTraining}>
                        <View style={styles.btnApple}>
                        <View>
                            <Image source={IconApple} />
                        </View>
                        <View >
                            <Text style={styles.btnTextApple}>
                                Login With Apple
                            </Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.footerCreate} >
                            <Text style={styles.textCreate}>
                            Create account? Signup
                            </Text>
                     </View>
                
            </View>
        </View>
    );
}
