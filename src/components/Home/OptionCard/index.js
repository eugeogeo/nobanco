import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const OptionCard = ({ ...props }) => {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.icon}>
                <Image source={props.urlIcon} style={styles.image} />
            </View>
            <Text style={styles.title}>
                {props.titleCard}
            </Text>
        </TouchableOpacity>
    );
}

export default OptionCard;