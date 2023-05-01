import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const PasswordEye = ({ ...props }) => {

    return (
        <TouchableOpacity onPress={() => props.showAndHidePassword()}>
            {props.hidePassword
                ? <Image source={require('@assets/images/General/eye-active.png')} style={styles.image} />
                : <Image source={require('@assets/images/General/eye-deactive.png')} style={styles.image} />
            }
        </TouchableOpacity>
    );
}

export default PasswordEye;