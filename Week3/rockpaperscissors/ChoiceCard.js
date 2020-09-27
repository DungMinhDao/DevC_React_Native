import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

const WIDTH_DEVICE = Dimensions.get('window').width;

class ChoiceCard extends Component {
    render() {
        const player = this.props.player;
        const choice = this.props.choice;
        const uri = choice.uri;
        const name = choice.name;
        const title = name && name.charAt(0).toUpperCase() + name.slice(1);
        return (
            <View style={styles.choiceContainer}>
                <Text style={styles.choiceDescription}>{player}</Text>
                <Image source={{uri}} resizeMode='contain' style={styles.choiceImage}/>
                <Text style={styles.choiceCardTitle}>{title}</Text>
            </View>
        );
    }
}

export default ChoiceCard;

const styles = StyleSheet.create({
    choiceContainer: {
        width: WIDTH_DEVICE/2-10,
        alignItems: 'center',
    },
    choiceCardTitle: {
        fontSize: WIDTH_DEVICE/20,
        color: '#250902'
    },
    choiceDescription: {
        fontSize: WIDTH_DEVICE/18,
        color: '#250902',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: WIDTH_DEVICE/20,
    },    
    choiceImage: {
        width: WIDTH_DEVICE * 0.4,
        height: WIDTH_DEVICE * 0.2,
        padding: 10,
    }
})