import OptionCard from '@components/Home/OptionCard';
import { FlatList, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { styles } from './styles';

const CardsCarousel = ({ ...props }) => {

    const optionsCards = [
        {
            option: "Fazer um Pix",
            image: require('@assets/icons/pixIcon.png')
        },
        {
            option: "Pagar um boleto",
            image: require('@assets/icons/codeBarIcon.png')
        },
        {
            option: "Fazer um depósito",
            image: require('@assets/icons/moneyIcon.png')
        },
        {
            option: "Fazer uma cobrança",
            image: require('@assets/icons/demandIcon.png')
        },
    ];

    const renderItem = (item) => {
        return (
            <OptionCard
                urlIcon={item.image}
                titleCard={item.option}
            />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.textTitle}>Do que precisa?</Text>
            </View>
            <FlatList
                contentContainerStyle={{ paddingHorizontal: RFValue(16) }}
                horizontal={true}
                data={optionsCards}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    );
}

export default CardsCarousel;