import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#820AD1',
    },
    header: {
        width: '100%',
        paddingTop: RFValue(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: RFValue(55)
    },
    brandImage: {
        width: RFValue(60),
        height: RFValue(60)
    },
    cardAndBalance: {
        width: '100%',
        padding: RFValue(30),
    }

});