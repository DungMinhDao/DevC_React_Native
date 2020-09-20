import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Alert, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Constants from "expo-constants";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons"

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const WIDTH_DEVICE = Dimensions.get('window').width;
const HEIGHT_DEVICE = Dimensions.get('window').height;

export default function App() {
  const [newStyle, setNewStyle] = useState(1);
  const [follow, setFollow] = useState("Follow");
  const allText = ["Follow", "Followed"];
  const data = {
    stats: [
      {number: 210, text: "Photos"},
      {number: "15k", text: "Followers"},
      {number: 605, text: "Following"},
    ],
    images: [],
  };

  function styleButton() {
    return newStyle == 1? 
      styles.profileButtonFollow: 
      styles.profileButtonFollow2;
  }

  function styleFollow() {
    const a = follow;
    const b = a == "Follow"? setFollow("Followed"): setFollow("Follow");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={WIDTH_DEVICE/15}></AntDesign>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={WIDTH_DEVICE/15}
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
            <TouchableOpacity 
              style={[styleButton(), styles.shadow]}
              onPress={()=>{
                const a = newStyle;
                setNewStyle(1 - a);
                styleFollow();
              }}
            >
              <Text style={{color: 'white', fontSize: WIDTH_DEVICE/25}}>{follow}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.profileButtonSend, styles.shadow]}
              onPress={()=>{
                Alert.alert("Message sent successfully!");
              }}
            >
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
      
      <View style={{flex: 10}}> 
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.contentColumnLeft}> 
              <Image 
                style={styles.contentPicture}
                source={require("./assets/2.jpg")}
              />
              <Image 
                style={styles.contentPicture}
                source={require("./assets/3.jpg")}
              />
              <Image 
                style={styles.contentPicture}
                source={require("./assets/4.jpg")}
              />
              <Image 
                style={styles.contentPicture}
                source={require("./assets/5.jpg")}
              />
            </View>
            <View style={styles.contentColumnRight}>
              <Image
                style={styles.contentPicture}
                source={require("./assets/6.jpg")}
              />
              <Image 
                style={styles.contentPicture}
                source={require("./assets/7.jpg")}
              />
              <Image 
                style={styles.contentPicture}
                source={require("./assets/8.jpg")}
              />
            </View>
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
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: WIDTH_DEVICE / 18,
    width: WIDTH_DEVICE - 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    width: WIDTH_DEVICE * 5/6,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  profilePicture: {
    width: WIDTH_DEVICE / 4,
    height: WIDTH_DEVICE / 4,
    borderRadius: 700,
    marginRight: 20,
  },
  profileInfo: {
    width: WIDTH_DEVICE * 3/4 - 40,
    justifyContent: "space-evenly",
  },
  profileName: {
    flex: 1,
    fontWeight: "600",
    fontSize: WIDTH_DEVICE / 18,
  },
  profileJob: {
    flex: 1,
    color: '#AAAAAA',
    fontSize: WIDTH_DEVICE / 22,
    alignItems: "center",
  },
  profileButton: {
    width: WIDTH_DEVICE * 1/2 - 20,
    height: WIDTH_DEVICE / 12,
    flexDirection: "row",
    // backgroundColor: "#555",
  },
  profileButtonFollow: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: FOLLOW_COLOR,
    borderRadius: 20,
    marginRight: 10,
  },
  profileButtonFollow2: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#42a5f5",
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
    width: WIDTH_DEVICE * 5/6 ,
    height: WIDTH_DEVICE/8,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: WIDTH_DEVICE/20,
  },
  statsBoxes: {
    justifyContent: "space-around",
  }, 
  statsNumber: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "600",
    fontSize: WIDTH_DEVICE/20,
  },
  statsText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: WIDTH_DEVICE/25,
  },
  content: {
    width: WIDTH_DEVICE * 7/8,
    flexDirection: "row",                
    justifyContent: "space-between",
  },
  contentColumnLeft: {
    flex: 1,
    paddingRight: 5,
  },
  contentColumnRight: {
    flex: 1,
    paddingLeft: 5,
  },
  contentPicture: {
    flex: 1,
    width: "100%",
    height: WIDTH_DEVICE/3,
    resizeMode: 'cover',
    marginVertical: 5,
    borderRadius: 10,
  },
  footer: {
    height: WIDTH_DEVICE/6,
    width: WIDTH_DEVICE - 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerIcons: {
    flex: 0.5,
    alignItems: "center",
    fontSize: 25,
    textAlign: "center",
  },
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 4},
    elevation: 2,
  }
});
