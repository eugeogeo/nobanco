import LoginButton from "@components/Onboarding/LoginButton";
import RegisterButton from "@components/Onboarding/RegisterButton";
import { useNavigation } from "@react-navigation/native";
import { Image, ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";

const Onboarding = () => {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/Onboarding/onboard-bg.jpeg')} style={styles.image}>
                <View style={styles.header}>
                    <Image source={require('@images/Home/nobanco-brand2x.png')} style={styles.brandImage} />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.title}>
                        Um mundo {'\n'}
                        financeiro sem {'\n'}
                        complexidades
                    </Text>
                    <RegisterButton title="Começar" onPress={() => navigation.navigate('Register')}/>
                    <LoginButton title="Entrar na minha conta"/>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Onboarding;