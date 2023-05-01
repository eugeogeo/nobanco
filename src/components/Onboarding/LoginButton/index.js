import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const LoginButton = ({...props}) => {
    return(
        <TouchableOpacity style={styles.button} activeOpacity={.4}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default LoginButton;