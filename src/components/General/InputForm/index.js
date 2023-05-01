
import { useState } from "react";
import { TextInput, View } from "react-native";
import PasswordEye from "../PasswordEye";
import { styles } from "./styles";

const InputForm = ({ ...props }) => {

    const [hidePassword, setHidePassword] = useState(props.isPassword)

    const showAndHidePassword = () => {
        setHidePassword(!hidePassword)
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={props.value}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                secureTextEntry={hidePassword}
                selectTextOnFocus={false}
                maxLength={100}
            />
            {props.isPassword && <PasswordEye showAndHidePassword={showAndHidePassword} hidePassword={hidePassword}/>}
        </View>
    );
}

export default InputForm;