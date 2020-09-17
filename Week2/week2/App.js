import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Constants from "expo-constants";
import { Feather } from '@expo/vector-icons';

export default function App() {
  const data = [
    { 
      posterName: 'dungdao706', 
      avatarUrl: require('./assets/avt1.png'), 
      imageUrl: require('./assets/avt3.jpg')
    },
  ];
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={{width: 27}}></View>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          }}
          style={styles.logo}
          // resizeMode="contain"
        />
        <Feather color='black' size={27} name='inbox'></Feather>
      </View>

 


      <View style={styles.avatarWrapper}>
          <Image
            source={"./assets/avt1.png"}
            style={styles.posterAvatar}
          />
          <Text style={styles.posterName}>dungdao706</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.imagePoster}
          source={require("./assets/avt4.png")}
        />
        <View style={styles.iconsContainer}>
          <Feather name="heart" size={27} color="black"></Feather>
          <Feather name="message-square" size={27} color="black"></Feather>
          <Feather name="share" size={27} color="black"></Feather>
        </View>
        <Text></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#f3f6fa",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    height: 90,
    width: null,
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 12,
  },
  posterAvatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  posterName: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 10,
  },
  imagePoster: {
    flex: 1,
    height: null,
    width: "80%",
  },
  imageWrapper: {
    height: 300,
  },
  iconsContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
  }
});

