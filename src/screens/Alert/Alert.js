import Timeline from 'react-native-timeline-flatlist'
import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Alert = () => {

 
    const  id = firebase.auth().currentUser.uid;

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Seek Help</Text>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Legal advise</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn2}>
            <Text style={styles.btnText}>Domestic violence</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn3}>
            <Text style={styles.btnText}>Emergency !!</Text>
          </TouchableOpacity>
              
        </View>
    )
}

export default Alert;
