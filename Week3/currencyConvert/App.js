import React from 'react';
import { 
  StyleSheet, 
  Text, 
  ScrollView,
  TextInput, 
  Dimensions, 
} from 'react-native';
import Constants from "expo-constants";
import ConversionTypeButton from "./ConversionTypeButton";
import FormattedCurrency from "./FormattedCurrency";

const WIDTH_DEVICE = Dimensions.get('window').width;
var rate;
fetch('https://free.currconv.com/api/v7/convert?q=USD_VND&compact=ultra&apiKey=35b646f322af86b8cd02')
.then(response => response.json())
.then(data => rate = data["USD_VND"]);


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCurrencyValue: 0,
      convertedCurrencyValue: 0,
      fromCurrency: 'vnd',
      toCurrency: 'usd',
    }
  }
  
  convertCurrency = (currentCurrency) => {
    let convertedCurrency = this.state.fromCurrency == 'vnd'?
      currentCurrency / rate: currentCurrency * rate;
    this.setState({
      currentCurrencyValue: currentCurrency,
      convertedCurrencyValue: convertedCurrency,
    })
  };

  setConversionCurrencies = (from, to) => {
    this.setState({
      fromCurrency: from,
      toCurrency: to,
    }, () => this.convertCurrency(this.state.currentCurrencyValue))
  };
  


  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{padding: 5}}>
          Please enter the value of the currency you want to convert
        </Text>
        <TextInput 
          onChangeText={ (currency) =>
            this.convertCurrency(currency)
          }
          autoFocus={true}
          textAlign="center"
          selectionColor="red"
          keyboardType="decimal-pad"
          placeholder="100,000,000 VND"
          style={{
            height: WIDTH_DEVICE/8,
            padding: 5,
            width: WIDTH_DEVICE * 5/6,
            fontSize: WIDTH_DEVICE/16,
            borderWidth: 1,
            borderColor: 'lightblue'
          }}
        />
        <ConversionTypeButton 
          from="vnd"
          to="usd"
          fromCurrency={this.state.fromCurrency}
          toCurrency={this.state.toCurrency}
          setConversionCurrencies={this.setConversionCurrencies}
        />
        <ConversionTypeButton 
          from="usd"
          to="vnd"
          fromCurrency={this.state.fromCurrency}
          toCurrency={this.state.toCurrency}
          setConversionCurrencies={this.setConversionCurrencies}
        />
        <Text>Current currency:</Text>
        {/* <Text style={styles.currencyText}>
          {this.state.currentCurrencyValue}
        </Text> */}
        <FormattedCurrency
          type={this.state.fromCurrency}
          value={this.state.currentCurrencyValue}
        />
        <Text>Conversion currency:</Text>
        {/* <Text style={styles.currencyText}>
          {this.state.convertedCurrencyValue}
        </Text> */}
        <FormattedCurrency
          type={this.state.toCurrency}
          value={this.state.convertedCurrencyValue}
        />
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    backgroundColor: "#fff",
    justifyContent: 'flex-start',
  },
});
