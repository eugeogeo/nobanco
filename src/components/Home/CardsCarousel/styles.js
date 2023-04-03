import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container:{
        width: '100%'  
    },
    textTitle:{
        fontSize: RFValue(14),
        fontWeight: '600',
        color: "#FFFFFF",
    },
    titleWrapper: {
        width: '100%',
        paddingHorizontal: RFValue(32),
        marginVertical: RFValue(30)
    }
});