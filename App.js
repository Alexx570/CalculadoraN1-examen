import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox } from "react-native";
import Form from "./src/components/Forms";
import ResultCalculation from "./src/components/Calculation";
import Footer from "./src/components/Footer";
import colors from "./src/utils/colors";

YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App(){
	const [Num1, setNum1] = useState(null);
	const [Num2, setNum2] = useState(null);
	const [operacion, setoperacion]= useState(null);
	const [total, setTotal]= useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		if( Num1 && Num2 && operacion )calculate();
		else reset();
	}, [ Num1, Num2, operacion ])

	const calculate= () =>{
		reset();
		if (!Num1){
			setErrorMessage("Ingrese el primer numero");
		} else if (!Num2){
			setErrorMessage("Ingrese el segundo número");
		} else if (!operacion){
			setErrorMessage("Seleccione la operación a realizar");
		} else{
			if(setoperacion==1){
				total=(Num1)+Num2;
			}
			else if (setoperacion==2){
				total=Num1-Num2;
			}
			else if (setoperacion==3){
				total=Num1*Num2;
			}
			else if (setoperacion==4){
				total=Num1/Num2;
			}

			setTotal({
				settotal: total.toFixed(2),
			})
		}
	}

	const reset= () =>{
		setErrorMessage ("");
		setTotal(null);
	}

	return(
	<>
		<StatusBar barStyle="light-content"/>
	  	<SafeAreaView style={styles.safeArea}>
		  <View style={styles.background}></View>
		  <Text style={styles.titleApp}>Calculadora</Text>
		  <Form
			  setNum1={setNum1}
			  setNum2={setNum2}
			  setoperacion={setoperacion}
		  />
		</SafeAreaView>
		<ResultCalculation 
			Num1={Num1}
			Num2={Num2}
			operacion={operacion}
			total={total}
			errorMessage={errorMessage}
		/>
		<Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
	safeArea:{
		height: 290,
		alignItems: "center",
	},

	background:{
		backgroundColor: colors.PRIMARY_COLOR_DARK,
		height: 200,
		width: "100%",
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		position: "absolute",
		zIndex: -1,
	},

	titleApp:{
		fontSize: 25,
		fontWeight: "bold",
		color: "#fff",
		marginTop: 15,
	}
});
