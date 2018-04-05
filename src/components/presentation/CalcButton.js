import React, { Component } from 'react'
import { View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'

class CalcButton extends Component {

	render(){
		return(
			<TouchableOpacity 
              // onPress={this.handleButtonInput.bind(this, this.validKeys[i])}
              style={styles.button}>
              
              <Text style={styles.btnText}>{this.props.value}</Text>
            </TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({

    button: {
        flex:1, 
        borderWidth:1, 
        backgroundColor: "rgb(224,224,224)",
        justifyContent: "center", 
        alignItems: "center"
    },
    row: {
        flex:1, 
        flexDirection: "row"
    },
    btnText: {
        fontSize: 36
    }
})

export default CalcButton