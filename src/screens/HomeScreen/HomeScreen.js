import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import upload from "../../pics/upload.png";
import plus from "../../pics/plus.png"
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen(props) {

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const id = firebase.auth().currentUser.uid;

    const openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access gallery is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        //console.log(pickerResult);
        if (pickerResult.cancelled === true) {
            return;
          }
      
          setSelectedImage({ localUri: pickerResult.uri });
      }



    const handleNav = () => {
        props.navigation.navigate("Nav");
    }
   

    return (
            <KeyboardAwareScrollView
               style={styles.container}
            >

            <Text style={styles.title}>Verification</Text>
            <Text style={styles.subt}>Please upload your identification document with your gender</Text>
            <Text style={styles.tx}>Your personal information will not be saved and will be distoryed immediately after verifying your identity</Text>

            <TouchableOpacity style={styles.buttonU} onPress={openImagePickerAsync}>
                <MaterialCommunityIcons name="camera" size={24} color="black" />
                <Text style={styles.bText}>Take a photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonU}  onPress={openImagePickerAsync}>
                 <MaterialCommunityIcons name="file-upload" size={24} color="black" />
                <Text style={styles.bText}>Upload from device</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonU}>
                <MaterialCommunityIcons name="cloud-upload" size={24} color="black" />
                <Text style={styles.bText}>Upload from drive</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={handleNav}>
                <Text style={styles.bText}>Continue</Text>
            </TouchableOpacity>
                

        </KeyboardAwareScrollView>
        
    )
}

console.disableYellowBox = true;