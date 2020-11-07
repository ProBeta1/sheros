import Timeline from 'react-native-timeline-flatlist'
import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import yalert from "../../pics/yalert.gif";

const DomesticHelp = () => {

    const  id = firebase.auth().currentUser.uid;


    return (
        <View style={styles.container}>
          <Text style={styles.title}>Help button triggered</Text>

          <Image source={yalert} style={styles.alertIcon} />
          <Text style={styles.ht}> Anti Domestic Violence Organizations will get in touch with you shortly  </Text>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Call police</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Call ambulance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Call helpline</Text>
          </TouchableOpacity>
              
        </View>
    )
}

export default DomesticHelp;
