import Timeline from 'react-native-timeline-flatlist'
import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Time = () => {

  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [img, setImg] = useState(null);
  const [list, setList] = useState(
    [
      {
        "name":"Batman",
        "contact":"+91 1234567890"
      },
      {
        "name":"Wonderwoman",
        "contact":"+91 9876543210"
      }
    ]);
  const  id = firebase.auth().currentUser.uid;

  const Item = ({ name, contact }) => (
            <View style={styles.items}>
               <MaterialCommunityIcons name="human-greeting" size={45} />
               <View style={styles.litem}>
               <Text style={styles.txt}>{name}</Text>
              <Text>{contact}</Text>
              </View>
              <TouchableOpacity style={styles.edit}>
                  <MaterialCommunityIcons name="folder-edit-outline" size={30} color="red" />
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

export default Time;
