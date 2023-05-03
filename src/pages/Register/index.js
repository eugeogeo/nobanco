import { useNavigation } from '@react-navigation/native';
import GoBackButton from '@root/src/components/Register/GoBackButton';
import RegisterStep from '@root/src/components/Register/RegisterStep';
import { useRef, useState } from 'react';
import { Dimensions, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { styles } from './styles';

const Register = ({ ...props }) => {


    const navigation = useNavigation()
    const [dataForm, setDataForm] = useState({ })
    const [currentCarrouselIndex, setCurrentCarouselIndex] = useState()
    const isCarousel = useRef()
    const width = Dimensions.get('window').width;

    const handleGoBack = () => {
        navigation.goBack()
    }

    const stepRegisterContent = [{
        title: "Boas-vindas ao Nubank! \nPara começar, qual o seu CPF?",
        subtitle: "Precisamos dele para dar inicio ao seu cadastro.",
        input_type: 'cpf'
    },{
        title: "Em qual e-mail podemos \nfalar com você?",
        subtitle: "Ele será usado para avisar sobre transações e novidades da conta.",
        input_type: 'email',
        keyboardType: 'email-address',
    },{
        title: "Qual seu nome completo?",
        input_type: 'name'
    },{
        title: "Agora digite sua senha do aplicativo",
        input_type: 'password',
        isPassword: true,
        placeholder: '8 dígitos ou mais'
    },{
        title: "Falta pouco para\npara concluir",
    }]

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <View style={styles.header}>
                    <GoBackButton onPress={currentCarrouselIndex ? isCarousel.current.prev : handleGoBack} />
                </View>
                <Carousel
                    enabled={false}
                    loop={false}
                    width={width}
                    style={{ flex: 1 }}
                    ref={isCarousel}
                    onSnapToItem={(index) => setCurrentCarouselIndex(index)}
                    data={[...new Array(5).keys()]}
                    scrollAnimationDuration={800}
                    renderItem={({ index }) => (
                        <RegisterStep 
                            data={stepRegisterContent[index]} 
                            nextStep={isCarousel.current} 
                            updateDataForm={setDataForm} 
                            dataForm={dataForm}
                        />
                    )}
                />
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

export default Register;