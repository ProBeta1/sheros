import Timeline from 'react-native-timeline-flatlist'
import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE , Marker, MarkerAnimated } from 'react-native-maps'; 
import * as Location from 'expo-location';
import help from "../../pics/help.jpg";

const Danger = () => {
  const [location, setLocation] = useState({coords:{latitude:0,longitude:0}});
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
      <View style={styles.container}>
       <Text style={styles.title}>Someone near you needs help!</Text>

        <View style={styles.mapV}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            showsUserLocation
            showsCompass
            showsTraffic
            style={{height:350, width:350}}
            region={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
           <Marker coordinate={{ latitude: location.coords.latitude, longitude:  location.coords.longitude }} title="lol" description="hahahhaha" pinColor="blue" >
              <Image source={help} style={styles.helpImage} />
             </Marker>

          </MapView>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Call police</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Call ambulance</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    );
}

export default Danger;
