import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function CalculatorScreen() {

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handlePress = (value: string) => {
        if(value === "="){
            try{
                const calculatedResult = eval(input).toString();
                setResult(calculatedResult);
                setInput(calculatedResult);
            } catch(error){
                setResult("erro");
            }
        } else if(value === "C"){
            setInput("");
            setResult("");
        } else {
            setInput((prev)=> (result && prev === result ? result + 
                value : prev + value));
                setResult("");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.result}>{result || input || "0"}</Text>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button} 
                onPress={() =>handlePress("+")}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("-")}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("*")}>
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("/")}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("9")}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("8")}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("7")}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("6")}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("5")}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("4")}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("3")}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("2")}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("1")}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("0")}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("C")}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress={() =>handlePress("=")}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5"
    },

    result: {
        fontSize: 40,
        marginBottom: 20,
        textAlign: "right",
        width: "90%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        elevation: 2
    },

    row: {
        flexDirection: "row",
        justifyContent: "center"
    },

    button: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        backgroundColor: "#2196F3",
        borderRadius: 10,
        elevation: 2
    },

    buttonText: {
        fontSize: 30,
        color: "#fff"
    }
});