import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    button: {
        padding: RFValue(4),
        backgroundColor: "#9500F6",
        borderRadius: 999,
    },
    settingsImage: {
        width: RFValue(27),
        height: RFValue(27)
    }
});