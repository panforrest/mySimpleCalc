import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

class Calc extends Component {
    render(){
    	return(
    	  <View style={{ flex: 1, backgroundColor: "red"}}>
    		<TextInput style={{
    			backgroundColor: "rgb(41, 41, 41)",
    			height: 150, 
                width: 100 + "%",
                color: "rgb(255, 255, 255)",
                fontSize: 48,
                textAlign: "right"
    		}}
    		/>
          </View>
    	)
    }
}

export default Calc