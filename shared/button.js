import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function Button({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 9,
        paddingVertical: 7,
        paddingHorizontal: 10,
        backgroundColor: '#ffcb9a',
    },
    buttonText: {
        color: '#2c3531',
        fontFamily: 'Pridi',
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
});