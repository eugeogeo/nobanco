import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

const OptionCard = ({...props}) => {

    return(
        <View style={styles.container}>
          <View style={styles.icon}>
            <Image source={props.urlIcon} style={styles.image}/>
          </View>
          <Text style={styles.title}>
            {props.titleCard}
          </Text>
        </View>
    );
}

export default OptionCard;