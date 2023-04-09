import CardsCarousel from '@components/Home/CardsCarousel';
import Card from '@components/Card';
import SettingsButton from '@components/Home/SettingsButton';
import { Image, View } from 'react-native';
import { styles } from './styles';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@images/Home/nobanco-brand2x.png')} style={styles.brandImage} />
                <SettingsButton />
            </View>
            <View style={styles.cardAndBalance}>
                <Card title="Nome" />
            </View>
            <CardsCarousel />
        </View>
    );
}

export default Home;