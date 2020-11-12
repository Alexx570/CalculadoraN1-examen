import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {
    const{Num1, Num2, operacion, total, errorMessage}=props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxContent}>
                    <DataResult title={"Primer número: "} value={`${Num1}.`}/>
                    <DataResult title={"Segundo número: "} value={`${Num2}.`}/>
                    <DataResult title={"Operación realizada: "} value={`${operacion}.`}/>
                    <DataResult style={styles.totals} title={"Resultado: "} value={`$${total.dato}.`}/>
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    )
}

function DataResult (props){
    const {title, value}=props
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        marginTop: 15,
        marginHorizontal: 40,
    },
    boxContent: {
        padding: 30,
    },

    title:{
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom:10,
    },

    value:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    error:{
        textAlign: "center",
        color: "#f00",
        fontWeight:"bold",
        fontSize:20,
    },
    totals:{
        fontWeight:"bold",
    }
})
