import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { styles } from './styles';

const SettingsButton = () => {
    return(
        <TouchableOpacity style={styles.button}>
            <Image source={require('@images/Home/gear-six.png')} style={styles.settingsImage}/>
        </TouchableOpacity>
    );
}

export default SettingsButton;