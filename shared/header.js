import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title, isMenuShow = true }) {
    return (
        <View style={styles.header}>
            {isMenuShow && 
                <MaterialIcons name="menu" size={28} onPress={() => navigation.openDrawer()} style={styles.icon} />
            }
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.title}>{ title }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        backgroundColor: '#2c3531',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        left: 15,
        color: '#d9b08c',
    },
    title: {
        fontFamily: 'Pridi',
        fontSize: 20,
        color: '#d9b08c',
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 5,
    },
});