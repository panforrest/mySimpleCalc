import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

class Calc extends Component {

	constructor(){
		super()
		this.state = {
			inputText: ''
		}
        this.validKeys=[
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "+",
          "-",
          "/",
          "*",
          "="
        ];
	}

    handleInput(text){
    	console.log(text)
        this.setState({
        	inputText: text
        })
    }

    render(){
    	return(
    	  <View style={{ flex: 1}}>
    		<TextInput 
    		    onChangeText={this.handleInput.bind(this)}
    		    value={this.state.inputText}
    		    style={styles.input}
            />
              <View style={{flex:1, flexDirection: "row"}}>
              { this.validKeys.map((key, i) => {
                return <View style={styles.button} />
                
              })}
              </View>
          </View>
    	)
    }
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: "rgb(41, 41, 41)",
		height: 100, 
        width: 100 + "%",
        color: "rgb(255, 255, 255)",
        fontSize: 48,
        textAlign: "right"
	},
    button: {flex:1, borderWidth:1}
})

export default Calc