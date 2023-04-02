import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles'
import SettingsButton from '@components/Home/SettingsButton';
import OptionCard from '@root/src/components/Home/OptionCard';

const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
               <Image source={require('@images/Home/nobanco-brand2x.png')} style={styles.brandImage}/>
               <SettingsButton/>
            </View>
            <OptionCard 
                urlIcon={require('@assets/icons/codeBarIcon.png')}
                titleCard="Pix" 
            />

        </View>
    );
}

export default Home;