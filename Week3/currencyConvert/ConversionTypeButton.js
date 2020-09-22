import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
  } from 'react-native';

class ConversionTypeButton extends Component {
    render() {
        const backgroundColor = 
            this.props.fromCurrency === this.props.from &&
            this.props.toCurrency === this.props.to?
            'lightblue' : null;
        const buttonStyle = { backgroundColor: backgroundColor };
        
        const fromFlag = this.props.from === 'usd' ? '🇺🇲' : '🇻🇳';
        const toFlag = this.props.to === 'usd' ? '🇺🇲' : '🇻🇳';
        
        return (
            <TouchableOpacity 
                style={[styles.button, buttonStyle]}
                onPress={() =>
                    this.props.setConversionCurrencies(this.props.from, this.props.to)
                }
            >
                <Text>{fromFlag} to {toFlag}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 35,
        width: 200,
        margin: 10,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        borderColor: 'lightblue',
        justifyContent: 'center',
      },
})

export default ConversionTypeButton;