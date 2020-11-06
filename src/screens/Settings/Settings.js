import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import Item from "./Item";
import user from '../../pics/user.png';
import help from '../../pics/help.png';
import lock from '../../pics/lock.png';
import badge from '../../pics/badge.png';
import mail from '../../pics/mail.png';
import logout from '../../pics/logout.png';

const Settings = (props) => {

    const DATA = [
        {
            img: user,
            title: 'My account',
            content: 'Acount details and profile'
        },
        {
            img: lock,
            title: 'Security',
            content: 'Security options & controls'
        },
        {
            img: badge,
            title: 'Privacy',
            content: 'Information collected & usage'
        },
        {
            img: mail,
            title: 'Communication',
            content: 'Emails, invites and notifications'
        },
        {
            img: help,
            title: 'Help & Support',
            content: 'FAQ & help desk'
        }, {
            img: logout,
            title: 'Log out',
            content: 'Log out of your account'
        },

    ]


    const renderItem = ({ item }) => (
        <Item img={item.img} title={item.title} content={item.content} navigation={props.navigation}/>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />



        </View>
    )
}

export default Settings;