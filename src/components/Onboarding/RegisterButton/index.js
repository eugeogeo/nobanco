import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const RegisterButton = ({...props}) => {

    const style = {
        ...styles.button,
        backgroundColor: props.isDisabled ? '#E6E6E6' : '#8408D1'
    }

    return(
        <TouchableOpacity style={style} activeOpacity={.4} onPress={props.onPress} disabled={props.isDisabled}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default RegisterButton;