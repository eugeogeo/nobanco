import { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import InputForm from '../../General/InputForm';
import RegisterButton from '../../Onboarding/RegisterButton';
import { styles } from './styles';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

const RegisterStep = ({ ...props }) => {

    const [inputData, setInputData] = useState();
    const [isValid, setIsValid] = useState();
    const inputType = props.data.input_type;

    const validadeData = (data) => {
        switch (inputType) {
            case 'cpf':
                data.length == 14
                    ? setIsValid(true)
                    : setIsValid(false)
                setInputData(data)
                break;
            case 'email':
                emailRegex.test(data)
                    ? setIsValid(true)
                    : setIsValid(false)
                setInputData(data)
                break;
            case 'senha':
                data.length >= 8
                    ? setIsValid(true)
                    : setIsValid(false)
                setInputData(data)
                break;
            default:
                nameRegex.test(data)
                    ? setIsValid(true)
                    : setIsValid(false)
                setInputData(data)
                break;
        }
    }

    const handleFormSubmitAndNext = () => {

        if (inputType) {
            const data = {
                ...props.dataForm,
                [inputType]: inputData
            }
            props.updateDataForm(data);
            props.nextStep.next();
        } else {
            // Integrar com API
            // Enviar props.dataForm para a API
            console.log(props.dataForm)
        }
    }

    const handleInputChange = (value) => {
        if (inputType == 'nome') {
            validadeData(value)
        } else {
            const newValue = value.replace(/\s/g, '');
            validadeData(newValue);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {props.data.title}
                </Text>
                <Text style={styles.subtitle}>
                    {props.data.subtitle}
                </Text>
                {inputType === 'cpf' &&
                    <TextInputMask
                        type={'cpf'}
                        value={inputData}
                        onChangeText={text => {
                            validadeData(text)
                        }}
                        style={styles.input}
                        placeholder="000.000.000-00"
                        maxLength={14}
                    />
                }
                {inputType && inputType != 'cpf' && <InputForm value={inputData} onChangeText={handleInputChange} {...props.data} />}
            </View>
            <View style={styles.footer}>
                <RegisterButton
                    title={inputType ? "Continuar" : "Aceitar e cadastrar"}
                    isDisabled={!isValid && inputType}
                    onPress={handleFormSubmitAndNext}
                />
            </View>
        </View>
    );
}

export default RegisterStep;