import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const BalanceCard = () => {
    return(
        <TouchableOpacity style={styles.container} activeOpacity={.7}>
            <View style={styles.header}>
                <Text style={styles.title}>Saldo disponível</Text>
                <Image source={require('@images/Home/wallet.png')} style={styles.walletIcon}/>
            </View>
            <Text style={styles.balance}>R$145,76</Text>
        </TouchableOpacity>
    );
}

export default BalanceCard;