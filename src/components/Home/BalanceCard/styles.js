import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#9500F6',
        marginTop: 19,
        paddingHorizontal: 20,
        paddingVertical: 22,
        borderRadius: 21
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: RFValue(14),
        fontWeight: '600',
        color: '#FFFFFF',
    },
    walletIcon: {
        width: RFValue(26),
        height: RFValue(26)
    },
    balance: {
        fontSize: RFValue(36),
        fontWeight: '700',
        color: '#FFFFFF',
        marginTop: 16
    }
    

});