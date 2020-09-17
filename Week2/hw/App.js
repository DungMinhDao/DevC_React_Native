import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Constants from "expo-constants";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons"

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

export default function App() {
  const data = {
    stats: [
      {number: 210, text: "Photos"},
      {number: "15k", text: "Followers"},
      {number: 605, text: "Following"},
    ],
    images: [],
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={25}></AntDesign>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={25}
        />
      </View>


      <View style={styles.profile}>
        <Image
          style={styles.profilePicture}
          source={require("./assets/1.jpg")}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Dao Minh Dung</Text>
          <Text style={styles.profileJob}>Student</Text>
          <View style={styles.profileButton}>
            <TouchableOpacity style={styles.profileButtonFollow}>
              <Text style={{color: 'white'}}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButtonSend}>
              <MaterialIcons
                name="send"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>


      <View style={styles.stats}>
        <View style={styles.statsBoxes}>
          <Text style={styles.statsNumber}>210</Text>
          <Text style={styles.statsText}>Photos</Text>
        </View>
        <View style={styles.statsBoxes}>
          <Text style={styles.statsNumber}>15k</Text>
          <Text style={styles.statsText}>Followers</Text>
        </View>
        <View style={styles.statsBoxes}>
          <Text style={styles.statsNumber}>605</Text>
          <Text style={styles.statsText}>Following</Text>
        </View>
      </View>


      

      <View style={styles.content}>
        <ScrollView>
          <View style={styles.column}></View>
          <View style={styles.column}></View>
        </ScrollView>
      </View>


      <View style={styles.footer}>
        <Feather
          style={styles.footerIcons}
          name="home"
        />
        <AntDesign
          style={styles.footerIcons}
          name="pluscircleo"
        />
        <Feather 
          style={styles.footerIcons}
          name="user"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: Constants.statusBarHeight,
    padding: 25,
  },
  header: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 500,
    marginRight: 20,
  },
  profileInfo: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  profileName: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 17,
  },
  profileJob: {
    flex: 1,
    color: '#AAAAAA',
  },
  profileButton: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
  },
  profileButtonFollow: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 20,
    marginRight: 10,
  },
  profileButtonSend: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: SEND_MESSAGE_COLOR,
    borderRadius: 20,  
  },
  stats: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsBoxes: {
    flexDirection: "column",
  }, 
  statsNumber: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 15,
  },
  statsText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 12,
  },
  content: {
    flex: 10,

  },
  footer: {
    flex: 1.5,
    flexDirection: "row",
    marginBottom: Constants.statusBarHeight,
    justifyContent: "center",
  },
  footerIcons: {
    flex: 0.4,
    alignItems: "center",
    fontSize: 25,
    textAlign: "center",
  }
});