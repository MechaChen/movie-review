import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={[styles.cardContent, props.direction === 'row' && styles.horizontalCard]}>
                { props.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#d1e8e2',
        shadowOffset: { width: 3, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 50,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    horizontalCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
