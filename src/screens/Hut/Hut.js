import React, { useEffect, useState, useCallback } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image, Button } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from 'react-native-webview';




const Hut = () => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [ready, setReady] = useState(false);
    const [cstate, setCState] = useState("");
    const [quality, setQuality] = useState();
    const [error, setErr] = useState("");
    const [containerMounted, setContainerMounted] = useState(false);

    const id = firebase.auth().currentUser.uid;
    let user = firebase.auth().currentUser;


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