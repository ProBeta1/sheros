import React, { useEffect, useState, useCallback } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image, Button } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';
import { Permissions, Notifications } from 'expo';



const Hut = () => {

    const id = firebase.auth().currentUser.uid;

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        firebase.firestore().collection("location").doc(id).set(location)
      })();
    }, []);


    useEffect(() => {
      askPermissions = async () => {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          return false;
        }
        return true;
      };
      
      registerForPushNotifications = async () => {
        const enabled = await this.askPermissions();
        if (!enabled) {
          return Promise.resolve();
        }
        // Get the token that uniquely identifies this device
        let token = await Notifications.getExpoPushTokenAsync();
        
        // pass it to db
        firebase.firestore().collection('expoToken').doc(id).set(token);
      };
    },[]);



    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'krSG-RtiWUA',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: '6Rfn94k717U',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: '5nM21P8lJ2I',
        },
      ];

      const DATA2 = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'KVpxP3ZZtAc',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'pndPbpHLpos',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: '9m-x64bKfR4',
        },
      ];
      
      const Item = ({ title }) => (
        <View style={styles.item}>
           <YoutubePlayer
                height={280}
                width={280}
                play={playing}
                videoId={title}
                onChangeState={onStateChange}
            />
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );


    return(
        <View style={styles.container}>
               <Text style={styles.boldT}>Video courses</Text>
               <FlatList
                horizontal={true}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
               />

                <Text style={styles.boldTT}>Safety Tips</Text>
               <FlatList
                horizontal={true}
                data={DATA2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
               />


           
                  
        </View>
    )
}

export default Hut;