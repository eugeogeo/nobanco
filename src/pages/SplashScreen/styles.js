import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#820AD1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: RFValue(150),
        height: RFValue(150)
    }
});