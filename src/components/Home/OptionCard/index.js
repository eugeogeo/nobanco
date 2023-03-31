import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

const OptionCard = () => {
    return(
        <View style={styles.container}>
          <View style={styles.icon}>
            <Image source={require('./../../../assets/icons/pixIcon.png')} style={styles.image}/>
          </View>
          <Text style={styles.title}>
            Pagar um boleto
          </Text>
        </View>
    );
}

export default OptionCard;