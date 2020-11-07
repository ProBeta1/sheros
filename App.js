import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import { decode, encode } from 'base-64'
import TimeLine from './src/screens/Timeline/Timeline';
import Settings from "./src/screens/Settings/Settings";
import Hut from './src/screens/Hut/Hut';
import Nav from './src/screens/navigation';
import HelpButton from './src/screens/HelpButton/HelpButton';
import DomesticHelp from './src/screens/DomesticHelp/DomesticHelp';
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }


const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {user ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="TimeLine" component={TimeLine}/>
            <Stack.Screen name="Nav" component={Nav} />
            <Stack.Screen name="HelpButton" component={HelpButton} />
            <Stack.Screen name="DomesticHelp" component={DomesticHelp} />
            <Stack.Screen name="Settings" component={Settings} />
          </>
        ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
