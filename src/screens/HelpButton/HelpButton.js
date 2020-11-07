import Timeline from 'react-native-timeline-flatlist'
import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import alert from "../../pics/alert.gif";

const HelpButton = () => {

  const [handled, setHandled] = useState(false);
  const [password, setPassword] = useState();

 
    const  id = firebase.auth().currentUser.uid;

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
