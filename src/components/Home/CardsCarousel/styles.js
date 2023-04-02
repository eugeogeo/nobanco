import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container:{
        padding: RFValue(30),
        
    },
    textTitle:{
        alignItems:"flex-start",
        color: "#ffffff",
    },
    carousel: {
        paddingTop: RFValue(36),
        height: RFValue(127),
        flexDirection: "row",
        
    },
});