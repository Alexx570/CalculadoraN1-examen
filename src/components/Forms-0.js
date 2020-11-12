import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from 'react-native-picker-select';

export default function Form (props){
	const {setNum1, setNum2, setoperacion} = props;
	return(
		<View style={styles.viewForm}>
			<View style={styles.viewInput}>
				<TextInput placeholder="Primer número" keyboardType="numeric" style={styles.input} onChange={e=> setNum1(e.nativeEvent.text)}></TextInput>
				<TextInput placeholder="Segundo número" keyboardType="numeric" style={[styles.input, styles.inputDos]} onChange={e=> setNum2(e.nativeEvent.text)}></TextInput>
			</View>
			<RNPickerSelect style={pickerSelectStyles}
				placeholder={{
					label: "Operación a realizar",
					value: null,
					color: "grey",
				}}
				useNativeAndroidPickerStyle={false}
            	onValueChange={(value) => setoperacion(value)}
            	items={[
                	{ label: 'Suma', value: '1' },
                	{ label: 'Resta', value: '2'},
                	{ label: 'Multiplicación', value: '3' },
                	{ label: 'División', value: '4'},
            	]}
        	/>
		</View>
	);
}

const pickerSelectStyles =StyleSheet.create({
	inputIOS:{
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0.5,
		borderColor: colors.PRIMARY_COLOR_DARK,
		borderRadius: 8,
		color: "black",
		paddingRight: 30.,
		backgroundColor: "#fff",
	},
	inputAndroid:{
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0.5,
		borderColor: colors.PRIMARY_COLOR_DARK,
		borderRadius: 8,
		color: "black",
		paddingRight: 30.,
		backgroundColor: "#fff",
	}

});

const styles = StyleSheet.create({
	viewForm:{
		position: "absolute",
		bottom: 0,
		width: "90%",
		height:180,
		paddingHorizontal: 50,
		backgroundColor: colors.PRIMARY_COLOR,
		borderRadius: 30,
		justifyContent: "center",
	},

	viewInput:{
		flexDirection: "row",
	},

	input:{
		height: 50,
		width: "50%",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: colors.PRIMARY_COLOR_DARK,
		borderRadius: 5,
		marginRight: 5,
		marginLeft: -5,
		color:"000",
		paddingHorizontal: 20,

	},

	inputDos:{
		width:"50%",
		marginLeft: 4,

	}

});