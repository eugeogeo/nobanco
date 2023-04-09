import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#9500F6',
        height: RFValue(191),
        borderRadius: RFValue(21),
        padding: RFValue(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: RFValue(24),
        fontWeight: '600',
        color: '#FFFFFF',
        height: RFValue(38),
    },
    mastercard: {
        width: RFValue(68),
        height: RFValue(38)
    },
    cardLeft: {
        flex: 1,
        justifyContent: 'flex-end'
    }

});