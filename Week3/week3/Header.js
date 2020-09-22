import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>
                Hello, {this.props.name}
            </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
