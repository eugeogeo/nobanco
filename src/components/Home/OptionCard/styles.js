import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        padding: RFValue(16),
        marginRight: RFValue(8),
        backgroundColor: "#9500F6",
        borderRadius: RFValue(21),
        width: RFValue(100),
        height: RFValue(127),
        justifyContent: "space-between",
    },
    title: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: RFValue(12),
    }, 
    image: {
        width: RFValue(24),
        height: RFValue(24),
        resizeMode: 'contain'
    }
});