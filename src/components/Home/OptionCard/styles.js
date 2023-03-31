import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
        padding: RFValue(16),
        margin: RFValue(10),
        backgroundColor: "#9500F6",
        borderRadius: RFValue(28),
        width: RFValue(100),
        height: RFValue(127),
        justifyContent: "space-between",
    }, title: {
        color: "#ffffff",
        fontWeight:"bold",
       
    }, image: {
        width: RFValue(24),
        height: RFValue(24),
    }
});