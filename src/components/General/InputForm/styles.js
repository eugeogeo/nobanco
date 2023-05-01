import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: RFValue(2.8),
        borderBottomColor: '#EDEDED',
        marginTop: 20,
    },
    input: {
        flex: 1,
        fontSize: 26,
        fontWeight: '600',
        paddingBottom: 8
    },
});