import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
} from 'react-native';

const WIDTH_DEVICE = Dimensions.get('window').width;

class FormattedCurrency extends Component {
    render() {
        const format = this.props.type === 'usd' ? 'us' : 'vn';
        const currency = this.props.type === 'usd' ? 'USD' : 'VND';
        const flag = this.props.type === 'usd' ? '🇺🇸' : '🇻🇳';

        const formatter = new Intl.NumberFormat(format, {
            currency,
            style: 'currency'
        });

        return (
            <Text style={styles.currencyText}>
                {formatter.format(this.props.value)} {flag}
            </Text>
        );
    }
}

export default FormattedCurrency;

const styles = StyleSheet.create({
    currencyText: {
        fontSize: WIDTH_DEVICE/20,
        color: 'green',
        fontWeight: 'bold',
    }
});