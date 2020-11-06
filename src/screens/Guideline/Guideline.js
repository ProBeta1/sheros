import Timeline from 'react-native-timeline-flatlist'
import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Guideline = () => {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState(null);
    const [list, setList] = useState(
      [
        {
          "name":"Facing Danger(alone)",
        },
        {
          "name":"Facing Danger(group)",
        },
        {
          "name":"Calling for help",
        },{
          "name":"Someone following me",
        },{
          "name":"Helping someone in danger",
        },{
          "name":"Supporting others(low risk)",
        },
        
      ]);
    const  id = firebase.auth().currentUser.uid;

    const Item = ({ name, contact }) => (
              <View style={styles.items}>
                 <View style={styles.litem}>
                 <Text style={styles.txt}>{name}</Text>
                </View>
                <TouchableOpacity style={styles.edit}>
                    <MaterialCommunityIcons name="arrow-right-drop-circle-outline" size={30} color="red" />
                </TouchableOpacity>
                </View>
    );

    const renderItem = ({ item }) => (
      <Item name={item.name} contact={item.contact} />
    );

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Guidelines</Text>

              <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
               />
           
        </View>
    )
}

export default Guideline;
