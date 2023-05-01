import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const GoBackButton = ({...props}) => {
    return(
        <TouchableOpacity {...props}>
            <Image source={require('../../../assets/images/Register/arrow-left.png')} style={styles.image}/>
        </TouchableOpacity>
    );
}

export default GoBackButton;