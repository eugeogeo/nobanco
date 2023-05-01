import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'space-between'
    },
    header: {
        width: '100%',
        paddingHorizontal: 16
    },
    title: {
        fontSize: RFValue(26),
        fontWeight: '600',
    },
    subtitle: {
        fontSize: RFValue(17.9),
        color: '#888888',
        marginTop: 10
    },
    input: {
        marginTop: 20,
        fontSize: 26,
        fontWeight: '600',
        height: 40,
        borderBottomWidth: RFValue(2.8),
        borderBottomColor: '#EDEDED',
        paddingBottom: 8
    },
    footer: {
        paddingHorizontal: 16,
        paddingVertical: RFValue(60),
    }
});