import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

const WIDTH_DEVICE = Dimensions.get('window').width;

class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.buttonStyle}          
                onPress={() => this.props.onPress(this.props.name)}
            >
                <Text style={styles.buttonText}>
                    {this.props.name.charAt(0).toUpperCase() 
                    + this.props.name.slice(1)}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
        width: WIDTH_DEVICE/2,
        margin: WIDTH_DEVICE/60,
        height: WIDTH_DEVICE/8,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#640D14',
    },
    buttonText: {
        fontSize: WIDTH_DEVICE/15,
        color: 'white',
        fontWeight: 'bold',
    },
})