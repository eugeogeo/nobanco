import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between'
    },
    header: {
        width: '100%',
        paddingTop: RFValue(50),
        paddingHorizontal: RFValue(32)
    },
    footer: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 32
    },
    brandImage: {
        width: RFValue(60),
        height: RFValue(60)
    },
    title: {
        fontSize: RFValue(36),
        fontWeight: '600',
        color: '#FFFFFF',
    }
   

});