import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 16,
        borderRadius: 32,
        alignItems: 'center',
        marginTop: 24
    },
    title: {
        fontSize: RFValue(14),
        fontWeight: '600',
        color: '#FFFFFF',
    }
    

});