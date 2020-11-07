import Timeline from 'react-native-timeline-flatlist'
import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import alert from "../../pics/alert.gif";
import * as Location from 'expo-location';

const HelpButton = () => {

  const [handled, setHandled] = useState(false);
  const [password, setPassword] = useState();

 // send the notifs to nearby with live updates

    const  id = firebase.auth().currentUser.uid;

    const rad = (x) => {
      return x*Math.PI / 180;
    }

    useEffect(() => {

  
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
    
          let location = await Location.getCurrentPositionAsync({});

          // firebase.firestore().collection("location").doc(id).set(location)
          
          //find nearby people

          let x0 = location.coords.latitude;
          let y0 = location.coords.longitude;

          firebase.firestore().collection("location").get().then(
            (querySnap) => {
              querySnap.forEach(
                (doc) => {
                  let x = doc.coords.latitude;
                  let y = doc.coords.longitude;

                  let R = 6378137; 
                  let dLat = rad(x - x0);
                  let dLong = rad(y - y0);
                  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
                  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                  let d = R * c;

                   if(d<5000){
                     // notify this one
                     console.log("haha");
                   } 

                }
              )
            }
          )



        })();

  
      
    }, []);

    const handleManaged = () => {
      //update everyone
    }

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Help button triggered</Text>

          <Image source={alert} style={styles.alertIcon} />
          <Text style={styles.ht}> Help Incoming  </Text>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Call police</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Call ambulance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => setHandled(true)}>
            <Text style={styles.btnText}>Situation handled</Text>
          </TouchableOpacity>

          {handled?
              <View>
                <Text>Please enter your password to confirm</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Secret Key'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.btn} onPress={handleManaged}>
                  <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
              </View>
          :<></>}
              
        </View>
    )
}

export default HelpButton;
