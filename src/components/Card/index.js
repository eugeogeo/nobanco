import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Card = ({ ...props }) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={.5} {...props}>
            <View style={styles.cardLeft}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <Image source={require('@images/Home/mastercard-brand.png')} style={styles.mastercard} />
        </TouchableOpacity>
    );
}

export default Card;