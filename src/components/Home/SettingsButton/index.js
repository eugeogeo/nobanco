import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const SettingsButton = ({...props}) => {
    return(
        <TouchableOpacity style={styles.button} {...props}>
            <Image source={require('@images/Home/gear-six.png')} style={styles.settingsImage}/>
        </TouchableOpacity>
    );
}

export default SettingsButton;