import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
import OptionCard from '../OptionCard';

const CardsCarousel = ({...props}) => {

    const optionsCards = [
      {
        option: "Fazer um Pix",
        image: 'require(@assets/icons/pixIcon.png)'
      },
      {
        option: "Pagar um boleto",
        image: "require('@assets/icons/codeBarIcon.png')"
      },
      {
        option: "Fazer um depósito",
        image: 'require(@assets/icons/moneyIcon.png)'
      },
    ];

    return(
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.textTitle}>Do que precisa?</Text>
          </View>
          <View style={styles.carousel}>
            {
              optionsCards.map((option)=>(
                <OptionCard 
                      urlIcon={option.image}
                      titleCard={option.option} 
                      />
              ))
            }
          </View>
        </View>
    );
}

export default CardsCarousel;